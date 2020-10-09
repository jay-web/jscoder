import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

const Box = (props) => {
    const mesh = useRef();

    const [hovered, setHovered ] = useState(false);
    const [active, setActive ] = useState(false);

    useFrame(() => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
    })

    return (
        <mesh 
            {...props}
            ref={mesh}
            scale={active ? [1.5,1.5,1.5] : [1,1,1]}
            onClick= {(e) => setActive(!active)}
            onPointerOver={(e) => setHovered(true)}
            onPointerOut={(e) => setHovered(false)}
        >
            <boxBufferGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={hovered ? 'white' : 'green'} />
        </mesh>
    )
}


export default Box;