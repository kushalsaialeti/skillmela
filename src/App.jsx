import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SystemOverlay } from './components/layout/SystemOverlay';
import { LandingPage } from './pages/LandingPage';
import { EventsPage } from './pages/EventsPage';
import { WorkshopDetail } from './pages/WorkshopDetail';
import './assets/animations.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cyber-dark text-white relative">
        {/* Background System Overlay */}
        <SystemOverlay />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/workshop/:id" element={<WorkshopDetail />} />
              <Route path="/archive" element={
                <div className="min-h-screen flex items-center justify-center pt-20">
                  <div className="text-center">
                    <h1 className="text-4xl font-black text-cyber-cyan mb-4">ARCHIVE</h1>
                    <p className="text-white/60">Coming Soon...</p>
                  </div>
                </div>
              } />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
