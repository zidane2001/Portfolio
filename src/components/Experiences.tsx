import Title from "./Title";
import reactImage from "../assets/techno/react.png";
import nodeImage from "../assets/techno/html.png";
import javascriptImage from "../assets/techno/js.png";
import tailwindImage from "../assets/techno/tailwind.png";
import javaImage from "../assets/techno/next-js.webp";
import springImage from "../assets/techno/node-js.png";
import mysqlImage from "../assets/techno/prisma.webp";
import cssImage from "../assets/techno/css.png";
import googleImage from "../assets/companies/google.png";
import metaImage from "../assets/companies/meta.webp";
import amazonImage from "../assets/companies/amazon.png";






const skills = [
    {
        id: 1,
        title: "React",

        image: cssImage
    },
    {
        id: 2,
        title: "Node.js",

        image: nodeImage
    },
    {
        id: 3,
        title: "Javascript",
        image: javascriptImage
    },

    {
        id: 4,
        title: "NextJs",

        image: reactImage
    },
    {
        id: 5,
        title: "Tailwind CSS",

        image: nodeImage
    },
    {
        id: 6,
        title: "Figma",
        image: tailwindImage
    },

    {
        id: 7,
        title: "Java",
        image: javaImage
    },
    {
        id: 8,
        title: "Spring Boot",
        image: springImage
    },
    {
        id: 9,
        title: "MySQL",
        image: mysqlImage
    }
];


const experiences = [
    {
        id: 1,
        title: "Sofwre Engneer , Meta",
        periode: "Decombre 2023 - Mars 2024",
        description: ["J'ai effectué un stage de 3 mois dans une entreprise de "
            , "développement web où j'ai travaillé sur des projets React et Node.js."],
        image: metaImage,
    },
    {
        id: 2,
        title: "Fullstack Developer , Google",
        periode: "Janvier 2023 - Mars 2023",
        description: ["J'ai créé un projet personnel en utilisant React et", "Tailwind CSS pour mettre en pratique mes compétences en FrontEnd."],
        image: googleImage,

    },

    {
        id: 3,
        title: "Frontend Developer , Amazon",
        periode: "Janvier 2023 - Mars 2023",
        description: ["J'ai créé un projet personnel en utilisant React et Tailwind CSS pour mettre en pratique mes compétences en FrontEnd."],
        image: amazonImage,

    }
];



function Expriences() {
    return (
        <div className=" flex flex-col items-center px-20 md:px-0 gap-10 justify-center py-10 ">
            <Title title="My Experiences" />
            <div className="flex gap-4 flex-col md:flex-row justify-center items-center w-full">
                <div className="flex flex-wrap gap-4 text-center p-4 justify-center items-center mt-4 md:w-1/3 md:mt-0 ">
                    {skills.map((skill) => (
                        <div key={skill.id} className="">
                            <div className=" w-24 h-24 p-2 md:mb-0 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.title} className="object-cover rounded-full h-full w-full" />
                            </div>
                            <span className="mt-2 text-sm  ">
                                <h2 className="text-xl font-bold mb-1">{skill.title}</h2>
                            </span>
                        </div>
                    ))
                    }

                </div>
                <div className="flex  flex-col space-y-4 md:ml-4 md:w-1/2 ">
                    {
                        experiences.map((experience) => (
                            <div key={experience.id} className="flex-col p-4 gap-4  items-center items-left bg-base-100 rounded-lg shadow-lg md:flex-row md:items-center hover:bg-gray-700 transition-colors duration-300">
                                <div className="flex items-center">
                                    <img src={experience.image} className="objetct-cover h-10 w-10 "
                                        alt={experience.title}
                                    />
                                    <div className="ml-4 " >
                                        <h1 className="text-xl font-bold text-accent"> {experience.title} </h1>
                                        <span className="text-sm ">
                                            {experience.periode}
                                        </span>

                                    </div>

                                </div>
                                <div><ul>
                                    {
                                        experience.description.map((description, index) => (
                                            <li key={index} className="text-white-200 px-15 mt-2">
                                                {description}
                                            </li>
                                        ))
                                    }
                                </ul></div>

                            </div>

                        ))
                    }
                </div>
            </div>
        </div>

    );
}

export default Expriences;
