import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'
import { Plane } from '@react-three/drei'

function Scene(props: ThreeElements['mesh']) { 
    const meshRef = useRef<THREE.Mesh>(null!)

    //useFrame((state, delta) => (meshRef.current.rotation.y += delta))

    return (
        <Plane
        {...props}
        args={[2, 2]}
        ref={meshRef}>
        </Plane>
        //<Plane args={[2, 2]}/>

    )
}

export default Scene