import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { UpgradePaths } from '../components/landing/Workshops';
import { ComboHighlight } from '../components/landing/ComboHighlight';
import { getFeaturedWorkshop, getNonFeaturedWorkshops } from '../data/workshops';
import { combos } from '../data/combos';
import { useState, useEffect } from 'react';
import { Hero } from '../components/landing/hero';

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
            <Hero/>

            <UpgradePaths />

            <ComboHighlight />

            {/* Culturals */}
            <Section id="culturals" className="bg-cyber-panel/20">
                <h2 className="section-title text-cyber-cyan mb-12">
                    CULTURALS
                </h2>

                {/* Coming Soon Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-12 text-center max-w-2xl mx-auto"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl mb-6"
                    >
                        🎭
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase text-cyber-cyan mb-4">
                        EVENTS COMING SOON
                    </h3>
                    <p className="text-white/60 uppercase tracking-wide mb-6">
                        Cultural events will be available soon. Stay tuned for exciting performances, competitions, and more!
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-cyber-cyan"
                        />
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                            className="w-2 h-2 bg-cyber-cyan"
                        />
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                            className="w-2 h-2 bg-cyber-cyan"
                        />
                    </div>
                </motion.div>
            </Section>
        </div>
    );
};
