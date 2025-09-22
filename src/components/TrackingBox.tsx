import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'

function TrackingBox(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    //const [position, setPosition] = useState(new THREE.Vector3(1, 1, 1))

    //TO DO:
    //implement a click and drag feature for the cubes, shouldnt be too difficult


    useFrame((state, delta) => {

        if (hovered) {
            meshRef.current.rotation.x = -state.pointer.y * 1.6 
            meshRef.current.rotation.y = state.pointer.x * 2.9
        } else {
            //set it back to original state/orientation once the mouse is no longer hovering over the object
            //instead of it being left at a weird rotation when the mouse leaves it
            meshRef.current.rotation.x = 0
            meshRef.current.rotation.y = 0
        }

        if (active) {
            //if we're trying to truly make it like the balatro card
            //meshRef.current.translateY(delta * 1.5)
            
            //grab the current position, save it, 
            // then move it up until its a certain amount higher then starting position
            //I think that should work
            if (meshRef.current.position.y < 0.2) {
                meshRef.current.rotation.x = 0
                meshRef.current.rotation.y = 0

                meshRef.current.position.y += 0.07
            }
        } else {
            if (meshRef.current.position.y > 0) {
                meshRef.current.rotation.x = 0
                meshRef.current.rotation.y = 0

                meshRef.current.position.y -= 0.07
            }
        }
    })

    return (
        <mesh
        {...props}
        ref={meshRef}
        scale={1} //active ? 1.5 : 1
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={active ? '#34737b' : '#2a6645'} /> {/*hovered ? 'hotpink' : '#2f74c0'*/}
        </mesh>

    )
}

export default TrackingBox



