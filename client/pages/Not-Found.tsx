import React from 'react';
import Nav from '../components/Nav';

export default function NotFound() {
    return (
        <div id="dashboard-container" className="overflow-hidden flex flex-col h-screen  bg-gradient-to-r from-lsand to-depths">
            <header className="basis-20 lg:basis-32 text-3xl text-leaf bg-white content-center">
                <Nav />
            </header>
            <main className="flex-1 bg-turtle-pattern bg-cover bg-no-repeat bg-left-bottom bg-gradient-to-r from-lsand to-depths">
                <ul className="h-full justify-items-center text-white font-thin text-4xl md:text-6xl underline underline-offset-8 decoration-1 grid grid-flow-row content-evenly">
                    <a className="block" href="/">Not Found</a>
                </ul>
            </main>
            <footer className="shrink basis-20 lg:basis-32 bg-gradient-to-br from-leaf to-shadow"></footer>
        </div >
    )
}
