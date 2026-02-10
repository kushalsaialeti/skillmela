import { motion } from 'framer-motion';
import { BrainCircuit, Code2, GitBranch, LayoutGrid, Palette } from 'lucide-react';

const paths = [
    {
        title: 'DOMAINS',
        hook: 'Build the base every engineer needs.',
        description: 'Web, AI/ML, Data, Cloud & DevOps, IoT. Solid foundations that unlock every path.',
        gains: ['Core stacks', 'Real projects', 'Tech confidence'],
        audience: 'Ideal for: 1st year students',
        oldPrice: '199',
        newPrice: '99',
        icon: LayoutGrid,
        accent: 'from-cyber-cyan/40 via-cyber-teal/30 to-transparent'
    },
    {
        title: 'AI TOOLS',
        hook: 'Move faster with smarter workflows.',
        description: 'Learn the best productivity and development accelerators used by modern teams.',
        gains: ['Automation', 'Prompt craft', 'Workflow speed'],
        audience: 'Ideal for: 1st year students',
        oldPrice: '199',
        newPrice: '99',
        icon: BrainCircuit,
        accent: 'from-cyber-purple/40 via-cyber-cyan/30 to-transparent'
    },
    {
        title: 'PHOTOSHOP',
        hook: 'Designs that get attention fast.',
        description: 'Create thumbnails, posters, and social creatives with pro-level polish.',
        gains: ['Thumbnail systems', 'Poster design', 'Creative speed'],
        audience: 'Ideal for: All years',
        oldPrice: '199',
        newPrice: '99',
        icon: Palette,
        accent: 'from-cyber-purple/40 via-cyber-teal/20 to-transparent'
    },
    {
        title: 'DSA',
        hook: 'The foundation of placements.',
        description: 'Learn how companies test problem solving and how toppers approach coding rounds.',
        gains: ['Interview patterns', 'Logic building', 'Prep roadmap'],
        audience: 'Ideal for: 2nd - 3rd year students',
        oldPrice: '199',
        newPrice: '99',
        icon: Code2,
        accent: 'from-cyber-green/40 via-cyber-cyan/30 to-transparent'
    },
    {
        title: 'GITHUB',
        hook: 'Ship projects the modern way.',
        description: 'Collaborate, review, and deploy with clean version control practices.',
        gains: ['Branching', 'PR reviews', 'Portfolio polish'],
        audience: 'Ideal for: All year students',
        oldPrice: '99',
        newPrice: '0',
        icon: GitBranch,
        accent: 'from-white/20 via-cyber-cyan/20 to-transparent'
    }
];

export const UpgradePaths = () => {
    return (
        <div id="upgrade-paths" className="bg-cyber-panel/10 pt-6 sm:pt-8 md:pt-12 px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-20">
            <div className="max-w-7xl mx-auto">
            <motion.div
                className="text-center mb-10 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-2">
                    <span className="text-white italic">UPGRADE</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                        YOUR PATH
                    </span>
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 font-mono">
                    From fundamentals to future tech - pick the skills that move your career forward.</p>

            </motion.div>

            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paths.map((path, index) => {
                    const Icon = path.icon;
                    return (
                        <motion.div
                            key={path.title}
                            className="group relative rounded-3xl border border-white/10 bg-cyber-panel/40 p-5 sm:p-6 backdrop-blur-md shadow-[0_0_25px_rgba(21,233,246,0.08)] transition-transform duration-300 hover:-translate-y-2"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                        >
                            <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-cyber-cyan/40 via-transparent to-cyber-purple/30 opacity-40" />
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${path.accent} opacity-30`} />
                            <div className="relative">
                                <div className="flex items-start justify-between mb-4 sm:mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-xl border border-cyber-cyan/30 bg-cyber-dark/60 p-3 shadow-[0_0_12px_rgba(21,233,246,0.25)]">
                                            <Icon className="h-5 w-5 text-cyber-cyan" />
                                        </div>
                                        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                                            UPGRADE
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-white/40 line-through">
                                            ₹{path.oldPrice}
                                        </div>
                                        <div className="text-xl sm:text-2xl font-black text-cyber-cyan drop-shadow-[0_0_10px_rgba(21,233,246,0.65)]">
                                            ₹{path.newPrice}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-2">
                                    {path.title}
                                </h3>
                                <p className="text-sm text-cyber-cyan font-semibold mb-3">
                                    {path.hook}
                                </p>
                                <p className="text-sm text-white/70 leading-relaxed mb-5">
                                    {path.description}
                                </p>

                                <div className="mb-5">
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                                        What You Gain
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {path.gains.map((gain) => (
                                            <span
                                                key={gain}
                                                className="text-[10px] sm:text-[11px] border border-cyber-cyan/30 px-2 py-1 text-cyber-cyan"
                                            >
                                                {gain}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-xs text-white/60 mb-5">
                                    {path.audience}
                                </p>

                                <button className="w-full rounded-xl border border-cyber-cyan/40 bg-cyber-dark/70 py-3 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-cyber-cyan shadow-[0_0_18px_rgba(21,233,246,0.25)] transition-all duration-300 hover:bg-cyber-cyan hover:text-cyber-dark hover:shadow-[0_0_26px_rgba(21,233,246,0.6)]">
                                    Select Workshop
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            </div>
        </div>
    );
};
