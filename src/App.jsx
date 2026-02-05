import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Departments from './pages/Departments';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Register from './pages/Register';

// ScrollToTop component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-dark text-white font-sans selection:bg-primary/30">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/event/:eventId" element={<EventDetails />} />
                        <Route path="/departments" element={<Departments />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
