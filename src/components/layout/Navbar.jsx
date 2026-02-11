import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import skillmelaLogo from '../../assets/skillmela-logo.png';

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'WORKSHOPS', path: '/events' },
        { label: 'ARCHIVE', path: '/archive' },
    ];

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'mx-3 mt-3 rounded-2xl bg-black/40 backdrop-blur-md border border-cyber-cyan/20 shadow-lg'
                    : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    {/* <div className="w-8 h-8 border-2 border-cyber-cyan flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-cyber-cyan border-t-transparent"
                        />
                    </div>
                    <span className="text-xl font-black uppercase tracking-tight">
                        SKILL MELA <span className="text-cyber-cyan">S1</span>
                    </span> */}
                    <img
                        src={skillmelaLogo}
                        alt="SKILL MELA S1"
                        className="h-8 md:h-10 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={`text-sm font-bold tracking-wider transition-all duration-300 relative group ${isActive(item.path) ? 'text-cyber-cyan' : 'text-white/70 hover:text-cyber-cyan'
                                }`}
                        >
                            {item.label}
                            <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 bg-cyber-cyan"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    {/* CTA Button */}
                    <Button variant="secondary" className="hidden md:block" onClick={() => navigate('/login')}>
                        LOGIN
                    </Button>
                    <Button variant="primary" className="hidden md:block" onClick={() => navigate('/register')}>
                        REGISTER
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-cyber-cyan">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
};
