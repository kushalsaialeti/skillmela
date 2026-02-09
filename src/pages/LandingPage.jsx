import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { FeaturedWorkshop } from '../components/workshops/FeaturedWorkshop';
import { WorkshopCard } from '../components/workshops/WorkshopCard';
import { ComboCard } from '../components/combos/ComboCard';
import { getFeaturedWorkshop, getNonFeaturedWorkshops } from '../data/workshops';
import { combos } from '../data/combos';
import { culturals } from '../data/culturals';
import { useState, useEffect } from 'react';

export const LandingPage = () => {
    const navigate = useNavigate();
    const featuredWorkshop = getFeaturedWorkshop();
    const otherWorkshops = getNonFeaturedWorkshops();
    const [scrambledText, setScrambledText] = useState('SKILL MELA');

    // Text scramble effect
    useEffect(() => {
        const chars = 'ABCDEFGHIJKLMNOVWXYZ0123456789@#$%&*';
        const originalText = 'SKILL MELA';
        let iteration = 0;

        const interval = setInterval(() => {
            setScrambledText(
                originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            {/* Hero Section */}
            <Section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 animate-grid opacity-30" />

                <div className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-cyber-cyan text-sm font-bold uppercase tracking-widest block mb-4">
                            ★ DIGITAL EVENT LIVE
                        </span>

                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                            <span className="text-white">{scrambledText}</span>
                            <br />
                            <span className="text-cyber-cyan neon-text">SEASON 1</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 uppercase tracking-wide mb-8 max-w-3xl mx-auto">
                            5 WORKSHOPS // REAL-WORLD SKILLS // STUDENT FOCUSED
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mb-12">
                            <div className="text-center">
                                <div className="text-3xl font-black text-cyber-cyan">20+ HRS</div>
                                <div className="text-xs text-white/40 uppercase">Content</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-cyber-cyan">5 WORKSHOPS</div>
                                <div className="text-xs text-white/40 uppercase">Main Campus</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-cyber-cyan">100 Seats</div>
                                <div className="text-xs text-white/40 uppercase">Limited Batch</div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="primary" onClick={() => navigate('/events')}>
                                EXPLORE WORKSHOPS
                            </Button>
                            <Button variant="secondary" onClick={() => navigate('/events')}>
                                VIEW SCHEDULE
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-cyber-cyan/50 flex items-start justify-center p-2">
                        <motion.div
                            className="w-1 h-2 bg-cyber-cyan"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </Section>

            {/* Featured Workshop */}
            <Section id="featured">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="section-title text-cyber-cyan">
                        FEATURED WORKSHOP
                    </h2>
                    <span className="text-xs text-white/40 uppercase tracking-wider">
                        BATCH: OPEN // SEATS: AVAILABLE
                    </span>
                </div>
                <FeaturedWorkshop workshop={featuredWorkshop} />
            </Section>

            {/* Other Workshops Grid */}
            <Section id="workshops" className="bg-cyber-panel/20">
                <h2 className="section-title text-cyber-cyan mb-12">
                    ALL WORKSHOPS
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {otherWorkshops.map((workshop) => (
                        <WorkshopCard key={workshop.id} workshop={workshop} />
                    ))}
                </div>
            </Section>

            {/* Efficiency Combos */}
            <Section id="combos">
                <div className="text-center mb-12">
                    <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-cyan mb-4">
                        EFFICIENCY COMBOS
                    </h2>
                    <p className="text-white/60 uppercase tracking-wide">
                        SAVE MORE WITH BUNDLED PACKAGES
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {combos.map((combo) => (
                        <ComboCard key={combo.id} combo={combo} />
                    ))}
                </div>
            </Section>

            {/* Culturals */}
            <Section id="culturals" className="bg-cyber-panel/20">
                <h2 className="section-title text-cyber-cyan mb-12">
                    CULTURALS
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {culturals.map((cultural) => (
                        <motion.div
                            key={cultural.id}
                            whileHover={{ y: -5 }}
                            className="glass-panel p-6 text-center group cursor-pointer"
                        >
                            <div className="text-4xl mb-3">{cultural.icon}</div>
                            <h3 className="text-sm font-bold uppercase mb-2 group-hover:text-cyber-cyan transition-colors">
                                {cultural.title}
                            </h3>
                            <p className="text-xs text-white/40 uppercase mb-2">{cultural.category}</p>
                            <p className="text-xs text-white/60">{cultural.date}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
};
