import { Link } from 'react-router-dom';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-cyber-panel/60 border-t border-cyber-cyan/20 py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 border-2 border-cyber-cyan flex items-center justify-center">
                                <div className="w-4 h-4 border-2 border-cyber-cyan border-t-transparent" />
                            </div>
                            <span className="text-lg font-black uppercase">
                                SKILL MELA <span className="text-cyber-cyan">S1</span>
                            </span>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed">
                            SEASON 1.0 // PHASE 1.0<br />
                            ENGINEERING THE NEXT GENERATION OF CYBERNETICS
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-cyber-cyan">
                            ACCESS POINTS
                        </h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-sm text-white/60 hover:text-cyber-cyan transition-colors">HOME</Link></li>
                            <li><Link to="/events" className="text-sm text-white/60 hover:text-cyber-cyan transition-colors">WORKSHOPS</Link></li>
                            <li><Link to="/events" className="text-sm text-white/60 hover:text-cyber-cyan transition-colors">COMBOS</Link></li>
                            <li><Link to="/archive" className="text-sm text-white/60 hover:text-cyber-cyan transition-colors">ARCHIVE</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-cyber-cyan">
                            DOWNLINK TERMINAL
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-sm text-white/60">CONTACT@SKILLMELA.AI</li>
                            <li className="text-sm text-white/60">+91 XXXX XXXXXX</li>
                            <li className="text-sm text-white/60">HYDERABAD, INDIA</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-cyber-cyan">
                            SOCIAL CHANNELS
                        </h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-cyber-cyan/50 flex items-center justify-center hover:border-cyber-cyan hover:shadow-neon-cyan transition-all">
                                <span className="text-cyber-cyan">TW</span>
                            </a>
                            <a href="#" className="w-10 h-10 border border-cyber-cyan/50 flex items-center justify-center hover:border-cyber-cyan hover:shadow-neon-cyan transition-all">
                                <span className="text-cyber-cyan">IG</span>
                            </a>
                            <a href="#" className="w-10 h-10 border border-cyber-cyan/50 flex items-center justify-center hover:border-cyber-cyan hover:shadow-neon-cyan transition-all">
                                <span className="text-cyber-cyan">LI</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-cyber-cyan/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/40 uppercase tracking-wider">
                        © {currentYear} DESIGNS FOR CYBERNETICS // SKILL MELA // PHASE 1.0
                    </p>
                    <div className="flex gap-6 text-xs text-white/40 uppercase tracking-wider">
                        <a href="#" className="hover:text-cyber-cyan transition-colors">TWITTER</a>
                        <a href="#" className="hover:text-cyber-cyan transition-colors">DISCORD</a>
                        <a href="#" className="hover:text-cyber-cyan transition-colors">GITHUB</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
