import * as THREE from 'three';
import { useRef, useState, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'

const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3( 0, 0, 2 ),
	new THREE.Vector3( -5, 0, 0 ),
	new THREE.Vector3( 0, 0, -5 ),
	new THREE.Vector3( 5, 0, 0 ),
	new THREE.Vector3( 0, 2, 0.5 )
], true)

const points = curve.getPoints(100)
const geometry = new THREE.BufferGeometry().setFromPoints(points)
const material = new THREE.LineBasicMaterial({color: 0xff0000})
const curveObject = new THREE.Line(geometry, material);

function CurveCamera(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    const { camera } = useThree()

    useFrame((state, delta) => {
        //delta is not elapsed time, it's how much time has passed between frames I think
        
        //something.getPointAt
        //meshRef.current.position.copy()

        const t = (state.clock.getElapsedTime() / 1 % 6)  / 6 //divide by number of points + 1 for some reason?
        //idk the youtube video said its standard, and it works so yeah idk

        meshRef.current.position.copy(curve.getPointAt(t))


        // camera.position.copy(curve.getPointAt(t))
        // camera.up.set(0, 1, 0)
        // camera.lookAt(0, 0, 0)
    
    })


    return (
        <>
            <primitive object={curveObject}/>
            <mesh
            // {...props}
            ref={meshRef}
            scale = {0.5}>
                <boxGeometry args={[1,1,1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
            </mesh>
        </>
    )
}

export default CurveCamera