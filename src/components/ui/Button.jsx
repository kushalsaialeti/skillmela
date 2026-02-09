import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

export const Button = ({
    children,
    variant = 'primary',
    className,
    onClick,
    ...props
}) => {
    const variants = {
        primary: 'bg-cyber-cyan text-cyber-dark hover:shadow-neon-cyan',
        secondary: 'border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark',
        purple: 'bg-cyber-purple text-white hover:shadow-neon-purple',
        ghost: 'border border-cyber-cyan/50 text-cyber-cyan hover:border-cyber-cyan hover:shadow-neon-cyan',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300',
                'border-none',
                variants[variant],
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};
