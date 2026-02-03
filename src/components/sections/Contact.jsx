import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-surface/30">
            <div className="container-custom max-w-4xl">
                <div className="bg-gradient-to-br from-surface to-surface/50 border border-white/5 p-8 md:p-12 rounded-3xl text-center space-y-8">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Build?</h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        I'm currently open to freelance opportunities for Roblox games, server setups, or rapid AI prototyping.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                        <a href="mailto:contact@gracegameonai.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors">
                            <Mail className="w-5 h-5" />
                            Email Me
                        </a>
                        <div className="flex gap-4 justify-center">
                            {/* Placeholders for freelance platforms */}
                            <a href="#" className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium border border-white/10 transition-colors">
                                <Globe className="w-5 h-5" />
                                Fiverr
                            </a>
                            <a href="#" className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium border border-white/10 transition-colors">
                                <Globe className="w-5 h-5" />
                                Upwork
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
