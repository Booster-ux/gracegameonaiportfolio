import React from 'react';
import { Gamepad2, Server, Bot, ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-surface border border-white/5 p-8 rounded-2xl hover:border-accent/50 transition-colors group">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-text-secondary leading-relaxed decoration-zinc-100/20">{description}</p>
    </div>
);

const Services = () => {
    return (
        <section id="services" className="section-padding bg-background/50 relative">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
                    <p className="text-text-secondary">Specialized technical services for gaming and AI rapid prototyping.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={Gamepad2}
                        title="Roblox Full Game Development"
                        description="End-to-end game creation on Roblox Studio. From scriping mechanisms in LuaGL to level design and UI systems."
                    />
                    <ServiceCard
                        icon={Server}
                        title="Metin2 Server Setup"
                        description="Complete private server infrastructure. Source building, file customization, anti-cheat integration, and gameplay balancing."
                    />
                    <ServiceCard
                        icon={Bot}
                        title="Vibe Coding / AI Apps"
                        description="Rapid AI application development using modern LLM tools. Building smart wrappers, chatbots, and generators in record time."
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
