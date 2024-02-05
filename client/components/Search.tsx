import React from 'react';

export default function Search() {
    return (
        <>
            <form className="relative inline-block h-16 overflow-clip flow-root bg-transparent text-shadow">
                <button type="submit" className="absolute inset-6 size-5 left-3">
                    <svg className="opacity-50 hover:opacity-70" xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill="#1C210C" viewBox='0 0 16 16'><path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'></path></svg>
                </button>
                <input type="search" placeholder="Search" className="rounded-lg box-border h-full w-5/6 px-4 pl-10 text-3xl md:text-4xl focus:outline-leaf" />
            </form >
        </>
    )
}

{/* <input type="search" placeholder="Search" className="rounded-lg box-border h-full px-4 pl-10 mr-8 text-3xl md:text-4xl focus:outline-leaf" /> */ }

{/* <form className="relative h-24 py-4 bg-transparent text-shadow"></form> */ }

// font-size: 3rem; /* 48px */
// line-height: 1;

// font-size: 2.25rem; /* 36px */
// line-height: 2.5rem; /* 40px */

// font-size: 1.5rem; /* 24px */
// line-height: 2rem; /* 32px */



{/* <input type="search" placeholder="Search" className="absolute top-0 rounded-lg my-4 p-2 pl-16 text-2xl md:text-4xl focus:outline-leaf" /> */ }
