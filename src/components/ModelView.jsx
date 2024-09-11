import { PerspectiveCamera, Html, OrbitControls } from "@react-three/drei"
import * as THREE from 'three'
import { Suspense } from "react"
import IPhone from "./IPhone"
import Lights from "./lights"
import { Canvas } from "@react-three/fiber"

function ModelView({index, groupRef, gsapType, controlRef, setRotationState, item, size}) {
  return (
    <Canvas index={index} id={gsapType} className={`h-full w-full ${index === 2 ? 'right-[-100%]':''}`}>

      {/* AMBIENT LIGHT */}
      <ambientLight intensity={0.3}/>

      <PerspectiveCamera makeDefault position={[0,0,4]} />
      <Lights/>

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0,0,0)}
        onEnd={ ()=> setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      {/* suspense is a loader for our model and fallback is the loading screen which will be viewed before our model */}
      <group ref={groupRef} name={`${index === 1 ? 'small':'large'}`} position={[0,0,0]}>
        <Suspense fallback={
          <Html>
            <div>
              Loading....
            </div>
          </Html>}>
          <IPhone scale={index === 1 ? [15,15,15]:[17,17,17]} item={item} size={size} />
        </Suspense>
      </group>
    </Canvas>


  )
}

export default ModelView