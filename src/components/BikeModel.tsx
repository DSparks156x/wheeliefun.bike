import { useRef, useEffect } from 'react';
import { useGLTF, PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

interface BikeModelProps {
    wheelieProgress: MotionValue<number>;
}

export function BikeModel({ wheelieProgress }: BikeModelProps) {
    const { scene } = useGLTF('/bike.glb');
    const bikeRef = useRef<THREE.Group>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    // Initial setup for materials/shadows if needed
    useEffect(() => {
        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                // Enhance materials for "sick" look
                const mesh = child as THREE.Mesh;
                if (mesh.material) {
                    (mesh.material as THREE.MeshStandardMaterial).envMapIntensity = 1.5;
                }
            }
        });
    }, [scene]);

    useFrame((state, delta) => {
        if (!bikeRef.current || !cameraRef.current) return;

        const progress = wheelieProgress.get();

        // Current wheelie state target
        const targetRotationX = THREE.MathUtils.lerp(0, -Math.PI / 6, progress);
        const targetPosY = THREE.MathUtils.lerp(0, 0.4, progress);

        // Apply smooth rotation for the wheelie
        let bobbingRotation = 0;
        let bobbingPos = 0;

        if (progress > 0.1) {
            // "Bobbing" math - subtle sine waves for life
            const time = state.clock.elapsedTime;
            bobbingRotation = Math.sin(time * 8) * 0.04 * progress; // Fast subtle tremor
            bobbingPos = Math.sin(time * 12) * 0.02 * progress;     // High frequency jitters
        }

        bikeRef.current.rotation.x = THREE.MathUtils.lerp(
            bikeRef.current.rotation.x,
            targetRotationX + bobbingRotation,
            delta * 5
        );
        bikeRef.current.position.y = THREE.MathUtils.lerp(
            bikeRef.current.position.y,
            targetPosY + bobbingPos,
            delta * 5
        );

        // Dynamic Camera
        const targetCamPos = new THREE.Vector3().lerpVectors(
            new THREE.Vector3(7, 1.5, 5),
            new THREE.Vector3(8, 2, 4),
            progress
        );

        state.camera.position.lerp(targetCamPos, delta * 3);
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[7, 1.5, 5]} fov={33} ref={cameraRef} />

            {/* Soft Flat Lighting from all sides */}
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 5, 10]} intensity={40} />
            <pointLight position={[-10, 5, 10]} intensity={40} />
            <pointLight position={[0, 10, 5]} intensity={30} />
            <pointLight position={[0, -5, 5]} intensity={20} />

            <Float
                speed={1}
                rotationIntensity={0.05 + wheelieProgress.get() * 0.15}
                floatIntensity={0.1 + wheelieProgress.get() * 0.4}
            >
                {/* Visual Orientation Group - meet in the middle at X:0.35 */}
                <group rotation={[0, (3 * Math.PI) / 4, 0]} position={[-2.5, -1, 0.0]}>
                    {/* Animation Pivot Group */}
                    <group ref={bikeRef} position={[0, 0.0, 0]}>
                        <primitive
                            object={scene}
                            scale={3.5}
                            position={[1, 0, 0]} // Shifted to put rear wheel at 0,0,0 pivot
                        />
                    </group>
                </group>
            </Float>

            <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={15} blur={3} far={4} />
            <Environment preset="warehouse" />
        </>
    );
}

useGLTF.preload('/bike.glb');
