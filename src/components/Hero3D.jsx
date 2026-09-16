import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Layers, Eye, Zap, Flame } from 'lucide-react';

export default function Hero3D() {
  const mountRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Parent group for 360 rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Texture Loader for 3D Photo Hologram
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/profile.jpg', (profileTexture) => {
      profileTexture.minFilter = THREE.LinearFilter;

      // 3D Photo Plane Geometry
      const cardGeo = new THREE.PlaneGeometry(2.4, 2.4);
      const cardMat = new THREE.MeshStandardMaterial({
        map: profileTexture,
        side: THREE.DoubleSide,
        roughness: 0.2,
        metalness: 0.5,
      });
      const cardMesh = new THREE.Mesh(cardGeo, cardMat);
      cardMesh.position.z = 0.05;
      mainGroup.add(cardMesh);

      // Glass Frame Frame Box around Photo
      const frameGeo = new THREE.BoxGeometry(2.6, 2.6, 0.1);
      const frameMat = new THREE.MeshPhysicalMaterial({
        color: 0x6366f1,
        emissive: 0x1e1b4b,
        roughness: 0.1,
        metalness: 0.9,
        clearcoat: 1.0,
        transparent: true,
        opacity: 0.7
      });
      const frameMesh = new THREE.Mesh(frameGeo, frameMat);
      mainGroup.add(frameMesh);
    });

    // Core Geometry 1: Outer Glass Icosahedron Wireframe/Solid Hybrid
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.2,
      roughness: 0.1,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Inner Glowing Octahedron
    const innerGeo = new THREE.OctahedronGeometry(1.4, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // Orbital Ring 1: Tech Orbit (Cyan)
    const ring1Geo = new THREE.TorusGeometry(3.2, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // Orbital Ring 2: Design Orbit (Violet)
    const ring2Geo = new THREE.TorusGeometry(3.7, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // Particle Swarm
    const particleCount = 250;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 14;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.07,
      transparent: true,
      opacity: 0.7
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6366f1, 4, 25);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 4, 25);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    // Mouse Controls
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;
    let previousMouseX = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseX = x * 0.5;
      mouseY = y * 0.5;

      if (e.buttons === 1) { // Left drag
        const deltaX = e.clientX - previousMouseX;
        mainGroup.rotation.y += deltaX * 0.01;
        previousMouseX = e.clientX;
      }
    };

    const handleMouseDown = (e) => {
      setIsDragging(true);
      previousMouseX = e.clientX;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous 360 rotation
      if (autoRotate && !isDragging) {
        mainGroup.rotation.y += 0.008;
      }
      
      coreMesh.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;
      coreMesh.rotation.z = Math.cos(elapsedTime * 0.3) * 0.2;

      innerMesh.rotation.y = -elapsedTime * 0.8;
      innerMesh.rotation.x = elapsedTime * 0.4;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;

      particles.rotation.y = elapsedTime * 0.03;

      // Parallax smooth interpolation
      targetRotationY = mouseX * 0.5;
      targetRotationX = mouseY * 0.5;
      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05;
      scene.rotation.x += (-targetRotationX - scene.rotation.x) * 0.05;

      // Update state angle display (degrees)
      const deg = Math.round((mainGroup.rotation.y % (Math.PI * 2)) * (180 / Math.PI));
      setRotationAngle(deg >= 0 ? deg : 360 + deg);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate]);

  return (
    <div className="relative w-full h-[520px] md:h-[620px] rounded-2xl overflow-hidden glass-card p-1 border-2 border-indigo-500/30">
      {/* Top 3D Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 text-xs font-mono text-cyan-300">
          <RotateCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>360° ROTATION: {rotationAngle}°</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all border ${
              autoRotate 
                ? 'bg-indigo-600/30 border-indigo-500/50 text-indigo-200' 
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            {autoRotate ? 'AUTO ROTATE ON' : 'PAUSED'}
          </button>
        </div>
      </div>

      {/* 3D Canvas Mount */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing" 
        title="Click and drag to rotate 360°"
      />

      {/* Bottom Floating Legend overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-3 bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 text-xs">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-semibold">Interactive 3D Hologram Video</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-mono">Yashvant 3D Viewport</span>
        </div>

        <div className="bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-800 text-[11px] text-cyan-300 flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-cyan-400" />
          <span>Drag to rotate 360° video mesh</span>
        </div>
      </div>
    </div>
  );
}
