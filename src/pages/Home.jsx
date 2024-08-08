import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "../components/Loader"

const Home = () => {
  return (
    <section className="w-full h-screen relative">
        {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            PopUP
        </div> */}
        
        <Canvas
            className="w-full h-screen bg-transparent"
            camera={{near : 0.1, far : 1000}}
        >
            <Suspense fallback={<Loader />}> 
                <ambientLight color></ambientLight>
            </Suspense>
            {/* <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh rotation={[0, 0, 0]} position={[0, 0, -5]} receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="blue" />
            </mesh> */}
        </Canvas>

    </section>
  )
}

export default Home
