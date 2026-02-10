import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const eventDate = new Date('2026-02-21T09:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Event Date Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center space-x-3 mb-8"
            >
                <Calendar className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                <span className="text-lg font-semibold gradient-text">
                    February 21, 2026
                </span>
            </motion.div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {timeUnits.map((unit, index) => (
                    <motion.div
                        key={unit.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        className="relative"
                    >
                        {/* Card */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-strong rounded-2xl p-6 text-center relative overflow-hidden group"
                        >
                            {/* Animated gradient background */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                style={{ background: 'var(--accent-gradient)' }}
                            />

                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                                style={{
                                    background: 'var(--accent-gradient)',
                                    transform: 'scale(0.8)'
                                }}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Number */}
                                <motion.div
                                    key={unit.value}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-4xl md:text-5xl font-bold mb-2 gradient-text"
                                    style={{ fontVariantNumeric: 'tabular-nums' }}
                                >
                                    {String(unit.value).padStart(2, '0')}
                                </motion.div>

                                {/* Label */}
                                <div
                                    className="text-sm md:text-base font-medium uppercase tracking-wider"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {unit.label}
                                </div>
                            </div>

                            {/* Decorative corner accent */}
                            <div
                                className="absolute top-0 right-0 w-16 h-16 opacity-20"
                                style={{
                                    background: 'radial-gradient(circle at top right, var(--accent-primary), transparent)',
                                }}
                            />
                        </motion.div>

                        {/* Pulse animation for seconds */}
                        {unit.label === 'Seconds' && (
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                                style={{ borderColor: 'var(--accent-primary)' }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Countdown Message */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center mt-8 flex items-center justify-center space-x-2"
            >
                <Clock className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    Time until FuturiX_2026 begins
                </span>
            </motion.div>
        </div>
    );
};

export default Countdown;
