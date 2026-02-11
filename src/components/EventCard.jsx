import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, ArrowRight, Presentation } from 'lucide-react';
import { getDepartmentById, getCategoryById } from '../data/eventsData';

const EventCard = ({ event }) => {
    // Handle both single department and multiple departments
    let departmentName = '';
    if (event.departments) {
        departmentName = event.departments.map(d => getDepartmentById(d)?.name).filter(Boolean).join(' & ');
    } else {
        departmentName = getDepartmentById(event.department)?.name;
    }

    const category = getCategoryById(event.category);

    // Check if this is a presentation event
    const isPresentationEvent = event.category === 'paper-presentation' || event.category === 'poster-presentation';

    // Unique gradient for each theme
    const themeGradients = {
        'Software Engineering & Computing': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'Electronics & Communication': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'Information Technology': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'AI & Machine Learning': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'Data Science & Analytics': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'Mechanical Engineering': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        'Civil Engineering': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'Cyber Security': 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
        'Business Systems & Technology': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    };

    const themeGradient = event.theme ? (themeGradients[event.theme] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') : null;

    return (
        <Link to={`/event/${event.id}`}>
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-hover h-full flex flex-col relative overflow-hidden group"
            >
                {/* Gradient Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: 'var(--accent-gradient)' }} />

                {/* Top Right Badge - Show "Presentation" for presentation events */}
                <div className="absolute top-4 right-4 z-10">
                    <span className="badge-primary text-xs px-3 py-1">
                        {isPresentationEvent ? 'Presentation' : (category?.name || 'Event')}
                    </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-6">
                    {/* Department */}
                    <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent-primary)' }}>
                        {departmentName || 'Department'}
                    </p>

                    {/* Event Name */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all line-clamp-2"
                        style={{ color: 'var(--text-primary)' }}>
                        {event.name}
                    </h3>


                    {/* Description */}
                    <p className="mb-6 line-clamp-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {event.shortDescription}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center glass">
                                <Calendar className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                            </div>
                            <div>
                                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Date</p>
                                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                                    {event.date || 'February 21, 2026'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center glass">
                                <Users className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                            </div>
                            <div>
                                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Team Size</p>
                                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                                    {event.teamSize || 'Individual'}
                                </p>
                            </div>
                        </div>

                        {event.prizePool && (
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center glass">
                                    <Trophy className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Prize Pool</p>
                                    <p className="text-sm font-medium gradient-text">
                                        {event.prizePool}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* View Details Button */}
                <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform">
                        <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>
                            View Details
                        </span>
                        <ArrowRight className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{ background: 'var(--accent-gradient)' }} />
            </motion.div>
        </Link>
    );
};

export default EventCard;
