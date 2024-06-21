import React, { useState, useEffect } from 'react';
import { StickyNavbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Education from './pages/Education'
import Portfolio from './pages/Portfolio';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <StickyNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div className="container mx-auto">
                <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <About />
                <Skill isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <Education isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <Portfolio isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </>
    );
}

export default App;
