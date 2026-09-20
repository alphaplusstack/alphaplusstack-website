import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import ComingSoonPortal from './pages/ComingSoonPortal.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/client"
            element={
              <ComingSoonPortal
                title="Client Portal — Coming Soon"
                description="Track enquiries, project status, milestones and messages here once the client portal launches."
              />
            }
          />
          <Route
            path="/admin"
            element={
              <ComingSoonPortal
                title="Admin Access"
                description="The admin dashboard is being built in the next development phase."
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
