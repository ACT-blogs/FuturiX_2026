import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Departments from './pages/Departments';
import Contact from './pages/Contact';
import Register from './pages/Register';

// ScrollToTop component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
}

function App() {
    return (
        <ThemeProvider>
            <Router basename={import.meta.env.BASE_URL}>
                <ScrollToTop />
                <div className="min-h-screen animated-bg scrollbar-custom" style={{ backgroundColor: 'var(--bg-primary)' }}>
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/events" element={<Events />} />
                            <Route path="/event/:eventId" element={<EventDetails />} />
                            <Route path="/departments" element={<Departments />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
