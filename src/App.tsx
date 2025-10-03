import { Canvas } from '@react-three/fiber';

import Box from './components/Box'
import TrackingBox from './components/TrackingBox'
import D3Text from './components/3DText'
import CameraBox from './components/CameraBox'

function App() {

  return (
    <Canvas camera={{position: [0, 0, 5]}} >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      {/*<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />*/}
      <Box position={[1.2, 2, 0]} />
      <Box position={[-1.2, 2, 0]} />
      <TrackingBox position={[1.5, 0, 0]} />
      <TrackingBox position={[0, 0, 0]} />
      <TrackingBox position={[-1.5, 0, 0]} />
      <CameraBox position={[0, 2, -2]} />
      <D3Text />
    </Canvas>
  )
}

export default App
