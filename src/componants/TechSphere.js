// src/components/TechSphere.js
import React, { useEffect, useRef } from 'react';
import { FaReact, FaJs, FaPhp, FaBootstrap, FaGithub, FaFigma, FaLinux } from 'react-icons/fa';
import * as THREE from 'three';


const TechSphere = () => {
    const containerRef = useRef(null);
    const sphereRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const sphere = sphereRef.current;
        if (!container || !sphere) return;

        // Création de la scène Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(250, 250);
        container.appendChild(renderer.domElement);

        // Création de la Terre
        const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
        const earthTexture = new THREE.TextureLoader().load('https://live.staticflickr.com/2521/3884071286_0b6ddb55dd_h.jpg');
        const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earth);

        // Ajout d'une lumière ambiante
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        // Ajout d'une lumière directionnelle
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        camera.position.z = 5;

        // Animation de la Terre
        const animateEarth = () => {
            earth.rotation.y += 0.005;
        };

        // Animation des icônes
        const icons = sphere.children;
        const totalIcons = icons.length;
        const radius = 2.5; // Rayon de l'orbite des icônes

        let angle = 0;
        const angleStep = (2 * Math.PI) / totalIcons;

        const animate = () => {
            angle += 0.005;
            for (let i = 0; i < totalIcons; i++) {
                const icon = icons[i];
                const x = radius * Math.cos(angle + i * angleStep);
                const y = radius * Math.sin(angle + i * angleStep);
                const z = radius * Math.sin(angle + i * angleStep) * 0.3;
                icon.style.transform = `translate3d(${x * 50}px, ${y * 50}px, ${z * 50}px) scale(0.7)`;
            }
            animateEarth();
            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="tech-sphere-container" ref={containerRef}>
            <div className="tech-sphere" ref={sphereRef}>
                <FaReact className="icon" />
                <FaJs className="icon" />
                <FaPhp className="icon" />
                <FaBootstrap className="icon" />
                <FaGithub className="icon" />
                <FaFigma className="icon" />
                <FaLinux className="icon" />
            </div>
        </div>
    );
};

export default TechSphere;
