import React, { useState } from 'react';

const items = [
    {
        description: 'Malware analysis of anomolies',
        label: 'Malware',
        key: 'malware',
    },
    {
        description: 'Correlation of water quality to unrest',
        label: 'Water',
        key: 'water',
    },
    {
        description: 'Soccer stats',
        label: 'Moneyball',
        key: 'moneyball',
    },
    {
        description: 'Scrape job descriptions',
        label: 'Scraper',
        key: 'scraper',
    },
    {
        description: 'Advent of code and leetcode',
        label: 'Toys',
        key: 'toys',
    },
];

export default function Projects() {
    const [activeDescription, setActiveDescription]: [any, any] = useState('Click or hover over a list item to view description');

    return (
        <div className="h-full bg-turtle-pattern bg-bottom flex text-white font-thin text-4xl md:text-5xl no-underline">
            <ul className="p-8 my-4 content-evenly grid grid-flow-row w-fit">
                {items.map((val, i) => (
                    <li key={val.key} onClick={() => setActiveDescription(items[i].description)} onMouseOver={() => setActiveDescription(items[i].description)} className={activeDescription === val.description ? 'underline underline-offset-8' : ''}>{val.label}</li>
                ))}
            </ul>
            <div className="p-8 font-abel text-xl no-underline place-self-center overflow-scroll line-clamp-6">{[activeDescription]}</div>
        </div>
    )
}
