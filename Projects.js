import React from 'react';

function Projects() {
    return (
        <section id="projects" className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <ul>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Airbnb-Inspired Website</h3>
                    <p>Aug 24- Nov 24</p>
                    <p>Developed a fully responsive website inspired by Airbnb using HTML, CSS, and JavaScript.</p>
                    <p>Implemented search functionality and dynamic content rendering using JavaScript.</p>
                    <p>Enhanced user experience through a mobile-friendly design.</p>
                </li>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Synonyms Game</h3>
                    <p>Designed and deployed a simple game to improve vocabulary skills using JavaScript.</p>
                    <p>Hosted on GitHub for public access.</p>
                </li>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Random Color Generator</h3>
                    <p>Developed a JavaScript-based application that generates a random color on every click.</p>
                    <p>Implemented dynamic DOM manipulation to display the generated color in real-time.</p>
                </li>
            </ul>
        </section>
    );
}

export default Projects;