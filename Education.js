import React from 'react';

function Education() {
    return (
        <section id="education" className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            <ul>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Acharya Institute of Technology (VTU)</h3>
                    <p>Master of Computer Application; GPA:8.23</p>
                    <p>Bangalore, India</p>
                    <p>Feb 2024 – Sep 2025</p>
                </li>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Govt Science College (UOM)</h3>
                    <p>Bachelor of Science (Computer Science); GPA:7.3</p>
                    <p>Hassan, India</p>
                    <p>Aug 2020 – Sep 2023</p>
                </li>
            </ul>
        </section>
    );
}

export default Education;