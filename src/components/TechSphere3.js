import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FaReact, FaJs, FaPhp, FaBootstrap, FaGithub } from 'react-icons/fa';

const TechSphere3 = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(300, 300);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 2;

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="tech-sphere">
            <h2>Mes compétences</h2>
            <div ref={mountRef} style={{ width: '300px', height: '300px' }}></div>
            <div className="skills">
                <FaReact title="React" />
                <FaJs title="JavaScript" />
                <FaPhp title="PHP" />
                <FaBootstrap title="Bootstrap" />
                <FaGithub title="GitHub" />
            </div>
        </div>
    );
};

export default TechSphere3;
