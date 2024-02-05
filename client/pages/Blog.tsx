import React from 'react';
import Search from '../components/Search';

export default function Blog() {
    return (
        <main className="bg-homepage-pattern bg-bottom flex-1 flex-end text-white font-thin text-4xl md:text-5xl underline underline-offset-8 decoration-1 grid grid-flow-row">
            <div className="pb-5 my-2 content-evenly grid grid-flow-row ml-[20%]">
                <a className="mt-2" href="/contents">Contents</a>
                <a href="/latetest">Latest</a>
                <a className="mb-2" href="/random">Random</a>
                <Search />
            </div>
        </main>
    )
}