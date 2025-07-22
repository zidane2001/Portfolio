import { Container, Facebook, Twitter, Youtube } from "lucide-react";

function Footer() {
    return (
      
            <footer className=" w-full footer footer-horizontal footer-center b p-10">
                <aside>
                  <div className="flex flex-col items-center">
<Container className="w-10 h-10"/>
                    <p className="font-bold">
                        ZIZOU<span className="text-accent">DEV</span>
                      
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </div>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a className=" cursor-pointer">
                            <Twitter className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7 transition-all duration-300" />
                        </a>
                        <a className=" cursor-pointer">
                           <Youtube className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7 transition-all duration-300" />
                        </a>
                        <a className=" ">
                            <Facebook className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7 transition-all duration-300" />
                        </a>
                    </div>
                </nav>
            </footer>

    );
}
export default Footer;