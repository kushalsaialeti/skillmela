import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, Building2, BookOpen, Calendar, Lock, UserCheck, CheckCircle, FileText } from 'lucide-react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        branch: '',
        year: '',
        section: '',
        registrationNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);
        try {
            await register(formData.name, formData.email, formData.password);
            setShowSuccess(true);
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const inputClasses = "w-full bg-cyber-dark/50 border border-cyber-cyan/30 hover:border-cyber-cyan/50 focus:border-cyber-cyan px-4 py-3 pl-12 text-white placeholder-white/30 focus:outline-none focus:shadow-neon-cyan transition-all";
    const selectClasses = "w-full bg-cyber-dark/50 border border-cyber-cyan/30 hover:border-cyber-cyan/50 focus:border-cyber-cyan px-4 py-3 pl-12 text-white focus:outline-none focus:shadow-neon-cyan transition-all appearance-none cursor-pointer";

    return (
        <div className="min-h-screen bg-cyber-dark relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 animate-grid opacity-20" />

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyber-cyan/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyber-purple/5 blur-[120px] rounded-full" />

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

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="glass-panel border-2 border-cyber-green p-8 text-center max-w-md"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring' }}
                                className="flex justify-center mb-6"
                            >
                                <div className="w-20 h-20 border-2 border-cyber-green flex items-center justify-center">
                                    <CheckCircle size={48} className="text-cyber-green" />
                                </div>
                            </motion.div>
                            <h2 className="text-3xl font-black uppercase text-cyber-green mb-4">
                                Registration Successful!
                            </h2>
                            <p className="text-white/70 mb-2 uppercase tracking-wide text-sm">
                                Your account has been created successfully.
                            </p>
                            <p className="text-white/50 mb-6 text-sm">
                                Login credentials have been sent to <span className="text-cyber-cyan">{formData.email}</span>.
                                We're excited to see you at the event!
                            </p>
                            <div className="space-y-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/login')}
                                    className="w-full py-3 px-6 bg-cyber-green text-cyber-dark font-bold uppercase tracking-wider hover:shadow-neon-green transition-all"
                                >
                                    Go to Login →
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/events')}
                                    className="w-full py-3 px-6 border border-cyber-cyan text-cyber-cyan font-bold uppercase tracking-wider hover:bg-cyber-cyan/10 transition-all"
                                >
                                    Browse Workshops
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="inline-block p-4 glass-panel border border-cyber-cyan/30 mb-4"
                    >
                        <UserCheck size={40} className="text-cyber-cyan" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
                        <span className="text-white">Join</span> <span className="text-cyber-cyan">Skill Mela</span>
                    </h1>
                    <p className="text-white/60 uppercase tracking-wide">
                        Create your account and explore amazing workshops
                    </p>
                </motion.div>

                {/* Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="mb-8 bg-red-500/20 border border-red-500/50 text-red-300 px-6 py-4 flex items-start gap-3"
                        >
                            <div className="w-2 h-2 bg-red-400 mt-1.5 flex-shrink-0"></div>
                            <p className="text-sm">{error}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel border border-cyber-cyan/20 p-8 md:p-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Form Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="student@email.com"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            {/* College */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    College Name
                                </label>
                                <div className="relative">
                                    <Building2 size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type="text"
                                        name="college"
                                        value={formData.college}
                                        onChange={handleChange}
                                        placeholder="Your University"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Branch */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Branch
                                </label>
                                <div className="relative">
                                    <BookOpen size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type="text"
                                        name="branch"
                                        value={formData.branch}
                                        onChange={handleChange}
                                        placeholder="CSE / ECE / Mechanical"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Year */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Year of Study
                                </label>
                                <div className="relative">
                                    <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60 pointer-events-none" />
                                    <select
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        className={selectClasses}
                                        required
                                    >
                                        <option value="" className="bg-cyber-dark">Select Year</option>
                                        <option value="1" className="bg-cyber-dark">1st Year</option>
                                        <option value="2" className="bg-cyber-dark">2nd Year</option>
                                        <option value="3" className="bg-cyber-dark">3rd Year</option>
                                        <option value="4" className="bg-cyber-dark">4th Year</option>
                                    </select>
                                </div>
                            </div>

                            {/* Section */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Section
                                </label>
                                <div className="relative">
                                    <BookOpen size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60 pointer-events-none" />
                                    <select
                                        name="section"
                                        value={formData.section}
                                        onChange={handleChange}
                                        className={selectClasses}
                                        required
                                    >
                                        <option value="" className="bg-cyber-dark">Select Section</option>
                                        <option value="A" className="bg-cyber-dark">A</option>
                                        <option value="B" className="bg-cyber-dark">B</option>
                                        <option value="C" className="bg-cyber-dark">C</option>
                                        <option value="D" className="bg-cyber-dark">D</option>
                                        <option value="E" className="bg-cyber-dark">E</option>
                                    </select>
                                </div>
                            </div>

                            {/* Registration Number */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Registration Number
                                </label>
                                <div className="relative">
                                    <FileText size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type="text"
                                        name="registrationNumber"
                                        value={formData.registrationNumber}
                                        onChange={handleChange}
                                        placeholder="e.g., 23B91A****"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold uppercase tracking-wider text-white/80">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/60" />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 px-6 bg-cyber-cyan text-cyber-dark font-bold uppercase tracking-wider hover:shadow-neon-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        className="w-5 h-5 border-2 border-cyber-dark border-t-transparent"
                                    />
                                    Creating Account...
                                </span>
                            ) : (
                                'Create Account & Register →'
                            )}
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="mt-8 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-3 bg-cyber-panel text-white/40 uppercase tracking-wider">Already registered?</span>
                        </div>
                    </div>

                    {/* Login Link */}
                    <div className="mt-8 text-center">
                        <p className="text-white/60 text-sm">
                            Have an account?{' '}
                            <Link to="/login" className="text-cyber-cyan hover:text-white font-bold transition uppercase">
                                Login here
                            </Link>
                        </p>
                    </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-10"
                >
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="glass-panel p-4 flex items-center gap-3">
                            <CheckCircle size={20} className="text-cyber-cyan flex-shrink-0" />
                            <span className="text-sm text-white/70 uppercase tracking-wide">Secure Registration</span>
                        </div>
                        <div className="glass-panel p-4 flex items-center gap-3">
                            <CheckCircle size={20} className="text-cyber-cyan flex-shrink-0" />
                            <span className="text-sm text-white/70 uppercase tracking-wide">Email Confirmation</span>
                        </div>
                        <div className="glass-panel p-4 flex items-center gap-3">
                            <CheckCircle size={20} className="text-cyber-cyan flex-shrink-0" />
                            <span className="text-sm text-white/70 uppercase tracking-wide">Instant Access</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RegisterPage;
