import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Trophy } from 'lucide-react';
import { getDepartmentById, getCategoryById } from '../data/eventsData';

const EventCard = ({ event, index }) => {
    const department = getDepartmentById(event.department);
    const category = getCategoryById(event.category);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-6">
                <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-gray-300 border border-white/10">
                        {department?.name}
                    </span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${category?.id === 'technical'
                            ? 'bg-primary/20 text-primary border-primary/20'
                            : 'bg-secondary/20 text-secondary border-secondary/20'
                        }`}>
                        {category?.name}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {event.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {event.shortDescription}
                </p>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        <span>Team Size: {event.teamSize}</span>
                    </div>
                    {(event.prizePool || event.prize) && (
                        <div className="flex items-center text-sm text-gray-400">
                            <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                            <span>{event.prizePool || event.prize}</span>
                        </div>
                    )}
                </div>

                <Link
                    to={`/event/${event.id}`}
                    className="flex items-center justify-between w-full p-3 rounded-xl bg-white/5 hover:bg-primary text-white transition-all duration-300 group/btn"
                >
                    <span className="text-sm font-semibold">View Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default EventCard;
