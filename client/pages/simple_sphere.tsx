
import { NextPage } from "next/types";
import React from "react";
import { useLoader } from '@react-three/fiber'
import axios from "axios";
import { lazy, Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useSpring } from 'react-spring'

const ModelComponent = lazy(() => import("../components/Sphere"));

import * as ch from "@chakra-ui/react";

import { OrbitControls } from '@react-three/drei'


function Controls() {
  const { gl, camera } = useThree()

  useSpring({
    from: {
      z: 300
    },
    z: 2,
    onFrame: ({ z }) => {
      camera.position.z = z
    }
  })

  return <OrbitControls autoRotate target={[0, 0, 0]} args={[camera, gl.domElement]} />
}


const SimpleSphere: NextPage = () => {

  return (
    <>
      <Suspense fallback={"loading"}>
        <ch.Flex w="100vw" h="100vh">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            <ModelComponent />
            <color attach="background" args={["black"]} />
            <Controls />
          </Canvas>
        </ch.Flex>
      </Suspense>
    </>
  )
}

export default SimpleSphere