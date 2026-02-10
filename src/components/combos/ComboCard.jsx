import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const ComboCard = ({ combo }) => {
    const colorMap = {
        purple: {
            bg: 'bg-cyber-purple/10',
            border: 'border-cyber-purple',
            text: 'text-cyber-purple',
            shadow: 'shadow-neon-purple',
            glow: 'hover:shadow-neon-purple',
        },
        cyan: {
            bg: 'bg-cyber-cyan/10',
            border: 'border-cyber-cyan',
            text: 'text-cyber-cyan',
            shadow: 'shadow-neon-cyan',
            glow: 'hover:shadow-neon-cyan',
        },
    };

    const colors = colorMap[combo.color];

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="h-full"
        >
            <Card
                className={`h-full flex flex-col relative overflow-hidden border-2 ${colors.border} ${colors.bg}`}
                glassEffect={false}
            >
                {/* Animated Glow */}
                <motion.div
                    className={`absolute inset-0 ${colors.shadow} opacity-0`}
                    animate={{
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                        <span className={`text-xs font-bold uppercase tracking-widest ${colors.text} opacity-60`}>
                            {combo.subtitle}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight mt-2 ${colors.text}`}>
                            {combo.title}
                        </h3>
                    </div>

                    {/* Workshops Included */}
                    <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                            INCLUDES:
                        </h4>
                        <ul className="space-y-2">
                            {combo.workshops.map((workshop, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-2 text-sm"
                                >
                                    <span className={colors.text}>✓</span>
                                    <span className="text-white/80">{workshop.name}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                            BENEFITS:
                        </h4>
                        <ul className="space-y-1">
                            {combo.benefits.map((benefit, index) => (
                                <li key={index} className="text-xs text-white/60">
                                    • {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ideal For */}
                    <p className="text-xs text-white/50 italic mb-6">
                        {combo.ideal}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6">
                        <div className="flex items-baseline gap-3 mb-2">
                            <span className={`text-3xl sm:text-4xl font-black ${colors.text}`}>
                                ₹{combo.price}
                            </span>
                            <span className="text-lg text-white/40 line-through">
                                ₹{combo.originalPrice}
                            </span>
                        </div>
                        <span className="text-xs text-cyber-green uppercase">
                            SAVE ₹{combo.savings} // LIMITED TIME OFFER
                        </span>
                    </div>

                    {/* CTA */}
                    <Button
                        variant={combo.color === 'purple' ? 'purple' : 'primary'}
                        className="w-full"
                    >
                        EXPLORE COMBO →
                    </Button>
                </div>
            </Card>
        </motion.div>
    );
};
