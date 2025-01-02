import React from 'react';

function Achievements() {
    return (
        <section id="achievements" className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Achievements</h2>
            <ul>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Bizotic Company |1-Week Training</h3>
                    <p>Learned core concepts of Object-Oriented Programming (OOPs) using Java.</p>
                    <p>Practiced Data Structures and Algorithms to enhance problem-solving skills.</p>
                    <p>Worked on MOOC-based interview preparation questions to strengthen coding proficiency.</p>
                </li>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Smart India Internal Hackathon:</h3>
                    <p>December-24</p>
                    <p>Secured 2nd place for developing a women’s safety project featuring a smart ring and voice recognition system.</p>
                    <p>Led a team to deliver innovative solutions and gained hands-on experience in project execution and teamwork.</p>
                </li>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Inter-Department Coding Fest:</h3>
                    <p>May-24</p>
                    <p>Secured 2nd place, demonstrating problem-solving skills and programming expertise in a competitive environment.</p>
                </li>
            </ul>
        </section>
    );
}

export default Achievements;