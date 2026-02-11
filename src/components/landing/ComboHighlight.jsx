import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const combos = [
    {
        id: '1st-year',
        title: '1ST YEAR ESSENTIALS',
        subtitle: '1st Year Combo',
        price: 199,
        originalPrice: 276,
        savings: 77,
        color: 'purple',
        workshops: [
            {
                id: 'domains',
                name: 'Domains Workshop',
                included: true
            },
            {
                id: 'ai-tools',
                name: 'AI Tools Mastery',
                included: true
            },
            {
                id: 'photoshop',
                name: 'Photoshop Pro',
                included: true
            },
            {
                id: 'culturals',
                name: 'Culturals Access',
                included: true
            }
        ],
        benefits: [
            'Foundation for tech career',
            'AI-powered productivity',
            'Creative design skills',
            'Cultural event access'
        ],
        ideal: 'Perfect for 1st year students starting their tech journey'
    },
    {
        id: 'pro-track',
        title: 'PRO TRACK',
        subtitle: 'Advanced Developer Path',
        price: 199,
        originalPrice: 276,
        savings: 77,
        color: 'cyan',
        workshops: [
            {
                id: 'dsa',
                name: 'DSA Mastery',
                included: true
            },
            {
                id: 'github',
                name: 'GitHub & Version Control',
                included: true
            },
            {
                id: 'photoshop',
                name: 'Photoshop Pro',
                included: true
            },
            {
                id: 'culturals',
                name: 'Culturals Access',
                included: true
            }
        ],
        benefits: [
            'Interview preparation',
            'Professional collaboration',
            'Portfolio building',
            'Cultural networking'
        ],
        ideal: 'Designed for 2nd & 3rd year students preparing for placements'
    }
];



export const ComboHighlight = () => {
    const colorMap = {
        purple: {
            accent: 'text-cyber-purple',
            border: 'border-cyber-purple/60',
            glow: 'shadow-[0_0_24px_rgba(182,8,244,0.25)]',
            pill: 'bg-cyber-purple/10 text-cyber-purple'
        },
        cyan: {
            accent: 'text-cyber-cyan',
            border: 'border-cyber-cyan/60',
            glow: 'shadow-[0_0_24px_rgba(21,233,246,0.25)]',
            pill: 'bg-cyber-cyan/10 text-cyber-cyan'
        }
    };

    return (
        <div id="combo-highlight" className="px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-2">
                        <span className="text-white italic">SMART STUDENTS</span>
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                            CHOOSE COMBOS
                        </span>
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 font-mono">
                        More learning. Better value. Bigger impact.
                    </p>
                </div>

                <div className="grid gap-5 sm:gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {combos.map((combo, index) => {
                    const colors = colorMap[combo.color];
                    return (
                        <motion.div
                            key={combo.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative rounded-3xl border ${colors.border} bg-cyber-panel/40 p-5 sm:p-6 backdrop-blur-md ${colors.glow} transition-transform duration-300 hover:-translate-y-2`}
                        >
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/10" />
                            <div className="relative">
                                <div className="flex items-center justify-between mb-5">
                                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${colors.pill}`}>
                                        {combo.subtitle}
                                    </span>
                                    <span className="text-xs text-white/40 uppercase tracking-[0.3em]">
                                        Combo
                                    </span>
                                </div>

                                <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight mb-2 ${colors.accent}`}>
                                    {combo.title}
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed mb-5">
                                    {combo.ideal}
                                </p>

                                <div className="mb-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                                        Includes
                                    </p>
                                    <ul className="space-y-2">
                                        {combo.workshops.map((workshop) => (
                                            <li key={workshop.id} className="flex items-center gap-2 text-sm">
                                                <span className={colors.accent}>✓</span>
                                                <span className="text-white/80">{workshop.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                                        Benefits
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {combo.benefits.map((benefit) => (
                                            <span
                                                key={benefit}
                                                className="text-[11px] border border-white/10 px-2 py-1 text-white/60"
                                            >
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-lg text-white/40 line-through">
                                            ₹{combo.originalPrice}
                                        </span>
                                        <span className={`text-3xl sm:text-4xl font-black ${colors.accent}`}>
                                            ₹{combo.price}
                                        </span>
                                    </div>
                                    <span className="text-xs text-cyber-green uppercase">
                                        Save ₹{combo.savings}
                                    </span>
                                </div>

                                <Button
                                    variant={combo.color === 'purple' ? 'purple' : 'primary'}
                                    className="w-full"
                                >
                                    Claim Package
                                </Button>
                            </div>
                        </motion.div>
                    );
                })}
                </div>
            </div>
        </div>
    );
};
