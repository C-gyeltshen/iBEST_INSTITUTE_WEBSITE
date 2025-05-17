"use client";
import React, { useState } from "react";
import Sonam from "../../images/team/director.webp";
import Rinchen from "../../images/team/CEO.webp";
import Tharchen from "../../images/team/founder.webp";
import Yeethob from "../../images/team/yeethob.webp";
import Yeshey from "../../images/team/yeshey.webp";
import Cheku from "../../images/team/cheku.webp";
import Tenzin from "../../images/team/tenzin.webp";
import Kinley from "../../images/team/kinley.webp";

const teamMembers = [
    { name: "Sonam Tobgay", title: "Director", img: Sonam },
    { name: "Sonam Rinchen", title: "CEO", img: Rinchen },
    { name: "Tharchen", title: "CEO & Founder", img: Tharchen },
    { name: "Tenzin", title: "Operations Director", img: Tenzin },
    { name: "Cheku", title: "Chief of Technology", img: Cheku },
    { name: "Kinley", title: "Operations Manager", img: Kinley },
    { name: "Yeethob", title: "Technical Head", img: Yeethob },
    { name: "Yeshey", title: "Marketing Officer", img: Yeshey },
];

const Team = () => {
    const [isPaused, setIsPaused] = useState(false);

    const handleMouseEnter = () => {
        setIsPaused(true); // Pause the animation
    };

    const handleMouseLeave = () => {
        setIsPaused(false); // Resume the animation
    };

    return (
        <div className="overflow-hidden mx-auto relative">
            <div className="font-bold md:text-2xl lg:pt-2 text-center mt-12 text-lg mb-6"> 
                Our Team
            </div>
            <div className="bg-white w-screen py-4 px-4 overflow-hidden">
                <div 
                    className={`w-full relative flex items-center animate-scroll ${isPaused ? 'paused-animation' : ''}`} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="flex space-x-8">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index} 
                                className="relative w-40 min-h-48 transform transition-transform duration-300 hover:scale-110 hover:z-10"
                            >
                                <img 
                                    src={member.img.src} 
                                    alt={member.name} 
                                    className="w-full h-auto rounded-lg"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-end text-white">
                                    <h1 className="text-lg font-semibold">{member.name}</h1>
                                    <h2 className="text-sm">{member.title}</h2>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate items to make the slider loop */}
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index + teamMembers.length} 
                                className="relative w-40 min-h-48 transform transition-transform duration-300 hover:scale-110 hover:z-10"
                            >
                                <img 
                                    src={member.img.src} 
                                    alt={member.name} 
                                    className="w-full h-auto rounded-lg"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-end text-white">
                                    <h1 className="text-lg font-semibold">{member.name}</h1>
                                    <h2 className="text-sm">{member.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
