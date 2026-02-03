import React from 'react';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = ['Hero', 'Services', 'Projects', 'Tech Stack', 'About', 'Contact'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="container-custom h-16 flex items-center justify-between">
                <div className="text-xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('hero')}>
                    Grace.G
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                            className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="hidden md:block px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-full transition-colors border border-white/10"
                >
                    Hire Me
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
