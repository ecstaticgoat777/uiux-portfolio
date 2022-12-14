import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import SneakerCentral from "./pages/projects/SneakerCentral";
import Yhangry from "./pages/projects/Yhangry";
import ChinaOne from "./pages/projects/ChinaOne";
import Personas from "./pages/projects/Personas";
import ScrollToTop from './pages/components/ScrollToTop';

export default function App() {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/sneaker-central' element={<SneakerCentral/>} />
                    <Route path='/yhangry' element={<Yhangry/>} />
                    <Route path='/china-one-redesign' element={<ChinaOne/>} />
                    <Route path='/personas-storyboarding' element={<Personas/>} />
                </Routes>
            </ScrollToTop>
        </Router>
    );
}