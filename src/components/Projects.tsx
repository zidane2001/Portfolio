import Title from "./Title";
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png'
import img6 from '../assets/projects/6.png';
import { Github, Video } from "lucide-react";



const projets = [
    {
        id: 1,
        title: 'gestionnaire de Taches',
        description: 'A simple task manager application built with React and TypeScript. It allows users to create, update, and delete tasks, providing a clean and intuitive interface.',
        demoLink: 'https://example.com/demo-task-manager',
        repoLink: 'https://github.com/zidane2001/task-manager',
        image: img1,
        tecnologies: ['React', 'Node.js', 'MongoDB'],
    },

    {
        id: 2,
        title: 'plateforme E-commerce',
        description: 'An e-commerce platform built with React and Node.js, allowing users to browse products, add them to a cart, and complete purchases securely.',
        tecnologies: ['React', 'Node.js', 'MongoDB'],
        image: img2,
        demoLink: 'https://example.com/demo-e-commerce',
        repoLink: 'https://github.com/zidane2001/e-commerce',

    },
    {
        id: 3,
        title: 'Portfolio Interactif',
        description: 'An interactive portfolio website showcasing my projects and skills, built with React and Tailwind CSS. It features smooth animations and responsive design.',
        tecnologies: ['React', 'TypeScript', 'CSS'],
        demoLink: 'https://example.com/demo-portfolio',
        repoLink: 'https://github.com/zidane2001/portfolio',
        image: img3

    },
    {
        id: 4,
        title: 'Jeux de saut d\'obstacles',
        description: 'A simple obstacle jumping game built with HTML, CSS, and JavaScript. Players control a character to jump over obstacles and score points.',
        tecnologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://example.com/demo-jumping-game',
        repoLink: 'https://github.com/zidane2001/jumping-game',
        image: img4
    },
    {
        id: 5,
        title: 'calculatrice avancee',
        description: 'An advanced calculator application built with React and TypeScript. It supports basic arithmetic operations, scientific calculations, and a user-friendly interface.',
        tecnologies: ['React', 'TypeScript', 'CSS'],

        demoLink: 'https://example.com/demo-advanced-calculator',
        repoLink: 'https://github.com/zidane2001/advanced-calculator',
        image: img5
    },
    {
        id: 6,
        title: 'generateur de mot de passe',
        description: 'A password generator application that creates secure and random passwords based on user-defined criteria such as length and character types.',
        tecnologies: ['JavaScript', 'HTML', 'CSS'],
        demoLink: 'https://example.com/demo-password-generator',
        repoLink: 'https://github.com/zidane2001/password-generator',
        image: img6,
    }



]
function Projects() {
    return (
        <div className="flex flex-col items-center  md:px-0 gap-10 justify-center py-10">
            <Title title="My Projects" />
            <div className="w-full grid md:grid-cols-3 gap-4 ">

                {projets.map((project) => (
                    <div key={project.id} className="w-full bg-base-300 p-5 h-fit rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 hover:translate-y-[-5px] cursor-pointer ">
                        <img src={project.image} alt={project.title} className=" h-96 object-cover w-full rounded-lg mb-4" />
                        <div>
                            <h1 className="font-bold my-2">{project.title}</h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap my-3">
                            {project.tecnologies.map((tech, index) => (
                                <span key={index} className="badge badge-accent p-2badge-sm mr-2 mb-2">{tech}</span>

                            ))}
                        </div>
                        <div className="flex justify-between">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-2/3 mr-2">Demo <Video className="w-6 h-6" /></a>

                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-neutral w-1/3 ml-2"> Repo <Github className="w-6 h-6" /></a>



                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
