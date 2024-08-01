import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Sun.css';

const Sun = () => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Création du Soleil
        const sunGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const textureLoader = new THREE.TextureLoader();
        
        textureLoader.load(
            'https://www.solarsystemscope.com/textures/download/8k_sun.jpg',
            (texture) => {
                const sunMaterial = new THREE.MeshStandardMaterial({
                    map: texture,
                    emissive: 0xffff00,
                    emissiveIntensity: 0.5
                });
                const sun = new THREE.Mesh(sunGeometry, sunMaterial);
                scene.add(sun);

                // Ajout d'une lumière ambiante
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                scene.add(ambientLight);

                // Ajout d'une lumière directionnelle pour mieux voir la texture
                const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
                directionalLight.position.set(5, 3, 5);
                scene.add(directionalLight);

                camera.position.z = 1.5;

                const animate = () => {
                    sun.rotation.y += 0.005;
                    renderer.render(scene, camera);
                    animationRef.current = requestAnimationFrame(animate);
                };

                animate();
            },
            undefined,
            (error) => {
                console.error('Une erreur est survenue lors du chargement de la texture:', error);
            }
        );

        const resizeHandler = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', resizeHandler);
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div className="sun-container" ref={containerRef} />;
};

export default Sun;
