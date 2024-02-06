import React from 'react';
import Facebook from './socials/Facebook';
import Twitter from './socials/Twitter';
import Github from './socials/Github';
import Linkedin from './socials/Linkedin';
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex justify-between items-center flex-wrap p-4 h-full">
            <section className="font-abel">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "overline" : ""
                    }
                >
                    Adelle Housker
                </NavLink>
            </section>
            <section className="items-center font-source text-sm md:text-xl gap-5 justify-between sm:grow-0 flex">
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "overline" : ""
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "overline" : ""
                    }
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/docs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "overline" : ""
                    }
                >
                    Docs
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "overline" : ""
                    }
                >
                    Blog
                </NavLink>

                <div className="gap-5 flex absolute h-fit top-6 right-4 sm:static">
                    <Github />
                    <Linkedin />
                    <Facebook />
                    <Twitter />
                </div>
            </section>
        </nav>
    )
}
