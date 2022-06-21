import type { NextPage } from "next";
import React, { lazy, Suspense } from "react";
import * as ch from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { Canvas, useThree } from "@react-three/fiber";



import { OrbitControls } from '@react-three/drei'
import { useSpring } from "framer-motion";

const ModelComponent = lazy(() => import("../../components/Sphere"));


function Controls() {
  const { gl, camera } = useThree()

  useSpring(
    {
      from: {
        z: 300
      },
      z: 2,
      onFrame: ({ z }) => {
        camera.position.z = z
      }
    }
  )

  return <OrbitControls autoRotate target={[0, 0, 0]} args={[camera, gl.domElement]} />
}


const FallBack = () => {

  const router = useRouter()

  return (
    <>
      <ch.Flex w="100vw" h="100vh">
        <ch.HStack w="full" h="full" align="center" >
          <ch.VStack w="full" h="full" align="center" >
            <ch.Spacer />
            <ch.Spinner size='xl' />
            <ch.Spacer />
            <pre>{JSON.stringify(router.query, null, 4)}</pre>

            <ch.Spacer />
          </ch.VStack>
        </ch.HStack>
      </ch.Flex>
    </>
  )
}


const SimulateSphere: NextPage = (): JSX.Element => {

  const router = useRouter()

  return (
    <>
      <Suspense fallback={<FallBack />}>
        <ch.Flex w="100vw" h="100vh">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            <ModelComponent endpoint = {"sphere"}/>
            
            <color attach="background" args={["black"]} />
            <Controls />
          </Canvas>
        </ch.Flex>
      </Suspense>
    </>
  )
};

export default SimulateSphere;
