import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import EventCard from '../components/EventCard';
import { departments, categories, getEventsByFilter } from '../data/eventsData';

const Events = () => {
    const [searchParams] = useSearchParams();
    const [selectedDept, setSelectedDept] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Handle URL parameters for department pre-selection
    useEffect(() => {
        const deptParam = searchParams.get('dept');
        if (deptParam && departments.find(d => d.id === deptParam)) {
            setSelectedDept(deptParam);
        }
    }, [searchParams]);

    // Get filtered events
    let filteredEvents = getEventsByFilter(
        selectedDept === 'all' ? null : selectedDept,
        selectedCategory === 'all' ? null : selectedCategory
    );

    // Apply search filter
    if (searchQuery) {
        filteredEvents = filteredEvents.filter(event =>
            event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Header */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="heading-lg gradient-text mb-6">Events</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our diverse range of technical competitions, non-technical events, and workshops
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-8"
                >
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl 
                       text-white placeholder-gray-400 focus:outline-none focus:border-primary 
                       focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-12"
                >
                    <div className="flex items-center space-x-2 mb-6">
                        <Filter className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold text-white">Filter Events</h3>
                    </div>

                    {/* Department Filter */}
                    <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-400 mb-3">By Department</h4>
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => setSelectedDept('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedDept === 'all'
                                    ? 'bg-primary text-dark-500 shadow-lg shadow-primary/30'
                                    : 'glass text-gray-300 hover:bg-white/10'
                                    }`}
                            >
                                All Departments
                            </button>
                            {departments.map((dept) => (
                                <button
                                    key={dept.id}
                                    onClick={() => setSelectedDept(dept.id)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedDept === dept.id
                                        ? 'bg-primary text-dark-500 shadow-lg shadow-primary/30'
                                        : 'glass text-gray-300 hover:bg-white/10'
                                        }`}
                                >
                                    {dept.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-3">By Category</h4>
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === 'all'
                                    ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                                    : 'glass text-gray-300 hover:bg-white/10'
                                    }`}
                            >
                                All Categories
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === cat.id
                                        ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                                        : 'glass text-gray-300 hover:bg-white/10'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6"
                >
                    <p className="text-gray-400">
                        Showing <span className="text-primary font-semibold">{filteredEvents.length}</span> event{filteredEvents.length !== 1 ? 's' : ''}
                    </p>
                </motion.div>

                {/* Events Grid */}
                <AnimatePresence mode="wait">
                    {filteredEvents.length > 0 ? (
                        <motion.div
                            key="events-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredEvents.map((event, index) => (
                                <EventCard key={event.id} event={event} index={index} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="no-events"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center py-16"
                        >
                            <div className="glass p-12 rounded-2xl max-w-md mx-auto">
                                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Search className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">No Events Found</h3>
                                <p className="text-gray-400 mb-6">
                                    Try adjusting your filters or search query
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedDept('all');
                                        setSelectedCategory('all');
                                        setSearchQuery('');
                                    }}
                                    className="btn-primary"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
};

export default Events;
