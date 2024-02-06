import React from 'react';
import Search from '../components/Search';

export default function Blog() {
    return (
        <div className="bg-lotus-pattern bg-bottom h-full flex">
            <ul className="py-5 content-evenly grid grid-flow-row ml-[20%] first:mt-2 last:mb-2">
                <li>Contents</li>
                <li>Latest</li>
                <li>Random</li>
                <Search />
            </ul>
        </div>
    )
}
