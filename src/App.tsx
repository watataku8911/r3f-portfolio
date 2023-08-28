import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  Html,
  PresentationControls,
  useGLTF
} from "@react-three/drei";

function App() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <Canvas
        camera={{ fov: 70, near: 1.1, far: 3000 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <color args={["#5bbee5"]} attach={"background"} />
        <ambientLight />
        <PresentationControls
          global
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <Float rotationIntensity={1.5}>
            <rectAreaLight
              color={"#5bbee5"}
              intensity={55}
              rotation={[0.5, Math.PI, 0.2]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <primitive
              object={macbook.scene}
              position={[0.3, -1, 0.9]}
              rotation-y={0.5}
              rotation-x={0.5}
            >
              <Html
                transform
                wrapperClass="htmlScreen-pc"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe src="https://watataku-portfolio.vercel.app" />
              </Html>
            </primitive>
          </Float>
        </PresentationControls>
        <ContactShadows position-y={-2.0} opacity={0.7} scale={7} blur={2.4} />
      </Canvas>
    </>
  );
}

export default App;
