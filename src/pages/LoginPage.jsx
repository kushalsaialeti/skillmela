import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-cyber-dark flex flex-col relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 animate-grid opacity-20" />

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyber-cyan/5 blur-[120px] rounded-full" />

            {/* Navigation */}
            <nav className="relative z-10 border-b border-cyber-cyan/20 glass-panel">
                <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
                    <Link to="/" className="text-2xl font-bold uppercase tracking-tight">
                        <span className="text-cyber-cyan">SKILL</span><span className="text-white">MELA</span>
                        <span className="text-cyber-cyan ml-1">S1</span>
                    </Link>
                    <Link
                        to="/"
                        className="px-4 py-2 border border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-neon-cyan transition-all uppercase tracking-wider text-sm font-bold"
                    >
                        Back
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                            className="inline-block p-4 glass-panel border border-cyber-cyan/30 mb-4"
                        >
                            <LogIn size={32} className="text-cyber-cyan" />
                        </motion.div>
                        <h1 className="text-4xl font-black uppercase tracking-tight mb-2">
                            <span className="text-white">Student</span> <span className="text-cyber-cyan">Login</span>
                        </h1>
                        <p className="text-white/60 uppercase tracking-wide text-sm">
                            Access your Skill Mela dashboard
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 mb-6 flex items-start gap-3"
                        >
                            <div className="w-2 h-2 bg-red-400 mt-1.5 flex-shrink-0"></div>
                            <p className="text-sm">{error}</p>
                        </motion.div>
                    )}

                    {/* Login Card */}
                    <div className="glass-panel border border-cyber-cyan/20 p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="student@email.com"
                                        className="w-full bg-cyber-dark/50 border border-cyber-cyan/30 hover:border-cyber-cyan/50 focus:border-cyber-cyan px-4 py-3 pl-12 text-white placeholder-white/30 focus:outline-none focus:shadow-neon-cyan transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-cyber-dark/50 border border-cyber-cyan/30 hover:border-cyber-cyan/50 focus:border-cyber-cyan px-4 py-3 pl-12 pr-12 text-white placeholder-white/30 focus:outline-none focus:shadow-neon-cyan transition-all"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyber-cyan transition"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Login Button */}
                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 px-4 bg-cyber-cyan text-cyber-dark font-bold uppercase tracking-wider hover:shadow-neon-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="w-5 h-5 border-2 border-cyber-dark border-t-transparent"
                                        />
                                        Logging in...
                                    </span>
                                ) : (
                                    'Login Now'
                                )}
                            </motion.button>
                        </form>

                        {/* Divider */}
                        <div className="mt-8 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-cyber-panel text-white/40 uppercase tracking-wider">Or</span>
                            </div>
                        </div>

                        {/* Register Link */}
                        <div className="mt-8 text-center space-y-4">
                            <p className="text-white/60 text-sm">
                                New to Skill Mela?{' '}
                                <Link to="/register" className="text-cyber-cyan hover:text-white font-bold transition uppercase">
                                    Create Account
                                </Link>
                            </p>
                            <Link to="/admin-login" className="inline-block text-white/40 hover:text-cyber-cyan text-sm transition uppercase tracking-wider">
                                Admin Login →
                            </Link>
                        </div>
                    </div>

                    {/* Demo Credentials */}
                    <div className="mt-6 glass-panel border border-cyber-cyan/10 p-4 text-center">
                        <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Demo Credentials</p>
                        <p className="text-xs text-cyber-cyan font-mono">student@skillmela.com / password123</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;
