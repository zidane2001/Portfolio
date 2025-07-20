import { Container, Menu } from "lucide-react";
import React from "react";

function Navbar() {
    return (
        <div className="flex justify-center md:justify-between items-center p-4 ">
            <a href="/"
                className="flex items-center font-bold text-3xl md:text-xl">
                <Container className="mr-2"/>
                ZIZOU<span className="text-accent">DEV</span>
            </a>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="/"
                        className="btn btn-sm btn-ghost"
                    >Home</a>
                </li>
                <li>
                    <a href="/about"
                        className="btn btn-sm btn-ghost"
                    >About</a>
                </li>
                <li>
                    <a href="/experience" className="btn btn-sm btn-ghost">My Expriences </a>
                </li>
                <li>
                    <a href="/projects"
                        className="btn btn-sm btn-ghost"
                    >Projects</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;