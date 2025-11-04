import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect } from 'react'

function HitBox() {
    const meshRef = useRef<THREE.Mesh>(null!)

    const { camera } = useThree()

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.position.copy(camera.position)
        }
    }, [])


    useFrame((state,delta) => {
        if (wIsDown) {
            camera.position.z -= 0.02
            meshRef.current.position.copy(camera.position)
        }

        if (sIsDown) {
            camera.position.z += 0.02
            meshRef.current.position.copy(camera.position)
        }

        if (aIsDown) {
            camera.position.x -= 0.02
            meshRef.current.position.copy(camera.position)
        }

        if (dIsDown) {
            camera.position.x += 0.02
            meshRef.current.position.copy(camera.position)
        }
    })

    let wIsDown = false
    let sIsDown = false
    let aIsDown = false
    let dIsDown = false
    

    window.addEventListener("keydown", (event) => {
        switch (event.key) {
            case 'w':
                wIsDown = true
                break
            case 's':
                sIsDown = true
                break
            case 'a':
                aIsDown = true
                break
            case 'd':
                dIsDown = true
                break
            
        }
    })

    window.addEventListener("keyup", (event) => {
        switch(event.key) {
            case 'w':
                wIsDown = false
                break
            case 's':
                sIsDown = false
                break
            case 'a':
                aIsDown = false
                break
            case 'd':
                dIsDown = false
                break

        }
    })

    return (
        <mesh
        // position={[1, 0, 2]} 
        ref={meshRef}
        >
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={'#2f74c0'} />
        </mesh>
    )
}

export default HitBox