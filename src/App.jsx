import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {

    // Basic SEO title update (optional, as it's already in index.html, but good practice for SPA)
    useEffect(() => {
        document.title = "Grace Gameonai | Game & AI App Developer";
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Services />
                <Projects />
                <TechStack />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
