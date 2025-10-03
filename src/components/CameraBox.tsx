import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'

function CameraBox(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [startTime, setStartTime] = useState(performance.now())

    const { camera } = useThree()

    useFrame((state, delta) => {
        //const elapsed = performance.now() * 0.001;
        if (active) {
            const elapsed = (performance.now() - startTime) * 0.001;

            if (elapsed < 3) { //my solution to animate over a certain period of time, not sure about position though
                const speed = 1

                camera.position.x = Math.sin(elapsed * speed) * 1 
                camera.position.z = Math.cos(elapsed * speed) * 5
                if (elapsed < 1.50) {
                    camera.position.y = -Math.sin(elapsed * speed)
                } else {
                    camera.position.y = -Math.sin(elapsed * speed)
                }
                //the * 1 and * 5 constants determine how far or close to the origin the camera will be
                camera.lookAt(0, 0, 0)
            } 
            
        } else {
            // const elapsed = (performance.now() - startTime) * 0.001;

            camera.position.x = 0
            camera.position.y = 0
            camera.position.z = 5
            camera.lookAt(0, 0, 0)
            
        }
    })

    return (
        <mesh
        {...props}
        ref={meshRef}
        scale={1}
        onClick={() => {
            setActive(!active)
            setStartTime(performance.now())
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={active ? '#ab53e6' : '#e39144'} />
        </mesh>

    )
}

export default CameraBox



