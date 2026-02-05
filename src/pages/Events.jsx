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

    useEffect(() => {
        const deptParam = searchParams.get('dept');
        if (deptParam && departments.find(d => d.id === deptParam)) {
            setSelectedDept(deptParam);
        }
    }, [searchParams]);

    let filteredEvents = getEventsByFilter(
        selectedDept === 'all' ? null : selectedDept,
        selectedCategory === 'all' ? null : selectedCategory
    );

    if (searchQuery) {
        filteredEvents = filteredEvents.filter(event =>
            event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
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

                {/* Filters & Search */}
                <div className="space-y-8 mb-12">
                    {/* Search */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input w-full pl-12"
                        />
                    </div>

                    {/* Department Filters */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Filter className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-semibold">Department</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedDept('all')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedDept === 'all'
                                    ? 'bg-primary text-dark shadow-lg shadow-primary/20'
                                    : 'glass text-gray-400 hover:text-white'
                                    }`}
                            >
                                All
                            </button>
                            {departments.map((dept) => (
                                <button
                                    key={dept.id}
                                    onClick={() => setSelectedDept(dept.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedDept === dept.id
                                        ? 'bg-primary text-dark shadow-lg shadow-primary/20'
                                        : 'glass text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {dept.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Filter className="w-5 h-5 text-secondary" />
                            <h3 className="text-white font-semibold">Category</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === 'all'
                                    ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                                    : 'glass text-gray-400 hover:text-white'
                                    }`}
                            >
                                All
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === cat.id
                                        ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                                        : 'glass text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {filteredEvents.length > 0 ? (
                        <motion.div
                            key="events-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredEvents.map((event, index) => (
                                <EventCard key={event.id} event={event} index={index} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="no-events"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-16"
                        >
                            <p className="text-gray-400 text-lg">No events found matching your criteria</p>
                            <button
                                onClick={() => { setSelectedDept('all'); setSelectedCategory('all'); setSearchQuery(''); }}
                                className="mt-4 text-primary hover:text-white transition-colors underline"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
};

export default Events;
