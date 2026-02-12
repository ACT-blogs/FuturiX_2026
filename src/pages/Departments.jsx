import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Network, Cpu, Cog, Building2, Brain, Shield, Database, Layout, ArrowRight, Sparkles, Phone, User } from 'lucide-react';
import { departments } from '../data/eventsData';

const Departments = () => {
    const iconMap = {
        Code2, Network, Cpu, Cog, Building2, Brain, Shield, Database, Layout
    };

    const colorClasses = {
        primary: {
            bg: 'from-cyan-500 to-blue-500',
            border: 'border-cyan-500/50',
            text: 'text-cyan-400',
            glow: 'shadow-cyan-500/50'
        },
        secondary: {
            bg: 'from-purple-500 to-pink-500',
            border: 'border-purple-500/50',
            text: 'text-purple-400',
            glow: 'shadow-purple-500/50'
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 badge-primary mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Multiple Disciplines</span>
                    </div>
                    <h1 className="heading-lg gradient-text mb-6">Our Departments</h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Explore events across diverse engineering and technology departments.
                        Each department brings unique challenges and opportunities to showcase your expertise.
                    </p>
                </motion.div>

                {/* Departments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departments.map((dept, index) => {
                        const Icon = iconMap[dept.icon] || Code2;
                        const colorClass = colorClasses[dept.color] || colorClasses.primary;

                        return (
                            <motion.div
                                key={dept.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="card h-full group relative overflow-hidden flex flex-col p-0"
                                >
                                    {/* Gradient Background Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                                        style={{ background: 'var(--accent-gradient)' }} />

                                    {/* Main Content Details Link */}
                                    <Link to={`/events?dept=${encodeURIComponent(dept.id)}`} className="flex-1 p-6 relative z-10">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-20 h-20 mb-6 rounded-2xl flex items-center justify-center relative z-10"
                                            style={{ background: 'var(--accent-gradient)' }}
                                        >
                                            <Icon className="w-10 h-10 text-white" />
                                        </motion.div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all"
                                                style={{ color: 'var(--text-primary)' }}>
                                                {dept.name}
                                            </h3>
                                            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                                {dept.description || `Explore innovative events and competitions in ${dept.name}`}
                                            </p>

                                            {/* View Events Link */}
                                            <div className="flex items-center space-x-2 font-medium group-hover:translate-x-2 transition-transform"
                                                style={{ color: 'var(--accent-primary)' }}>
                                                <span>View Events</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Student Coordinators Section */}
                                    {dept.coordinators && dept.coordinators.length > 0 && (
                                        <div className="relative z-10 px-6 py-4 border-t border-white/5 bg-white/5 backdrop-blur-sm">
                                            <div className="flex items-center gap-2 mb-3">
                                                <User size={16} className="text-purple-400" />
                                                <h4 className="text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--text-secondary)' }}>
                                                    Student Coordinators
                                                </h4>
                                            </div>
                                            <div className="grid grid-cols-1 gap-2">
                                                {dept.coordinators.map((coord, idx) => (
                                                    <div key={idx} className="flex items-center justify-between group/coord">
                                                        <span className="text-sm font-medium text-white/90">{coord.name}</span>
                                                        <a
                                                            href={`tel:${coord.phone}`}
                                                            className="flex items-center gap-2 text-xs py-1 px-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20"
                                                            style={{ color: 'var(--accent-primary)' }}
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Phone size={12} />
                                                            <span>{coord.phone}</span>
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Decorative Element */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none"
                                        style={{ background: 'var(--accent-gradient)' }} />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center glass-strong p-12 rounded-3xl"
                >
                    <h2 className="heading-md gradient-text mb-6">Ready to Compete?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Choose your department and explore exciting events tailored to your interests and skills
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/events" className="btn-primary">
                            Browse All Events
                        </Link>
                        <Link to="/register" className="btn-outline">
                            Register Now
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Departments;
