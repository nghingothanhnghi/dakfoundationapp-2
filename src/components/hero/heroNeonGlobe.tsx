import React, { useEffect, useRef, Suspense, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// For React projects, we need to handle static assets differently
// This path is relative to the public directory
const MODEL_PATH = '/models/gradient_globe.glb';

// Add animation to the loaded globe model
function AnimatedGlobe() {
    // Use a more generic type that can work with both THREE.Group and THREE.Mesh
    const meshRef = useRef<THREE.Object3D>(null);
    const [modelError, setModelError] = useState(false);
    
    // Try to load the model with error handling
    let gltf;
    try {
        gltf = useLoader(GLTFLoader, MODEL_PATH);
    } catch (error) {
        console.error('Error loading model:', error);
        if (!modelError) setModelError(true);
    }
    
    // Animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (meshRef.current) {
                meshRef.current.rotation.y += 0.005;
            }
        }, 16);
        
        return () => clearInterval(interval);
    }, []);
    
    // If model failed to load, show a fallback sphere
    if (modelError || !gltf) {
        return (
            <mesh ref={meshRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial 
                    color="#00ffff" 
                    emissive="#004444"
                    wireframe 
                    transparent
                    opacity={0.8}
                />
            </mesh>
        );
    }
    
    // Return the loaded model with animation
    return <primitive ref={meshRef} object={gltf.scene} scale={1} />;
}

// Fallback component to show while the model is loading
const ModelLoadingFallback = () => {
    return (
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial 
                color="#444444" 
                wireframe 
                transparent
                opacity={0.5}
            />
        </mesh>
    );
};

const HeroNeonGlobe: React.FC = () => {
    return (
        <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} />
            <pointLight position={[0, 0, 0]} intensity={1} color="#00ffff" />
            <Suspense fallback={<ModelLoadingFallback />}>
                <AnimatedGlobe />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
};

export default HeroNeonGlobe;
