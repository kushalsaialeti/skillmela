import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

export const Card = ({
    children,
    className,
    glassEffect = true,
    neonBorder = false,
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                'p-6',
                glassEffect && 'glass-panel',
                neonBorder && 'neon-border',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
