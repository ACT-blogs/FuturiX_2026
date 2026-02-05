import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaClock, FaUsers, FaArrowRight, FaTrophy, FaCode, FaMicrochip, FaLaptopCode, FaChartLine } from 'react-icons/fa';

// Map department IDs to icons
const deptIcons = {
    'aids': FaMicrochip,
    'aiml': FaCode,
    'cs': FaLaptopCode,
    'csbs': FaChartLine
};

const EventCard = ({ event, index }) => {
    const DeptIcon = deptIcons[event.department] || FaCode;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full glass border border-white/10 hover:border-primary/50 p-6 rounded-2xl transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <DeptIcon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${event.category === 'technical'
                            ? 'bg-primary/20 text-primary border border-primary/20'
                            : 'bg-secondary/20 text-secondary border border-secondary/20'
                        }`}>
                        {event.category}
                    </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {event.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                    {event.shortDescription}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                        <FaUsers className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{event.teamSize}</span>
                    </div>
                    {event.prizePool && (
                        <div className="flex items-center text-sm text-gray-500">
                            <FaTrophy className="w-4 h-4 mr-2 text-yellow-500" />
                            <span className="text-yellow-500/90 font-medium">{event.prizePool}</span>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <Link
                    to={`/events/${event.id}`}
                    className="flex items-center justify-center w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all group/btn border border-white/5 hover:border-primary/30"
                >
                    <span>View Details</span>
                    <FaArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default EventCard;
