import React from 'react';
import Facebook from './socials/Facebook';
import Twitter from './socials/Twitter';
import Github from './socials/Github';
import Linkedin from './socials/Linkedin';
import { NavLink } from "react-router-dom";

const navLinks = [
    {
        href: '/about',
        label: 'About',
    },
    {
        href: '/projects',
        label: 'Projects',
    },
    // {
    //     href: '/docs',
    //     label: 'Docs',
    // },
    // {
    //     href: '/blog',
    //     label: 'Blog',
    // },
]

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
                {navLinks.map((link) => (
                    <NavLink
                        to={link.href}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "overline" : ""
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
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
