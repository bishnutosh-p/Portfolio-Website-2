/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import planeScene from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props}) => {
    const { scene, animations } = useGLTF(planeScene);
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane
