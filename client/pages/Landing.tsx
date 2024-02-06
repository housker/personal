import React from 'react';

export default function Landing() {
    return (
        <ul className="bg-hero-pattern bg-cover bg-no-repeat bg-right-top h-full justify-items-center text-4xl md:text-6xl underline underline-offset-8 decoration-1 grid grid-flow-row content-evenly">
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/docs">Docs</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
        </ul>
    )
}