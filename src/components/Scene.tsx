import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'
import { Plane } from '@react-three/drei'

function Scene(props: ThreeElements['mesh']) { 
    const meshRef = useRef<THREE.Mesh>(null!)

    

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.lookAt(0, 10, 0)
        }
    }, [])

    // useFrame((state, delta) => (
    //     meshRef.current.lookAt(0, 1, 0) //the only way I could think of to orient the plane to be horizontal
    // ))

    return (
        <Plane
        {...props}
        args={[10, 10]}
        position={[0, -2, 0]}
        // color={'blue'} //not working/not the right way to do it, fix next time (and do texture loading and mapping)
        ref={meshRef}>
        </Plane>

    )
}

export default Scene