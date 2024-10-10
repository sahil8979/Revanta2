import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Title from './Components/Title/Title';
import Readmore from './Components/Readmore/Readmore';
import Member from './Components/Member/Member';
import ScrollToTop from './ScrollToTop';
import Gallery from './Components/Gallery/Gallery';
import ContactUs from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loadingpage/Loading';

const App = () => {
    const [fade, setFade] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setFade(true);
        }, 10500); // 3 seconds loading time

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <Router>
            <ScrollToTop />
            <div className={`app-container ${fade ? 'fade-in' : ''}`}>
                <Navbar />
                <div className={`content-wrapper ${fade ? 'fade-in' : ''}`}>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <Title subTitle="We Are" title="Team Revanta" />
                                <About />
                            </>
                        } />
                        <Route path="/home" element={<Navigate to="/" />} />
                        <Route path="/about" element={<Readmore />} />
                        <Route path="/readmore" element={<Readmore />} />
                        <Route path="/member" element={<Member />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<ContactUs />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
