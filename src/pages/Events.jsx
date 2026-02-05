import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
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

    const clearFilters = () => {
        setSelectedDept('all');
        setSelectedCategory('all');
        setSearchQuery('');
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="heading-lg gradient-text mb-6">Events</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our diverse range of technical and non-technical competitions
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-10"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl 
                       text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 
                       focus:bg-black/60 transition-all relative z-10"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors z-20"
                            >
                                <FaTimes />
                            </button>
                        )}
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
                        <FaFilter className="w-4 h-4 text-primary" />
                        <h3 className="text-lg font-semibold text-white tracking-wide">FILTER EVENTS</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Department Filter */}
                        <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">By Department</h4>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => setSelectedDept('all')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedDept === 'all'
                                        ? 'bg-primary text-dark font-bold shadow-lg shadow-primary/20 scale-105'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    All Depts
                                </button>
                                {departments.map((dept) => (
                                    <button
                                        key={dept.id}
                                        onClick={() => setSelectedDept(dept.id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedDept === dept.id
                                            ? 'bg-primary text-dark font-bold shadow-lg shadow-primary/20 scale-105'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        {dept.id.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">By Category</h4>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === 'all'
                                        ? 'bg-secondary text-white font-bold shadow-lg shadow-secondary/20 scale-105'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    All Categories
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === cat.id
                                            ? 'bg-secondary text-white font-bold shadow-lg shadow-secondary/20 scale-105'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-between items-center mb-8 border-b border-white/10 pb-4"
                >
                    <p className="text-gray-400">
                        Showing <span className="text-primary font-bold">{filteredEvents.length}</span> results
                    </p>
                    {(selectedDept !== 'all' || selectedCategory !== 'all' || searchQuery) && (
                        <button
                            onClick={clearFilters}
                            className="text-sm text-secondary hover:text-white transition-colors flex items-center gap-2"
                        >
                            <FaTimes />
                            Clear all filters
                        </button>
                    )}
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
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                            className="text-center py-24"
                        >
                            <div className="glass p-12 rounded-2xl max-w-md mx-auto border border-white/5">
                                <div className="w-20 h-20 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
                                    <FaSearch className="w-8 h-8 text-gray-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">No Events Found</h3>
                                <p className="text-gray-400 mb-8">
                                    We couldn't find any events matching your current filters.
                                </p>
                                <button
                                    onClick={clearFilters}
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
