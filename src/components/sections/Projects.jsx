import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, category, description, tags }) => (
    <div className="bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all group">
        <div className="h-48 bg-white/5 flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for project image */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
            <span className="text-white/20 font-bold text-lg relative z-10">{category} Preview</span>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-text-secondary text-sm mb-4 line-clamp-2">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-text-secondary border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                <a href="#" className="text-sm font-medium text-white flex items-center gap-1 hover:text-accent">
                    View Demo <ExternalLink className="w-3 h-3" />
                </a>
                <a href="#" className="text-sm font-medium text-text-secondary flex items-center gap-1 hover:text-white">
                    Code <Github className="w-3 h-3" />
                </a>
            </div>
        </div>
    </div>
);

const ProjectGroup = ({ title, projects }) => (
    <div className="mb-16 last:mb-0">
        <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-accent pl-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </div>
);

const Projects = () => {
    const robloxProjects = [
        {
            title: "City RP Ultimate",
            category: "Roblox",
            description: "A large-scale roleplay game with custom vehicle systems, housing, and economy. Over 500k plays.",
            tags: ["Lua", "Roblox Studio", "UI/UX"]
        },
        {
            title: "Dungeon Fighter",
            category: "Roblox",
            description: "Action RPG with complex combat mechanics, inventory system, and procedural dungeon generation.",
            tags: ["Luau", "Combat System", "Procedural Gen"]
        }
    ];

    const metin2Projects = [
        {
            title: "Astra2 Server",
            category: "Metin2",
            description: "Full server infrastructure setup with custom maps, mobs, and a balanced economy system.",
            tags: ["C++", "Python", "Lua", "FreeBSD"]
        },
        {
            title: "Anti-Cheat System",
            category: "Metin2",
            description: "Custom anti-cheat solution preventing memory injection and speed hacks for private servers.",
            tags: ["C++", "Reverse Engineering"]
        }
    ];

    const vibeProjects = [
        {
            title: "AI Asset Generator",
            category: "Vibe/AI",
            description: "Web tool that generates game assets using Stable Diffusion and OpenAI APIs, built in a weekend.",
            tags: ["React", "FastAPI", "OpenAI"]
        },
        {
            title: "Smart NPCs",
            category: "Vibe/AI",
            description: "Integration of LLM-powered dialogue for NPCs, allowing for unscripted, natural conversations.",
            tags: ["Next.js", "LangChain", "Vector DB"]
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Projects</h2>
                    <p className="text-text-secondary">A collection of worlds and tools I've built suitable for production.</p>
                </div>

                <ProjectGroup title="Roblox Projects" projects={robloxProjects} />
                <ProjectGroup title="Metin2 Projects" projects={metin2Projects} />
                <ProjectGroup title="Vibe Coding Projects" projects={vibeProjects} />
            </div>
        </section>
    );
};

export default Projects;
