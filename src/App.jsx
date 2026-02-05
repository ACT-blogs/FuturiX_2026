import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Events = lazy(() => import('./pages/Events'));
const EventDetails = lazy(() => import('./pages/EventDetails'));
const Departments = lazy(() => import('./pages/Departments'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Register = lazy(() => import('./pages/Register'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router basename="/FuturiX_2026">
      <div className="min-h-screen bg-dark text-white">
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:eventId" element={<EventDetails />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
