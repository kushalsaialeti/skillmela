import { useEffect, useRef } from 'react';

export const SystemOverlay = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Grid animation
        const drawGrid = () => {
            ctx.strokeStyle = 'rgba(21, 233, 246, 0.05)';
            ctx.lineWidth = 1;

            const gridSize = 50;

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawGrid();
        };

        window.addEventListener('resize', handleResize);
        drawGrid();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* Animated Grid Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0 opacity-50"
            />

            {/* Pixel Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 pixel-noise opacity-30" />

            {/* Radial Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyber-cyan/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyber-purple/5 blur-[120px] rounded-full" />
            </div>
        </>
    );
};
