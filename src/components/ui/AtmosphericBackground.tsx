import { Canvas, useFrame } from '@react-three/fiber'
import { Cloud, Stars, Sparkles } from '@react-three/drei'
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { useRef } from 'react'
import { Group } from 'three'

function FloatingFog() {
    const group = useRef<Group>(null)

    useFrame((state) => {
        if (group.current) {
            // Gentle sway to prevent clouds from orbiting out of view
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.15
        }
    })

    return (
        <group ref={group}>
            {/* Subtle, deep background fog */}
            <Cloud position={[0, 0, -20]} speed={0.1} opacity={0.15} segments={20} bounds={[15, 4, 4]} color="#1C2C33" />
            <Cloud position={[0, -5, -15]} speed={0.1} opacity={0.1} segments={15} bounds={[10, 4, 4]} color="#0B1921" />
        </group>
    )
}

export function AtmosphericBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-s1-ink">
            <Canvas camera={{ position: [0, 0, 1], fov: 75 }} gl={{ antialias: false }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#E7CC9F" />

                <FloatingFog />

                {/* Distant, subtle stars */}
                <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />

                {/* Gentle floating dust/particles instead of rain */}
                <Sparkles
                    count={100}
                    scale={10}
                    size={1}
                    speed={0.2}
                    opacity={0.3}
                    color="#E7CC9F"
                    noise={0.1}
                />

                <EffectComposer>
                    <Noise opacity={0.03} />
                    <Vignette eskil={false} offset={0.1} darkness={1.0} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}
