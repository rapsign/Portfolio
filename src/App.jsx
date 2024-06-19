import React, { useState } from 'react';
import { StickyNavbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <StickyNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <About />
            <Skill isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
            </>
    );
}

export default App;