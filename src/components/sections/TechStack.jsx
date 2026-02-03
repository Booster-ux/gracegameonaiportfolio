import React from 'react';

const TechGroup = ({ title, skills }) => (
    <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white/50 uppercase tracking-wider text-sm">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="px-4 py-3 bg-surface border border-white/5 rounded-lg text-text-primary text-sm font-medium hover:border-accent/40 cursor-default transition-colors"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const TechStack = () => {
    return (
        <section id="tech-stack" className="section-padding bg-surface/30 border-y border-white/5">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Tech Stack</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-12">
                            <TechGroup
                                title="Frontend Development"
                                skills={["React", "Tailwind CSS", "JavaScript (ES6+)", "Vite", "HTML5/CSS3"]}
                            />
                            <TechGroup
                                title="Vibe / AI Tools"
                                skills={["Antigravity", "Replit", "Base44", "Emergent.sh", "Supabase", "Cursor", "Claude API"]}
                            />
                        </div>

                        <div className="space-y-12">
                            <TechGroup
                                title="Game Development"
                                skills={["Roblox Studio", "Luau", "Metin2 Tools", "Python", "Quest System Design"]}
                            />
                            <TechGroup
                                title="Backend & Infrastructure"
                                skills={["Node.js", "FreeBSD", "MySQL", "Server Management"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
