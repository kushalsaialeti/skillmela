import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { WorkshopVisuals } from '../components/workshops/WorkshopVisuals';
import { getWorkshopById } from '../data/workshops';
import { useState } from 'react';

export const WorkshopDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const workshop = getWorkshopById(id);
    const [addedToCombo, setAddedToCombo] = useState(false);

    if (!workshop) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-cyber-cyan mb-4">404</h1>
                    <p className="text-white/60 mb-6">Workshop not found</p>
                    <Button onClick={() => navigate('/events')}>
                        BACK TO WORKSHOPS
                    </Button>
                </div>
            </div>
        );
    }

    const colorMap = {
        cyan: 'border-cyber-cyan text-cyber-cyan shadow-neon-cyan',
        teal: 'border-cyber-teal text-cyber-teal shadow-neon-teal',
        purple: 'border-cyber-purple text-cyber-purple shadow-neon-purple',
        green: 'border-cyber-green text-cyber-green shadow-neon-green',
    };

    return (
        <div className="pt-20">
            {/* Breadcrumb */}
            <Section className="py-8 border-b border-cyber-cyan/20">
                <div className="flex items-center gap-2 text-sm text-white/60 uppercase">
                    <button onClick={() => navigate('/')} className="hover:text-cyber-cyan transition-colors">
                        HOME
                    </button>
                    <span>/</span>
                    <button onClick={() => navigate('/events')} className="hover:text-cyber-cyan transition-colors">
                        WORKSHOPS
                    </button>
                    <span>/</span>
                    <span className="text-cyber-cyan">{workshop.id}</span>
                </div>
            </Section>

            {/* Main Content */}
            <Section>
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`text-xs font-bold px-3 py-1 ${workshop.color === 'purple' ? 'bg-cyber-purple text-white' : `bg-cyber-${workshop.color} text-cyber-dark`}`}>
                                    {workshop.badge}
                                </span>
                                <span className="text-xs text-white/40 uppercase tracking-wider">
                                    BATCH: OPEN // SEATS AVAILABLE
                                </span>
                            </div>

                            <h1 className={`text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 ${colorMap[workshop.color]}`}>
                                {workshop.title}
                            </h1>

                            <p className="text-xl text-white/80 uppercase tracking-wide mb-6">
                                {workshop.subtitle}
                            </p>

                            <p className="text-white/70 leading-relaxed text-lg">
                                {workshop.fullDescription}
                            </p>
                        </motion.div>

                        {/* Visual Area */}
                        <Card className="mb-8 h-[400px] relative overflow-hidden bg-cyber-dark/50" neonBorder>
                            <WorkshopVisuals type={workshop.animationType} />
                            <div className="absolute top-4 left-4 text-xs font-mono text-cyber-cyan">
                                SYSTEM STATUS: OPERATIONAL
                            </div>
                        </Card>

                        {/* Overview Section */}
                        <Card className="mb-8">
                            <h2 className={`text-2xl font-black uppercase mb-6 flex items-center gap-3 ${colorMap[workshop.color]}`}>
                                <span className="w-8 h-0.5 bg-current" />
                                OVERVIEW
                            </h2>
                            <p className="text-white/70 leading-relaxed mb-6">
                                {workshop.fullDescription}
                            </p>
                        </Card>

                        {/* Learning Outcomes */}
                        <Card className="mb-8">
                            <h2 className={`text-2xl font-black uppercase mb-6 flex items-center gap-3 ${colorMap[workshop.color]}`}>
                                <span className="w-8 h-0.5 bg-current" />
                                LEARNING OUTCOMES
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {workshop.outcomes.map((outcome, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className={`text-lg ${colorMap[workshop.color]}`}>›</span>
                                        <span className="text-sm text-white/80">{outcome}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>

                        {/* Technical Stack */}
                        <Card className="mb-8">
                            <h2 className="text-2xl font-black uppercase mb-6 text-white">
                                TECHNICAL STACK
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {workshop.techStack.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-4 py-2 bg-cyber-dark border border-cyber-cyan/30 text-cyber-cyan text-xs font-bold uppercase hover:border-cyber-cyan hover:shadow-neon-cyan transition-all cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </Card>

                        {/* Prerequisites */}
                        <Card>
                            <h2 className="text-2xl font-black uppercase mb-6 text-white">
                                PREREQUISITES
                            </h2>
                            <ul className="space-y-3">
                                {workshop.prerequisites.map((prereq, index) => (
                                    <li key={index} className="flex items-start gap-3 text-white/70">
                                        <span className="text-cyber-green">•</span>
                                        <span className="text-sm">{prereq}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    {/* Right Column - Sticky Panel */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="sticky top-24"
                        >
                            <Card className={`border-2 ${colorMap[workshop.color]}`}>
                                {/* Price */}
                                <div className="mb-6 pb-6 border-b border-white/10">
                                    <div className="text-xs text-white/40 uppercase mb-2">Course Fee</div>
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <span className={`text-5xl font-black ${colorMap[workshop.color]}`}>
                                            ₹{workshop.price}
                                        </span>
                                        <span className="text-xl text-white/40 line-through">
                                            ₹{workshop.originalPrice}
                                        </span>
                                    </div>
                                    <span className="text-xs text-cyber-green uppercase">
                                        ● LIMITED SEATS AVAILABLE
                                    </span>
                                </div>

                                {/* Meta Info */}
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-white/40 uppercase">Level:</span>
                                        <span className="text-white font-bold">{workshop.level}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-white/40 uppercase">Duration:</span>
                                        <span className="text-white font-bold">{workshop.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-white/40 uppercase">Format:</span>
                                        <span className="text-white font-bold">{workshop.format}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-white/40 uppercase">Certificate:</span>
                                        <span className="text-white font-bold">{workshop.certificate}</span>
                                    </div>
                                </div>

                                {/* CTAs */}
                                <div className="space-y-3">
                                    <Button
                                        variant="primary"
                                        className="w-full"
                                    >
                                        REGISTER NOW →
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className="w-full"
                                        onClick={() => {
                                            setAddedToCombo(!addedToCombo);
                                        }}
                                    >
                                        {addedToCombo ? '✓ ADDED TO COMBO' : 'ADD TO COMBO ⊕'}
                                    </Button>
                                </div>

                                {/* Help */}
                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <div className="text-xs text-white/40 uppercase mb-2">Need Help?</div>
                                    <button className="text-sm text-cyber-cyan hover:underline">
                                        QUERY TERMINAL →
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
