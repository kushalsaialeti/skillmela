import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { WorkshopVisuals } from './WorkshopVisuals';

export const FeaturedWorkshop = ({ workshop }) => {
    const navigate = useNavigate();

    return (
        <Card className="relative overflow-hidden" neonBorder>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Visual */}
                <div className="relative h-[400px] md:h-[500px] bg-cyber-dark/50 flex items-center justify-center overflow-hidden">
                    <WorkshopVisuals type={workshop.animationType} />

                    {/* System Status Overlay */}
                    <div className="absolute top-4 left-4 text-xs font-mono">
                        <div className="text-cyber-cyan mb-1">SYSTEM STATUS: OPERATIONAL</div>
                        <div className="text-white/40">BATCH: OPEN</div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                        <span className="bg-cyber-cyan text-cyber-dark text-xs font-bold px-3 py-1">
                            {workshop.badge}
                        </span>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center">
                    <div className="mb-6">
                        <span className="text-cyber-cyan text-sm font-bold uppercase tracking-widest">
                            ★ FEATURED WORKSHOP
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-2 mb-3">
                            {workshop.title}
                        </h2>
                        <p className="text-lg text-cyber-cyan uppercase tracking-wide mb-4">
                            {workshop.subtitle}
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            {workshop.fullDescription}
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                            CORE MODULES:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {workshop.highlights.map((highlight, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-xs border border-cyber-cyan/50 text-cyber-cyan px-3 py-1 hover:bg-cyber-cyan/10 transition-colors"
                                >
                                    {highlight}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Meta Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                        <div>
                            <span className="text-white/40 uppercase block mb-1 text-xs">Level</span>
                            <span className="text-white font-bold">{workshop.level}</span>
                        </div>
                        <div>
                            <span className="text-white/40 uppercase block mb-1 text-xs">Duration</span>
                            <span className="text-white font-bold">{workshop.duration}</span>
                        </div>
                        <div>
                            <span className="text-white/40 uppercase block mb-1 text-xs">Format</span>
                            <span className="text-white font-bold">{workshop.format}</span>
                        </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div>
                            <div className="flex items-baseline gap-3">
                                <span className="text-5xl font-black text-cyber-cyan">
                                    ₹{workshop.price}
                                </span>
                                <span className="text-lg text-white/40 line-through">
                                    ₹{workshop.originalPrice}
                                </span>
                            </div>
                            <span className="text-xs text-cyber-green uppercase mt-1 block">
                                ● {workshop.certificate}
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                variant="secondary"
                                onClick={() => navigate(`/workshop/${workshop.id}`)}
                            >
                                VIEW DETAILS
                            </Button>
                            <Button variant="primary">
                                REGISTER NOW
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};
