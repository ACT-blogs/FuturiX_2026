import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Trophy, ArrowLeft, Code, FileText, Presentation, Cpu, Users, Sparkles, Zap } from 'lucide-react';
import EventCard from '../components/EventCard';
import { departments, categories, getEventsByFilter } from '../data/eventsData';

const Events = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [selectedDept, setSelectedDept] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [showCategorySelection, setShowCategorySelection] = useState(true);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    useEffect(() => {
        const deptParam = searchParams.get('dept');
        const catParam = searchParams.get('category');

        if (deptParam && departments.find(d => d.id === deptParam)) {
            setSelectedDept(deptParam);
            // Skip category selection when department is selected
            setShowCategorySelection(false);
        }

        if (catParam && categories.find(c => c.id === catParam)) {
            setSelectedCategory(catParam);
            setShowCategorySelection(false);
        }
    }, [searchParams]);

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
        setShowCategorySelection(false);
        // Preserve department filter when selecting category
        const params = new URLSearchParams();
        params.set('category', categoryId);
        if (selectedDept !== 'all') {
            params.set('dept', selectedDept);
        }
        navigate(`/events?${params.toString()}`);
    };

    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setShowCategorySelection(true);
        setSearchQuery('');
        // Keep department filter when going back to categories
        if (selectedDept !== 'all') {
            navigate(`/events?dept=${selectedDept}`);
        } else {
            navigate('/events');
        }
    };

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

    const activeFiltersCount = (selectedDept !== 'all' ? 1 : 0) + (selectedCategory ? 1 : 0);

    // Category configuration with gradients and icons
    const categoryConfig = {
        'hackathon': {
            icon: Code,
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#667eea',
            pattern: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.3) 0%, transparent 50%)'
        },
        'paper-presentation': {
            icon: FileText,
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: '#f093fb',
            pattern: 'radial-gradient(circle at 30% 30%, rgba(240, 147, 251, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(245, 87, 108, 0.3) 0%, transparent 50%)'
        },
        'project-exhibit': {
            icon: Presentation,
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: '#4facfe',
            pattern: 'radial-gradient(circle at 40% 40%, rgba(79, 172, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(0, 242, 254, 0.3) 0%, transparent 50%)'
        },
        'technical': {
            icon: Cpu,
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            color: '#43e97b',
            pattern: 'radial-gradient(circle at 25% 25%, rgba(67, 233, 123, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(56, 249, 215, 0.3) 0%, transparent 50%)'
        },
        'non-technical': {
            icon: Users,
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            color: '#fa709a',
            pattern: 'radial-gradient(circle at 35% 35%, rgba(250, 112, 154, 0.3) 0%, transparent 50%), radial-gradient(circle at 65% 65%, rgba(254, 225, 64, 0.3) 0%, transparent 50%)'
        },
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <AnimatePresence mode="wait">
                    {showCategorySelection ? (
                        /* Category Selection View */
                        <motion.div
                            key="category-selection"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Hero Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-16"
                            >
                                <div className="inline-flex items-center space-x-2 badge-primary mb-6">
                                    <Sparkles className="w-4 h-4" />
                                    <span>Multiple Categories</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                                    Choose Your Arena
                                </h2>
                                <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                                    Select a category to explore events tailored to your interests and skills
                                </p>
                            </motion.div>

                            {/* Category Cards Grid - Stylish 3-2 Layout for 5 Categories */}
                            <div className="max-w-7xl mx-auto">
                                {/* First Row - 3 Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                                    {categories.slice(0, 3).map((category, index) => {
                                        const config = categoryConfig[category.id];
                                        const Icon = config.icon;
                                        const isHovered = hoveredCategory === category.id;

                                        return (
                                            <motion.div
                                                key={category.id}
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: index * 0.15,
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 15
                                                }}
                                                whileHover={{
                                                    scale: 1.08,
                                                    y: -15,
                                                    transition: { duration: 0.3 }
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleCategorySelect(category.id)}
                                                onHoverStart={() => setHoveredCategory(category.id)}
                                                onHoverEnd={() => setHoveredCategory(null)}
                                                className="relative cursor-pointer group"
                                            >
                                                {/* Card Container */}
                                                <div
                                                    className="relative overflow-hidden rounded-3xl p-10 h-full min-h-[320px] flex flex-col items-center justify-center"
                                                    style={{
                                                        background: isHovered ? 'var(--glass-bg)' : 'rgba(255, 255, 255, 0.03)',
                                                        backdropFilter: 'blur(20px)',
                                                        border: isHovered ? `2px solid ${config.color}40` : '2px solid rgba(255, 255, 255, 0.08)',
                                                        boxShadow: isHovered
                                                            ? `0 30px 80px ${config.color}30, 0 0 0 1px ${config.color}20`
                                                            : '0 10px 40px rgba(0, 0, 0, 0.2)',
                                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    }}
                                                >
                                                    {/* Animated Background Pattern */}
                                                    <motion.div
                                                        className="absolute inset-0"
                                                        style={{ backgroundImage: config.pattern }}
                                                        animate={{
                                                            scale: isHovered ? 1.2 : 1,
                                                            opacity: isHovered ? 1 : 0.3,
                                                        }}
                                                        transition={{ duration: 0.6 }}
                                                    />

                                                    {/* Icon */}
                                                    <motion.div
                                                        className="relative z-10 mb-6 w-24 h-24 rounded-2xl flex items-center justify-center"
                                                        style={{
                                                            background: isHovered ? config.gradient : 'rgba(255, 255, 255, 0.05)',
                                                        }}
                                                        animate={{
                                                            rotate: isHovered ? 360 : 0,
                                                            scale: isHovered ? 1.1 : 1,
                                                        }}
                                                        transition={{ duration: 0.6 }}
                                                    >
                                                        <Icon
                                                            className="w-12 h-12"
                                                            style={{ color: isHovered ? 'white' : config.color }}
                                                        />
                                                    </motion.div>

                                                    {/* Category Name */}
                                                    <motion.h3
                                                        className="relative z-10 text-2xl font-bold mb-4 text-center"
                                                        style={{
                                                            color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                                                            transition: 'all 0.3s ease',
                                                        }}
                                                        animate={{ scale: isHovered ? 1.05 : 1 }}
                                                    >
                                                        {category.name}
                                                    </motion.h3>

                                                    {/* Event Count Badge */}
                                                    <motion.div
                                                        className="flex items-center space-x-2 px-5 py-2.5 rounded-full"
                                                        style={{
                                                            background: isHovered ? config.gradient : 'rgba(255, 255, 255, 0.08)',
                                                            border: isHovered ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                                                        }}
                                                        animate={{ scale: isHovered ? 1.15 : 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <Zap
                                                            className="w-5 h-5"
                                                            style={{ color: isHovered ? 'white' : config.color }}
                                                        />
                                                        <span
                                                            className="text-sm font-bold"
                                                            style={{ color: isHovered ? 'white' : config.color }}
                                                        >
                                                            {getEventsByFilter(null, category.id).length} Events
                                                        </span>
                                                    </motion.div>

                                                    {/* Corner Accent */}
                                                    <motion.div
                                                        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full"
                                                        style={{
                                                            background: config.gradient,
                                                            opacity: 0,
                                                        }}
                                                        animate={{ opacity: isHovered ? 0.15 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>

                                                {/* 3D Shadow Effect */}
                                                <motion.div
                                                    className="absolute inset-0 rounded-3xl -z-10"
                                                    style={{
                                                        background: config.gradient,
                                                        filter: 'blur(40px)',
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        opacity: isHovered ? 0.3 : 0,
                                                        y: isHovered ? 20 : 0,
                                                    }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Second Row - 2 Centered Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                                    {categories.slice(3, 5).map((category, index) => {
                                        const config = categoryConfig[category.id];
                                        const Icon = config.icon;
                                        const isHovered = hoveredCategory === category.id;

                                        return (
                                            <motion.div
                                                key={category.id}
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: (index + 3) * 0.15,
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 15
                                                }}
                                                whileHover={{
                                                    scale: 1.08,
                                                    y: -15,
                                                    transition: { duration: 0.3 }
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleCategorySelect(category.id)}
                                                onHoverStart={() => setHoveredCategory(category.id)}
                                                onHoverEnd={() => setHoveredCategory(null)}
                                                className="relative cursor-pointer group"
                                            >
                                                {/* Card Container */}
                                                <div
                                                    className="relative overflow-hidden rounded-3xl p-10 h-full min-h-[320px] flex flex-col items-center justify-center"
                                                    style={{
                                                        background: isHovered ? 'var(--glass-bg)' : 'rgba(255, 255, 255, 0.03)',
                                                        backdropFilter: 'blur(20px)',
                                                        border: isHovered ? `2px solid ${config.color}40` : '2px solid rgba(255, 255, 255, 0.08)',
                                                        boxShadow: isHovered
                                                            ? `0 30px 80px ${config.color}30, 0 0 0 1px ${config.color}20`
                                                            : '0 10px 40px rgba(0, 0, 0, 0.2)',
                                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    }}
                                                >
                                                    {/* Animated Background Pattern */}
                                                    <motion.div
                                                        className="absolute inset-0"
                                                        style={{ backgroundImage: config.pattern }}
                                                        animate={{
                                                            scale: isHovered ? 1.2 : 1,
                                                            opacity: isHovered ? 1 : 0.3,
                                                        }}
                                                        transition={{ duration: 0.6 }}
                                                    />

                                                    {/* Icon */}
                                                    <motion.div
                                                        className="relative z-10 mb-6 w-24 h-24 rounded-2xl flex items-center justify-center"
                                                        style={{
                                                            background: isHovered ? config.gradient : 'rgba(255, 255, 255, 0.05)',
                                                        }}
                                                        animate={{
                                                            rotate: isHovered ? 360 : 0,
                                                            scale: isHovered ? 1.1 : 1,
                                                        }}
                                                        transition={{ duration: 0.6 }}
                                                    >
                                                        <Icon
                                                            className="w-12 h-12"
                                                            style={{ color: isHovered ? 'white' : config.color }}
                                                        />
                                                    </motion.div>

                                                    {/* Category Name */}
                                                    <motion.h3
                                                        className="relative z-10 text-2xl font-bold mb-4 text-center"
                                                        style={{
                                                            color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                                                            transition: 'all 0.3s ease',
                                                        }}
                                                        animate={{ scale: isHovered ? 1.05 : 1 }}
                                                    >
                                                        {category.name}
                                                    </motion.h3>

                                                    {/* Event Count Badge */}
                                                    <motion.div
                                                        className="flex items-center space-x-2 px-5 py-2.5 rounded-full"
                                                        style={{
                                                            background: isHovered ? config.gradient : 'rgba(255, 255, 255, 0.08)',
                                                            border: isHovered ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                                                        }}
                                                        animate={{ scale: isHovered ? 1.15 : 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <Zap
                                                            className="w-5 h-5"
                                                            style={{ color: isHovered ? 'white' : config.color }}
                                                        />
                                                        <span
                                                            className="text-sm font-bold"
                                                            style={{ color: isHovered ? 'white' : config.color }}
                                                        >
                                                            {getEventsByFilter(null, category.id).length} Events
                                                        </span>
                                                    </motion.div>

                                                    {/* Corner Accent */}
                                                    <motion.div
                                                        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full"
                                                        style={{
                                                            background: config.gradient,
                                                            opacity: 0,
                                                        }}
                                                        animate={{ opacity: isHovered ? 0.15 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>

                                                {/* 3D Shadow Effect */}
                                                <motion.div
                                                    className="absolute inset-0 rounded-3xl -z-10"
                                                    style={{
                                                        background: config.gradient,
                                                        filter: 'blur(40px)',
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        opacity: isHovered ? 0.3 : 0,
                                                        y: isHovered ? 20 : 0,
                                                    }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        /* Events List View */
                        <motion.div
                            key="events-list"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Back Button */}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                onClick={handleBackToCategories}
                                className="flex items-center space-x-2 mb-8 glass-strong px-6 py-3 rounded-xl hover-lift"
                            >
                                <ArrowLeft className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                                <span style={{ color: 'var(--text-primary)' }}>Back to Categories</span>
                            </motion.button>

                            {/* Current Category/Department Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center mb-8"
                            >
                                <h2 className="text-3xl font-bold gradient-text mb-2">
                                    {selectedCategory
                                        ? `${categories.find(c => c.id === selectedCategory)?.name} Events`
                                        : selectedDept !== 'all'
                                            ? `${departments.find(d => d.id === selectedDept)?.name} Events`
                                            : 'All Events'
                                    }
                                </h2>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'} Available
                                </p>
                            </motion.div>

                            {/* Search Bar with Filter Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-3xl mx-auto mb-8"
                            >
                                <div className="flex items-center gap-3">
                                    {/* Search Input */}
                                    <div className="relative flex-1">
                                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5"
                                            style={{ color: 'var(--text-tertiary)' }} />
                                        <input
                                            type="text"
                                            placeholder="Search events by name or description..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="input w-full pl-14 pr-6"
                                        />
                                    </div>

                                    {/* Filter Icon Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setFilterOpen(!filterOpen)}
                                        className="glass-strong rounded-2xl p-4 hover-lift relative"
                                        style={{ minWidth: '60px', height: '60px' }}
                                    >
                                        <Filter className="w-6 h-6 mx-auto" style={{ color: 'var(--accent-primary)' }} />
                                        {activeFiltersCount > 0 && (
                                            <span
                                                className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                                                style={{
                                                    background: 'var(--accent-gradient)',
                                                    color: 'white'
                                                }}
                                            >
                                                {activeFiltersCount}
                                            </span>
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Collapsible Filter Panel */}
                            <AnimatePresence>
                                {filterOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden mb-12"
                                    >
                                        <div className="max-w-4xl mx-auto glass-strong rounded-2xl p-8">
                                            {/* Department Filter */}
                                            <div className="mb-8">
                                                <label className="text-sm font-medium mb-3 block" style={{ color: 'var(--text-secondary)' }}>
                                                    Filter by Department
                                                </label>
                                                <div className="flex flex-wrap gap-3">
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => setSelectedDept('all')}
                                                        className={`px-5 py-2.5 rounded-xl font-medium transition-all ${selectedDept === 'all' ? 'btn-primary' : 'glass hover-lift'
                                                            }`}
                                                        style={selectedDept !== 'all' ? { color: 'var(--text-secondary)' } : {}}
                                                    >
                                                        All Departments
                                                    </motion.button>
                                                    {departments.map((dept) => (
                                                        <motion.button
                                                            key={dept.id}
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => setSelectedDept(dept.id)}
                                                            className={`px-5 py-2.5 rounded-xl font-medium transition-all ${selectedDept === dept.id ? 'btn-primary' : 'glass hover-lift'
                                                                }`}
                                                            style={selectedDept !== dept.id ? { color: 'var(--text-secondary)' } : {}}
                                                        >
                                                            {dept.name}
                                                        </motion.button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Category Filter */}
                                            <div>
                                                <label className="text-sm font-medium mb-3 block" style={{ color: 'var(--text-secondary)' }}>
                                                    Filter by Category
                                                </label>
                                                <div className="flex flex-wrap gap-3">
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => setSelectedCategory(null)}
                                                        className={`px-5 py-2.5 rounded-xl font-medium transition-all ${!selectedCategory ? 'btn-primary' : 'glass hover-lift'
                                                            }`}
                                                        style={selectedCategory ? { color: 'var(--text-secondary)' } : {}}
                                                    >
                                                        All Categories
                                                    </motion.button>
                                                    {categories.map((cat) => {
                                                        const config = categoryConfig[cat.id];
                                                        return (
                                                            <motion.button
                                                                key={cat.id}
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                onClick={() => setSelectedCategory(cat.id)}
                                                                className={`px-5 py-2.5 rounded-xl font-medium transition-all glass hover-lift`}
                                                                style={selectedCategory === cat.id ? {
                                                                    background: config.gradient,
                                                                    color: 'white',
                                                                    boxShadow: `0 4px 20px ${config.color}40`
                                                                } : { color: 'var(--text-secondary)' }}
                                                            >
                                                                {cat.name}
                                                            </motion.button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Events Grid */}
                            <AnimatePresence mode="wait">
                                {filteredEvents.length > 0 ? (
                                    <motion.div
                                        key="events-grid"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                                        <Trophy className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: 'var(--text-tertiary)' }} />
                                        <p className="text-xl mb-2" style={{ color: 'var(--text-secondary)' }}>
                                            No events found
                                        </p>
                                        <p style={{ color: 'var(--text-tertiary)' }}>
                                            Try adjusting your filters or search query
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
};

export default Events;
