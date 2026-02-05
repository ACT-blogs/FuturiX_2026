import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Network, Cpu, Zap, Cog, Building2, Brain, Shield, Database, Layout, ArrowRight } from 'lucide-react';
import { departments, getEventsByDepartment } from '../data/eventsData';

const iconMap = {
    Code2, Network, Cpu, Zap, Cog, Building2, Brain, Shield, Database, Layout
};

const colorClasses = {
    primary: {
        bg: 'bg-primary/10',
        border: 'border-primary/30',
        text: 'text-primary',
        dot: 'bg-primary',
        gradient: 'from-primary/10 to-primary/5',
    },
    secondary: {
        bg: 'bg-secondary/10',
        border: 'border-secondary/30',
        text: 'text-secondary',
        dot: 'bg-secondary',
        gradient: 'from-secondary/10 to-secondary/5',
    },
};

const Departments = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="heading-lg gradient-text mb-6">Departments</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore events by department
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departments.map((dept, index) => {
                        const Icon = iconMap[dept.icon] || Code2;
                        const eventCount = getEventsByDepartment(dept.id).length;
                        const colors = colorClasses[dept.color] || colorClasses.primary;

                        return (
                            <motion.div
                                key={dept.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card-hover group relative overflow-hidden glass p-6 rounded-2xl"
                            >
                                <div className="mb-6">
                                    <div className={`w-16 h-16 mx-auto ${colors.bg} border-2 ${colors.border} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                        <Icon className={`w-8 h-8 ${colors.text}`} />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                                    <p className="text-gray-400 mb-6">{eventCount} Events</p>
                                    <Link
                                        to={`/events?dept=${dept.id}`}
                                        className="inline-flex items-center justify-center space-x-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                                    >
                                        <span>View Events</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Departments;
