import Title from "./Title";
import img from "../assets/image.jpg"
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

// about sections

const aboutSections = [{
    id: 1,
    title: "Develloppeur FrontEnd", 
    description: "Je suis un develloppeur FrontEnd avec une passion pour la création d'interfaces utilisateur intuitives et attrayantes. J'utilise des technologies modernes telles que React, Vue.js et Angular pour construire des applications web dynamiques.",
    icon: <LetterText className=" text-accent scale-150" />
},
    {
        id: 2,
        title: "Develloppeur BackEnd",
        description: "En tant que develloppeur BackEnd, je me concentre sur la logique serveur, les bases de données et l'architecture des applications. J'utilise des langages tels que Node.js, Python et Java pour construire des API robustes et scalables.",
        icon: <CalendarSync className=" text-accent scale-150" />
    }, {
    id: 3,
    title: "Develloppeur FullStack",
    description: "En tant que develloppeur FullStack, je combine mes compétences en FrontEnd et BackEnd pour créer des applications web complètes  et fonctionnelles. Je suis capable de travailler sur toutes les couches d'une application, de la base de données à l'interface utilisateur.",    
    icon: <Paintbrush className="text-accent scale-150" />
}]

function About() {
    return (
        // centrer about sur le vertical et horizontal

        <div className=" flex flex-col items-center justify-center p-10 md:mb-32 bg-base-300" >

            <Title title="About Me" />
            <div className="flex justify-center align-center text-md text-center md:h-screen ">
                <div className="flex hidden md:flex md:w-full flex-col  mx-4 rounded-lg md:pl-[10%] shadow-lg">
                    <img src={img} alt="Maphoto" className="flex w-150 max-w-full h-96 object-cover rounded-xl" />
                </div>
                <div className="flex md:ml-4 flex-col  space-y-4">
                    {
                        aboutSections.map((section) => (
                            <div key={section.id} className="flex flex-col p-4  gap-4 md:w-full items-center items-left bg-base-100 ">
                                <div className="mb-2 md:mb-0">
                                    {section.icon}
                                    
                                </div>
                               
                                <div className="md:ml-4 text-center md:text-left">
                                    <h2 className="text-xl font-bold mb-1 ">{section.title}</h2>
                                    <p className="text-gray-600 mt-2">{section.description}</p> 
                                </div>
                            </div>
                        ))
                }
                </div>
            </div>
        </div>
    );
}
export default About;
