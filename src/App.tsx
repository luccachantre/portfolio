import { Canvas } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'

import Box from './components/Box'
import TrackingBox from './components/TrackingBox'
import D3Text from './components/3DText'
import CameraBox from './components/CameraBox'
import CurveCamera from './components/curveCamera'
import Scene from './components/Scene'
import HitBox from './components/HitBox'

function App() {

  return (
    <Canvas id='theCanvas' camera={{position: [0, 2, 5]}} >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI / 2} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <D3Text />
      <PointerLockControls/>
    </Canvas>
  )
}

export default App
