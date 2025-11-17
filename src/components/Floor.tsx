import { usePlane } from '@react-three/cannon'
import * as THREE from 'three'
import type { ThreeElements } from '@react-three/fiber'

function Floor(props: ThreeElements['mesh']) {
    const [meshRef] = usePlane<THREE.Plane>((index) => ({ type: "Static", mass: 0, ...props}))


}