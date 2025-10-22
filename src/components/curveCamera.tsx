import * as THREE from 'three';
import { useRef, useState, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'

const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3( 0, 0, 3 ),
	new THREE.Vector3( -2, 0, 0 ),
	new THREE.Vector3( 0, 0, -3 ),
	new THREE.Vector3( 2, 0, 0 ),
	new THREE.Vector3( 0, 2, 1 )
], true)

const points = curve.getPoints(100)
const geometry = new THREE.BufferGeometry().setFromPoints(points)
const material = new THREE.LineBasicMaterial({color: 0xff0000})
const curveObject = new THREE.Line(geometry, material);

function CurveCamera(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        //delta is not elapsed time, it's how much time has passed between frames I think
        
        //something.getPointAt
        //meshRef.current.position.copy()

        const t = state.clock.getElapsedTime()

        meshRef.current.position.copy(curve.getPointAt(t / 6))
        //meshRef.current.position.x += 0.01
        //meshRef.current.position.copy() = curve.getPointAt(delta)
    
    })


    return (
        <>
            <primitive object={curveObject}/>
            <mesh
            // {...props}
            ref={meshRef}>
                <boxGeometry args={[1,1,1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
            </mesh>
        </>
    )
}

export default CurveCamera