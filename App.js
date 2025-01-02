import React from 'react';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Certificates from './Certificates';

function App() {
    return (
        <div className="container mx-auto p-4">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Portfolio</h1>
                <nav>
                    <ul className="flex justify-between items-center">
                        <li className="mr-4">
                            <a href="#education" className="text-lg font-bold">Education</a>
                        </li>
                        <li className="mr-4">
                            <a href="#skills" className="text-lg font-bold">Skills</a>
                        </li>
                        <li className="mr-4">
                            <a href="#projects" className="text-lg font-bold">Projects</a>
                        </li>
                        <li className="mr-4">
                            <a href="#achievements" className="text-lg font-bold">Achievements</a>
                        </li>
                        <li>
                            <a href="#certificates" className="text-lg font-bold">Certificates</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Education />
                <Skills />
                <Projects />
                <Achievements />
                <Certificates />
            </main>
        </div>
    );
}

export default App;