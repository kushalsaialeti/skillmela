import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const WorkshopVisuals = ({ type }) => {
    switch (type) {
        case 'glitch':
            return <GlitchVisual />;
        case 'neural':
            return <NeuralVisual />;
        case 'prism':
            return <PrismVisual />;
        case 'binary':
            return <BinaryVisual />;
        case 'terminal':
            return <TerminalVisual />;
        default:
            return <GlitchVisual />;
    }
};

// Glitch Effect for Domains
const GlitchVisual = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-32 h-32 border-2 border-cyber-cyan/30"
                    animate={{
                        rotate: [0, 90, 180, 270, 360],
                        scale: [1, 1.2, 1, 0.8, 1],
                        x: [0, 10, -10, 5, 0],
                        y: [0, -10, 10, -5, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
};

// Neural Network for AI Tools
const NeuralVisual = () => {
    const nodes = [
        { x: 20, y: 20 },
        { x: 80, y: 30 },
        { x: 50, y: 50 },
        { x: 30, y: 70 },
        { x: 70, y: 80 },
    ];

    return (
        <div className="w-full h-full relative">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Connections */}
                {nodes.map((node, i) =>
                    nodes.slice(i + 1).map((target, j) => (
                        <motion.line
                            key={`${i}-${j}`}
                            x1={node.x}
                            y1={node.y}
                            x2={target.x}
                            y2={target.y}
                            stroke="#198B96"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.3 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                delay: (i + j) * 0.1,
                            }}
                        />
                    ))
                )}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.x}
                        cy={node.y}
                        r="2"
                        fill="#15E9F6"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

// Prism/Color Bleed for Photoshop
const PrismVisual = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {['#15E9F6', '#B608F4', '#3FCC29'].map((color, i) => (
                <motion.div
                    key={i}
                    className="absolute w-40 h-40"
                    style={{
                        background: `linear-gradient(135deg, ${color}40, transparent)`,
                        filter: 'blur(40px)',
                    }}
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                        rotate: [0, 120, 240, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                />
            ))}
        </div>
    );
};

// Binary Rain for DSA
const BinaryVisual = () => {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const cols = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 2,
        }));
        setColumns(cols);
    }, []);

    return (
        <div className="w-full h-full relative overflow-hidden">
            {columns.map((col) => (
                <motion.div
                    key={col.id}
                    className="absolute top-0 text-cyber-green font-mono text-xs opacity-30"
                    style={{ left: `${col.id * 10}%` }}
                    animate={{
                        y: ['0%', '100%'],
                    }}
                    transition={{
                        duration: col.duration,
                        repeat: Infinity,
                        delay: col.delay,
                        ease: 'linear',
                    }}
                >
                    {Array.from({ length: 20 }, () => (Math.random() > 0.5 ? '1' : '0')).join('\n')}
                </motion.div>
            ))}
        </div>
    );
};

// Terminal Cursor for GitHub
const TerminalVisual = () => {
    const commands = [
        '$ git init',
        '$ git add .',
        '$ git commit -m "Initial commit"',
        '$ git push origin main',
    ];

    return (
        <div className="w-full h-full flex items-center justify-center p-8">
            <div className="w-full max-w-md">
                {commands.map((cmd, i) => (
                    <motion.div
                        key={i}
                        className="text-cyber-cyan font-mono text-sm mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: i * 0.8,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                    >
                        {cmd}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                            }}
                        >
                            ▊
                        </motion.span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
