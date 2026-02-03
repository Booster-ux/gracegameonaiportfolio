import React from 'react';
import { ArrowRight, Code2, Gamepad2, Server } from 'lucide-react';

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-accent font-medium tracking-wide text-sm uppercase">Portfolio</h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Grace Gameonai</span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-medium text-text-secondary">
                            Game & AI App Developer
                        </p>
                    </div>

                    <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                        I build full Roblox games, Metin2 servers and fast AI-powered apps using modern vibe-coding tools.
                    </p>

                    <div className="flex items-center justify-center gap-4 pt-4">
                        <button
                            onClick={scrollToProjects}
                            className="group px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-all flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium border border-white/10 transition-colors"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
