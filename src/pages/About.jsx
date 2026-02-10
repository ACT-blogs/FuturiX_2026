import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, Rocket, Globe, Heart } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'Fostering creative thinking and breakthrough solutions'
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'Building bridges between brilliant minds'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Pursuing the highest standards in technology'
        },
        {
            icon: Globe,
            title: 'Impact',
            description: 'Creating solutions that matter to the world'
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="heading-lg gradient-text mb-6">About FuturiX_2026</h1>
                    <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        FuturiX_2026 is a premier National Level Technical Symposium organized by
                        <span className="font-semibold gradient-text"> Arjun College of Technology</span>,
                        designed to bring together the brightest minds in technology, innovation, and entrepreneurship.
                    </p>
                </motion.div>

                {/* Vision & Mission Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card-hover p-10"
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                style={{ background: 'var(--accent-gradient)' }}>
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold gradient-text">Our Vision</h2>
                        </div>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            To create a transformative platform that empowers students and professionals to
                            showcase their technological prowess, foster innovation, and build a community of
                            future-ready tech leaders who will shape tomorrow's digital landscape.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card-hover p-10"
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                style={{ background: 'var(--accent-gradient)' }}>
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold gradient-text">Our Mission</h2>
                        </div>
                        <ul className="space-y-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                                    style={{ background: 'var(--accent-primary)' }} />
                                <span>Provide a competitive platform for students to demonstrate technical skills</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                                    style={{ background: 'var(--accent-primary)' }} />
                                <span>Bridge the gap between academic knowledge and industry requirements</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                                    style={{ background: 'var(--accent-primary)' }} />
                                <span>Encourage collaboration and networking among tech enthusiasts</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                                    style={{ background: 'var(--accent-primary)' }} />
                                <span>Inspire innovation through cutting-edge competitions and workshops</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="heading-md text-center gradient-text mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card-hover text-center p-8"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                                        style={{ background: 'var(--accent-gradient)' }}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        {value.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* What Makes Us Special */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-strong p-12 rounded-3xl"
                >
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <Rocket className="w-10 h-10" style={{ color: 'var(--accent-primary)' }} />
                        <h2 className="heading-md gradient-text">What Makes FuturiX Special?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'var(--accent-gradient)' }}>
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        National Recognition
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        Compete with the best minds from across India and gain recognition at a national level
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'var(--accent-gradient)' }}>
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Diverse Competitions
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        From coding challenges to creative tech events across multiple departments
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'var(--accent-gradient)' }}>
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Industry Exposure
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        Interact with industry experts and gain insights into real-world applications
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'var(--accent-gradient)' }}>
                                    <span className="text-white font-bold">4</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Exciting Prizes
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        Win attractive prizes, certificates, and opportunities for internships
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'var(--accent-gradient)' }}>
                                    <span className="text-white font-bold">5</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Networking Opportunities
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        Connect with like-minded peers, mentors, and potential collaborators
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'var(--accent-gradient)' }}>
                                    <span className="text-white font-bold">6</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Skill Development
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        Enhance your technical and soft skills through hands-on experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* About Arjun College Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 relative"
                >
                    {/* Decorative Background Blur */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-3xl rounded-full -z-10"></div>

                    <div className="glass-strong p-8 md:p-12 rounded-3xl border border-white/10 overflow-hidden relative group hover:border-purple-500/30 transition-all duration-500">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer z-0"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                            {/* Logo Column */}
                            <motion.div
                                className="lg:col-span-5 flex justify-center"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full glass p-6 flex items-center justify-center border-4 border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.3)] bg-black/40">
                                    <div className="absolute inset-0 rounded-full border border-white/20 animate-spin-slow-reverse" style={{ animationDuration: '20s' }}></div>
                                    <div className="absolute inset-2 rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDuration: '15s' }}></div>

                                    {/* Logo Image Placeholder - User can replace src with actual logo path */}
                                    <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white">
                                        <img
                                            src={`${import.meta.env.BASE_URL}logo_act.png`}
                                            alt="Arjun College of Technology"
                                            className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextElementSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="hidden absolute inset-0 flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-gray-900 to-gray-800">
                                            <span className="text-5xl mb-2">🏛️</span>
                                            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">ARJUN</span>
                                            <span className="text-[10px] text-gray-400 tracking-widest mt-1">COLLEGE OF TECHNOLOGY</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Column */}
                            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                                <div>
                                    <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold border border-purple-500/30 mb-4 inline-block">
                                        Organized By
                                    </span>
                                    <h2 className="heading-md gradient-text mb-2">Arjun College of Technology</h2>
                                    <p className="text-gray-400 text-sm font-medium tracking-wide">EXCELLENCE • INNOVATION • LEADERSHIP</p>
                                </div>

                                <p className="text-lg text-gray-300 leading-relaxed font-light">
                                    <span className="text-white font-semibold">Arjun College of Technology</span> stands as a beacon of excellence in technical education,
                                    committed to nurturing future leaders through rigorous academics and practical innovation.
                                    Located in a serene environment, we offer state-of-the-art infrastructure and a vibrant
                                    learning ecosystem.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto lg:mx-0 mb-2 text-blue-400">
                                            <Globe className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-white font-bold text-sm">Global Vision</h4>
                                        <p className="text-xs text-gray-400 mt-1">World-class standards</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto lg:mx-0 mb-2 text-purple-400">
                                            <Lightbulb className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-white font-bold text-sm">Innovation</h4>
                                        <p className="text-xs text-gray-400 mt-1">Cutting-edge labs</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto lg:mx-0 mb-2 text-pink-400">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-white font-bold text-sm">Community</h4>
                                        <p className="text-xs text-gray-400 mt-1">Holistic growth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
