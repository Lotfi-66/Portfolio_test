import React from 'react';
import StarryBackground from './StarryBackground';
// import TechSphere3 from './componants/TechSphere3';
import TechSphere from './componants/TechSphere'; // Ajoutez cette ligne
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';



function App() {
    return (
        <div className="App">
            <StarryBackground />
            <header className="App-header">
                <h1>Lotfi Djeghbala</h1>
                <p>Je m'appelle Lotfi Djeghbala, j'ai 21 ans et je suis un développeur <br></br> 
                web fullstack passionné. <br></br>
                    Je maîtrise à la fois le front-end et le back-end, ce qui me permet <br />
                    de créer des applications web complètes et performantes.</p>
            </header>
            <main className="main-content">
                <div className="content-wrapper">
                    <div className="left-column">
                        <section className="skills-section">
                            
                        </section>
                <TechSphere />
                        <section className="projects-section">
                            <h2>Mes projets</h2>
                            <ul>
                                <li>Projet 1 - Application React avec backend PHP</li>
                                <li>Projet 2 - Site e-commerce en JavaScript et Bootstrap</li>
                                <li>Projet 3 - API RESTful en PHP orienté objet</li>
                            </ul>
                        </section>
                    </div>
                    <div className="right-column">
                        <section className="contact-section">
                            <h2>Contact</h2>
                            <form className="contact-form">
                                <div>
                                    <label htmlFor="name">Nom:</label>
                                    <input type="text" id="name" name="name" />
                                </div>
                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                                <div>
                                    <label htmlFor="message">Message:</label>
                                    <textarea id="message" name="message"></textarea>
                                </div>
                                <button type="submit">Envoyer</button>
                            </form>
                            <div className="social-links">
                                <a href="https://linkedin.com/in/lotfi-djeghbala-63160a266" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin /> LinkedIn
                                </a>
                                <a href="https://github.com/Lotfi-66" target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;