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

    useEffect(() => {
        document.title = "Grace Gameonai | Game & AI App Developer";
        console.log("Portfolio app loaded successfully");
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
