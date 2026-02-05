import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { getDepartmentById, getCategoryById } from '../data/eventsData';

const EventCard = ({ event, index = 0 }) => {
    const department = getDepartmentById(event.department);
    const category = getCategoryById(event.category);

    const categoryColors = {
        'technical': 'badge-primary',
        'non-technical': 'badge-secondary',
        'workshop': 'badge-success',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="card-hover group h-full flex flex-col"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                        {event.name}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                        {event.shortDescription}
                    </p>
                </div>
                {event.prizePool && event.prizePool !== 'Certificates' && (
                    <div className="ml-4 flex-shrink-0">
                        <div className="flex items-center space-x-1 text-yellow-400">
                            <Trophy className="w-5 h-5" />
                        </div>
                    </div>
                )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge bg-white/5 text-white border border-white/10">
                    {department?.name}
                </span>
                <span className={categoryColors[event.category]}>
                    {category?.name}
                </span>
                <span className="badge bg-primary/10 text-primary border border-primary/20">
                    {event.teamSize}
                </span>
            </div>

            {/* Prize Pool */}
            {event.prizePool && (
                <div className="mb-4 glass p-3 rounded-lg">
                    <p className="text-xs text-gray-400">Prize Pool</p>
                    <p className="text-lg font-bold text-primary">{event.prizePool}</p>
                </div>
            )}

            {/* Spacer */}
            <div className="flex-1" />

            {/* View Details Button */}
            <Link
                to={`/events/${event.id}`}
                className="mt-4 flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 
                   border border-white/10 hover:border-primary/50 rounded-lg 
                   transition-all duration-300 group/btn"
            >
                <span className="text-sm font-medium text-gray-300 group-hover/btn:text-white">
                    View Details
                </span>
                <ArrowRight className="w-4 h-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur-xl" />
            </div>
        </motion.div>
    );
};

export default EventCard;
