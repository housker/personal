import React from 'react';

const BIOGRAPHY = "Struggling with student debt, and living in an apartment with unreliable internet, I ended up learning to code on MIT's wifi after winning a scholarship to Hack Reactor and being granted a Golden Ticket to the Recurse Center, which ultimately helped me land jobs at prestigious tech companies. Having been raised on a farm, I was used to the kind of hard work that came from taming harsh physical forces, and was surprised to encounter a kind of self-inflicted hardship stemming from the man-made systems we ourselves had created. As I study Artificial Intelligence through Columbia University, that is forefront in my mind."

export default function About() {
    return (
        <div className="bg-stars-pattern bg-bottom text-white font-thin text-2xl overflow-hidden flex flex-col sm:flex-row sm:height-full">
            <img src={require('../assets/profile.png')} className="max-h-full w-auto h-auto" alt="Profile" />
            <div className="flex-1 max-h-full h-auto overflow-y-auto place-self-center p-8">
                <p>{BIOGRAPHY}</p>
            </div>
        </div>
    )
}
