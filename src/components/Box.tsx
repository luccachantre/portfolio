import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    let a = 0.01
    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta
        meshRef.current.position.x = Math.sin(a)
        a += 0.01
    })


    return (
        <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1 : 0.5}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
        </mesh>

    )
}

export default Box



