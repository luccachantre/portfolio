import { Canvas } from '@react-three/fiber'

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
      <Box position={[1.2, 2, 0]} />
      <Box position={[-1.2, 2, 0]} />
      <TrackingBox position={[1.5, 0, 0]} />
      <TrackingBox position={[0, 0, 0]} />
      <TrackingBox position={[-1.5, 0, 0]} />
      <CameraBox position={[5, 2, -2]} />
      <Scene />
      <D3Text />
      <CurveCamera />
      <HitBox/>
    </Canvas>
  )
}

export default App
