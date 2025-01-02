import React from 'react';

function Skills() {
    return (
        <section id="skills" className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Skills Summary</h2>
            <ul>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Languages:</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>SQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Frameworks:</h3>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Bootstrap</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Tools:</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Git</li>
                        <li>Postman</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Platforms:</h3>
                    <ul>
                        <li>Windows</li>
                        <li>GitHub</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <h3 className="text-lg font-bold">Soft Skills:</h3>
                    <ul>
                        <li>Problem-solving</li>
                        <li>Team collaboration</li>
                        <li>Communication</li>
                        <li>Time management</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default Skills;