import { BadgeCheck, BrainCircuit, Wrench } from 'lucide-react';
import { Section } from '../ui/Section';

const features = [
    {
        title: 'CERTS ISSUED',
        description: 'Industry-standard certification for your professional portfolio.',
        icon: BadgeCheck,
        barClass: 'bg-cyber-cyan',
        iconClass: 'text-cyber-cyan'
    },
    {
        title: 'NEURAL NETWORK',
        description: 'Connect with mentors and builders across top tech domains.',
        icon: BrainCircuit,
        barClass: 'bg-cyber-purple',
        iconClass: 'text-cyber-purple'
    },
    {
        title: 'HARD SKILLS',
        description: 'Practical implementation workflows. No theory bloat.',
        icon: Wrench,
        barClass: 'bg-cyber-green',
        iconClass: 'text-cyber-green'
    }
];

export const FeatureStrip = () => {
    return (
        <Section className="py-8 sm:py-10 md:py-12 bg-cyber-panel/10 border-y border-white/5">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={feature.title}
                            className="relative overflow-hidden border border-white/10 bg-cyber-panel/30 px-5 sm:px-6 py-5 sm:py-6"
                        >
                            <span className={`absolute left-0 top-0 h-full w-1 ${feature.barClass}`} />
                            <div className="flex items-center gap-3 mb-3">
                                <Icon className={`h-5 w-5 ${feature.iconClass}`} />
                                <h3 className="text-sm font-black uppercase tracking-widest text-white">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};
