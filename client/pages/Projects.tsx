import React, { useState } from 'react';

const items = [
    // {
    //     description: 'Malware analysis of anomolies',
    //     href: '',
    //     label: 'Malware',
    //     key: 'malware',
    // },
    // {
    //     description: 'Correlation of water quality to unrest',
    //     href: '',
    //     label: 'Water',
    //     key: 'water',
    // },
    {
        description: 'Soccer stats',
        href: 'https://github.com/lnyousif/Football101/tree/main/Adelle',
        label: 'Moneyball',
        key: 'moneyball',
    },
    {
        description: 'Scrape descriptions and apply to jobs',
        href: 'https://github.com/housker/jobs',
        label: 'Scraper',
        key: 'scraper',
    },
    {
        description: 'Advent of code and leetcode',
        href: 'https://github.com/housker/adventofcode',
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
                    <li
                        key={val.key}
                        onClick={() => setActiveDescription(items[i].description)}
                        onMouseOver={() => setActiveDescription(items[i].description)}
                        className={activeDescription === val.description ? 'underline underline-offset-8' : ''}>
                        <a href={val.href} target="_blank">
                            {val.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="p-8 font-abel text-xl no-underline place-self-center overflow-scroll line-clamp-6">{[activeDescription]}</div>
        </div>
    )
}
