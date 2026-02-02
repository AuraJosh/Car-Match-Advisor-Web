import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

function HomePage() {
    return (
        <Layout>
            <Hero />
            <Process />
            <About />
            <Pricing />
            <Testimonials />
            <Contact />
        </Layout>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default App
