import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center } from '@react-three/drei'
import { mx_bilerp_0 } from 'three/src/nodes/materialx/lib/mx_noise.js'

function D3Text() {

    const textRef = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        //textRef.current.geometry.center()
        //we cant call center() inside useFrame, its too computationally expensive to do every single frame
        //instead we need to do useEffect so it only does it when it changes or something


        //textRef.current.position.add([0, 0, 1])
        textRef.current.rotation.y -= delta
        //textRef.current.position.sub([0, 0, 1])
    })
    
    return (
        <Text3D ref={textRef} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.5}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.2}
          font='./Alan_Sans.json'>
          {`Lucca\nChantre`}
          <meshNormalMaterial />
        </Text3D>
    )
}

export default D3Text