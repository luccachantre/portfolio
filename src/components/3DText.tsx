import * as THREE from 'three'
import { useRef } from 'react'
import { Text3D } from '@react-three/drei'

function D3Text() {
    return (
        <Text3D font="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&display=swap">
            hello
            <meshBasicMaterial />
        </Text3D>
    )
}

export default D3Text