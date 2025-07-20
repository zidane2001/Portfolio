import { Mail } from "lucide-react";
import img from "../assets/image.jpg";

function Home() {
    return (
        <div className="flex flex-col-reverse items-center justify-center md:flex-row md:my-32 my-10">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br />
                    je suis Suis <span className="text-accent">ZizouDev</span>
                </h1>
                <p className=" my-4 text-md text-center md:text-left">Je suis un developpeur web fullstack <br /> avec une passion pour la programmation <br /> utisant les dernières technologies <br /> du monde du web. React , Nodejs , springboot , java, mysql etc.. </p>
                <a href="https://github.com/zidane2001 "
                    className="btn  btn-accent md:w-fit"><Mail className="w-6 h-6" /> Contactez moi</a>
            </div>

            <div className="md:ml-40 mt-8 md:mt-0">
                <img src={img} alt="MaPhoto" className="w-96 h-96 object-cover border-8 border-accent shadow-2xl " style={{ borderRadius: "44% 26% 38% 0% / 44% 40% 41% 44% " }}/>
            </div>
            
        </div>
    )
}

export default Home;