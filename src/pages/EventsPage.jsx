import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { FeaturedWorkshop } from '../components/workshops/FeaturedWorkshop';
import { WorkshopCard } from '../components/workshops/WorkshopCard';
import { ComboCard } from '../components/combos/ComboCard';
import { getFeaturedWorkshop, getNonFeaturedWorkshops } from '../data/workshops';
import { combos } from '../data/combos';

export const EventsPage = () => {
    const featuredWorkshop = getFeaturedWorkshop();
    const otherWorkshops = getNonFeaturedWorkshops();

    return (
        <div className="pt-20">
            {/* Page Header */}
            <Section className="border-b border-cyber-cyan/20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <span className="text-cyber-cyan text-sm font-bold uppercase tracking-widest block mb-4">
                        SKILL MELA S1 // WORKSHOPS
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                        TECHNICAL <span className="text-cyber-cyan">CLUSTERS</span>
                    </h1>
                    <p className="text-lg text-white/60 uppercase tracking-wide max-w-3xl mx-auto">
                        5 SYSTEM MODULES // REAL-WORLD SKILLS // STUDENT FOCUSED
                    </p>
                </motion.div>
            </Section>

            {/* Featured Workshop */}
            <Section>
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

            {/* All Workshops */}
            <Section className="bg-cyber-panel/20">
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
            <Section>
                <div className="text-center mb-12">
                    <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-cyan mb-4">
                        EFFICIENCY COMBOS
                    </h2>
                    <p className="text-white/60 uppercase tracking-wide text-sm">
                        BUNDLED PACKAGES // MAXIMUM VALUE
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {combos.map((combo) => (
                        <ComboCard key={combo.id} combo={combo} />
                    ))}
                </div>
            </Section>
        </div>
    );
};
