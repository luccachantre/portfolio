import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'

function CameraBox(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    const { camera } = useThree()

    useFrame((state, delta) => {
        if (active) {
            //if we're trying to truly make it like the balatro card
            //meshRef.current.translateY(delta * 1.5)
            
            //grab the current position, save it, 
            // then move it up until its a certain amount higher then starting position
            //I think that should work
            if (camera.position.x < 2) {
                camera.position.x += 0.001
            }
        } else {
            if (camera.position.x > 0) {
                camera.position.x -= 0.001
            }
        }
    })

    return (
        <mesh
        {...props}
        ref={meshRef}
        scale={1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={active ? '#ab53e6' : '#e39144'} />
        </mesh>

    )
}

export default CameraBox



