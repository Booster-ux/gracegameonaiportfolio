import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center md:text-left flex flex-col md:flex-row gap-12 items-center">

                    {/* Simple avatar placeholder */}
                    <div className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-accent to-purple-700 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-accent/20">
                        GG
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">About Me</h2>
                        <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                            <p>
                                I'm Grace, a developer who believes in shipping fast and having fun while doing it.
                                Whether it's orchestrating complex server environments for Metin2, scripting engaging mechanics in Roblox,
                                or leveraging the latest AI tools to build apps in hours instead of weeks—I deliver results.
                            </p>
                            <p>
                                My approach is practical and product-first. I don't just write code; I build capabilities.
                                Focusing on MVP delivery allows me to iterate quickly and bring ideas to life with speed and precision.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
