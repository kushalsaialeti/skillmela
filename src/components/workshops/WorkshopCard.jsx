import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { WorkshopVisuals } from './WorkshopVisuals';

export const WorkshopCard = ({ workshop }) => {
    const navigate = useNavigate();

    const colorMap = {
        cyan: 'border-cyber-cyan text-cyber-cyan shadow-neon-cyan',
        teal: 'border-cyber-teal text-cyber-teal shadow-neon-teal',
        purple: 'border-cyber-purple text-cyber-purple shadow-neon-purple',
        green: 'border-cyber-green text-cyber-green shadow-neon-green',
    };

    const badgeColorMap = {
        cyan: 'bg-cyber-cyan text-cyber-dark',
        teal: 'bg-cyber-teal text-cyber-dark',
        purple: 'bg-cyber-purple text-white',
        green: 'bg-cyber-green text-cyber-dark',
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="h-full"
        >
            <Card className="h-full flex flex-col relative overflow-hidden group">
                {/* Background Visual */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <WorkshopVisuals type={workshop.animationType} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-xs font-bold px-2 py-1 ${badgeColorMap[workshop.color]}`}>
                                    {workshop.badge}
                                </span>
                                <span className="text-xs text-white/40 uppercase tracking-wider">
                                    {workshop.level}
                                </span>
                            </div>
                            <h3 className={`text-2xl font-black uppercase tracking-tight mb-1 ${colorMap[workshop.color]}`}>
                                {workshop.title}
                            </h3>
                            <p className="text-sm text-white/60 uppercase tracking-wide">
                                {workshop.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/70 leading-relaxed mb-6 flex-grow">
                        {workshop.description}
                    </p>

                    {/* Meta Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                        <div>
                            <span className="text-white/40 uppercase block mb-1">Duration</span>
                            <span className="text-white font-bold">{workshop.duration}</span>
                        </div>
                        <div>
                            <span className="text-white/40 uppercase block mb-1">Format</span>
                            <span className="text-white font-bold">{workshop.format}</span>
                        </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-end justify-between pt-4 border-t border-white/10">
                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className={`text-3xl font-black ${colorMap[workshop.color]}`}>
                                    ₹{workshop.price}
                                </span>
                                <span className="text-sm text-white/40 line-through">
                                    ₹{workshop.originalPrice}
                                </span>
                            </div>
                            <span className="text-xs text-cyber-green uppercase">
                                ● LIMITED SEATS AVAILABLE
                            </span>
                        </div>
                        <Button
                            variant="ghost"
                            className="text-xs"
                            onClick={() => navigate(`/workshop/${workshop.id}`)}
                        >
                            VIEW DETAILS →
                        </Button>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};
