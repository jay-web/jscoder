import * as THREE from 'three'

import React, { useMemo } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Physics, usePlane, useBox } from 'use-cannon'
import niceColors from 'nice-color-palettes'
// import './styles.css'

export function Plane(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[5, 5]} />
      <shadowMaterial attach="material" color="#171717" opacity={0.5} />
    </mesh>
  )
}

export function Cubes({ number }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    args: [0.1, 0.1, 0.1],
    position: [Math.random() - 1, Math.random() * 2, Math.random() - 0.5]
  }))

  const colors = useMemo(() => {
    const array = new Float32Array(number * 3)
    const color = new THREE.Color()
    for (let i = 0; i < number; i++)
      color
        .set(niceColors[17][Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3)
    return array
  }, [number])

  useFrame(() => api.at(Math.floor(Math.random() * number)).position.set(-1, Math.random() * 2, 0))

  return (
    <instancedMesh receiveShadow castShadow ref={ref} args={[null, null, number]}>
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colors, 3]} />
      </boxBufferGeometry>
      <meshLambertMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
}