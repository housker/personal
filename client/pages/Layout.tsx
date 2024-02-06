"use strict";

import * as React from "react";
import {
    Outlet
} from "react-router-dom";
import Nav from '../components/Nav';

export default function Layout() {
    return (
        <div id="dashboard-container" className="overflow-hidden flex flex-col h-screen bg-gradient-to-r from-lsand to-depths">
            <header className="min-h-20 basis-20 lg:min-h-32 lg:basis-32 text-3xl text-leaf bg-white content-center">
                <Nav />
            </header>
            <main className="flex-1 flex-end text-white font-thin text-4xl md:text-5xl content-evenly overflow-hidden flex flex-col">
                <Outlet />
            </main>
            <footer className="shrink-none min-h-12 basis-12 lg:min-h-32 lg:basis-32 lg:h-32 bg-gradient-to-br from-leaf to-shadow"></footer>
        </div >
    )
}
