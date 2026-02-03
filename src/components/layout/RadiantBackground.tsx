import { motion } from 'framer-motion';

export function RadiantBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            {/* Base gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-black" />

            {/* Animated diagonal beams */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Beam 1 - Large left beam */}
                <div
                    className="absolute -left-1/4 top-0 h-[200%] w-[60%] rotate-[-35deg] opacity-[0.03]"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                    }}
                />

                {/* Beam 2 - Center beam */}
                <div
                    className="absolute left-1/4 top-0 h-[200%] w-[40%] rotate-[-35deg] opacity-[0.04]"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                    }}
                />

                {/* Beam 3 - Right beam */}
                <div
                    className="absolute left-1/2 top-0 h-[200%] w-[50%] rotate-[-35deg] opacity-[0.03]"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    }}
                />

                {/* Glow spot - Top left */}
                <div
                    className="absolute -left-20 -top-20 h-96 w-96 rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                    }}
                />
            </motion.div>

            {/* Subtle noise texture */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
