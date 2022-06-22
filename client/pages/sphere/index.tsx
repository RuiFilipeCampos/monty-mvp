import type { NextPage } from "next";

import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import * as ch from "@chakra-ui/react";

// Internal Imports
import {
  setRadius,
  setNumberOfParticles,
  setEnergy,
  setMaterialInside,
  setParticleType,
} from "../../features/sphereSlice"

import { AppDispatch, RootState } from "../../app/store";
import Layout from "../../components/Layout";



const Demo: NextPage = () => {

  const sphere = useSelector((state: RootState) => state.sphere)

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let parameters: any = {
      geometry: 'sphere',
      radius: sphere.radius,
      numberOfParticles: sphere.numberOfParticles,
      material: sphere.materialInside,
      particle: sphere.particleType,
      energy: sphere.energy
    }

    const query: string = new URLSearchParams(parameters).toString();
    window.open('/sphere/simulate' + '?' + query)
  }

  const css = {
    '&::-webkit-scrollbar': {
      width: '2px',
    },
    '&::-webkit-scrollbar-track': {
      width: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: "gray",
      borderRadius: '14px',
    },
  }

  return (
    <>
      <Layout>
        <ch.Flex >
          <ch.HStack w="full">
            <Header />
            <ch.Spacer />
            <form onSubmit={handleSubmit}>
              <ch.VStack
                css={css}
                overflowY="scroll"
                w="full" h="full" p="10"
                maxH="70vh"
                spacing={10}
                bg="white"
                ml={10}
                shadow="xs"
              >
                <RadiusField />
                <NumberOfParticlesField />
                <MaterialField />
                <ParticleTypeField />
                <EnergyField />
                <SubmitButton />
              </ch.VStack>
            </form>
          </ch.HStack>
        </ch.Flex>
      </Layout>
    </>
  );
};

export default Demo;


const Header = (): JSX.Element => {

  const sphere = useSelector((state: RootState) => state.sphere)

  return (
    <>
      <ch.VStack w="40vw" h="full" alignItems="left">
        <ch.Heading>Sphere...</ch.Heading>
        <ch.Text>
          Consider a sphere of radius <b>{sphere.radius}cm</b>,
          centered at the origin of a cartesian reference system. This sphere
          contains <b>{sphere.materialInside.toLowerCase()}</b> while the rest of space is permeated
          with gold. An unidirectional, monoenergetic source of <b>{sphere.particleType.toLowerCase()}s</b> with
          an energy of <b>{sphere.energy} MeV</b> will emit
          a total of <b>{sphere.numberOfParticles} particles</b>.
        </ch.Text>
        <ch.HStack pt={5}>
          <ch.Button type="submit" w="full" variant="outline" colorScheme="facebook">
            Cancel
          </ch.Button>
          <ch.Button type="submit" w="full" variant="outline" colorScheme="facebook" >
            Reset
          </ch.Button>
          <ch.Button type="submit" colorScheme="facebook" w="full" >
            Simulate
          </ch.Button>
        </ch.HStack>

      </ch.VStack>
    </>
  )
}


const RadiusField = (): JSX.Element => {

  const radius = useSelector((state: RootState) => state.sphere.radius)
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (value: number) => dispatch(setRadius(value))

  return (
    <>
      <ch.FormControl isRequired>
        <ch.FormLabel>Radius of the sphere: {radius}cm</ch.FormLabel>
        <ch.HStack>
          <ch.Slider
            flex="1"
            focusThumbOnChange={false}
            value={radius}
            min={1}
            max={1000}
            onChange={handleChange}
          >
            <ch.SliderTrack>
              <ch.SliderFilledTrack />
            </ch.SliderTrack>

            <ch.SliderThumb fontSize="xx-small" boxSize="32px">
              {radius}cm
            </ch.SliderThumb>

          </ch.Slider>
        </ch.HStack>
        <ch.FormHelperText>
          Note that for some particle parameters, 1000cm is a good approximation of infinity.
        </ch.FormHelperText>
      </ch.FormControl>
    </>
  )
}


const NumberOfParticlesField = (): JSX.Element => {

  const numberOfParticles = useSelector(
    (state: RootState) => state.sphere.numberOfParticles
  )

  const particleType = useSelector(
    (state: RootState) => state.sphere.particleType
  )

  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (value: number) => dispatch(setNumberOfParticles(value))

  return (
    <>
      <ch.FormControl isRequired>
        <ch.FormLabel>Initial Number Particles: {numberOfParticles} {particleType.toLowerCase()}s </ch.FormLabel>
        <ch.HStack>
          <ch.Slider
            flex="1"
            focusThumbOnChange={false}
            value={numberOfParticles}
            min={1}
            max={1000}
            onChange={handleChange}
          >
            <ch.SliderTrack>
              <ch.SliderFilledTrack />
            </ch.SliderTrack>
            <ch.SliderThumb fontSize="sm" boxSize="32px">
              {numberOfParticles}
            </ch.SliderThumb>
          </ch.Slider>
        </ch.HStack>
        <ch.FormHelperText>
          The initial number of particles is not the
          total number of particles simulated. One photon
          can generate several electrons, which themselves
          generate dozens of photons and electrons.
        </ch.FormHelperText>
      </ch.FormControl>
    </>
  )
}


const MaterialField = (): JSX.Element => {

  const dispatch = useDispatch<AppDispatch>()



  const handleChange = (event) => {
    const value = event.target.value
    dispatch(setMaterialInside(value))
  }

  return (
    <>
      <ch.FormControl isRequired>
        <ch.FormLabel>Material </ch.FormLabel>

        <ch.Select onChange={handleChange}>
          <option value="WATER">Water</option>
          <option value="AIR">Air</option>
          <option value="GOLD">Gold</option>
        </ch.Select>

        <ch.FormHelperText>
          {"Photons don't interact much with matter (generally result in quicker simulations). Charged particles like Positrons and Electrons interact much more with the medium."}
        </ch.FormHelperText>

      </ch.FormControl>
    </>
  )
}


const ParticleTypeField = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (event) => {
    const value = event.target.value
    dispatch(setParticleType(value))
  }

  return (
    <>
      <ch.FormControl isRequired>
        <ch.FormLabel>Particle Type</ch.FormLabel>
        <ch.Select onChange={handleChange}>
          <option value="photon">Photon</option>
          <option value="electron">Electron</option>
          <option value="positron">Positrons</option>
        </ch.Select>
        <ch.FormHelperText>
          {"Photons don't interact much with matter (generally result in quicker simulations). Charged particles like Positrons and Electrons interact much more with the medium."}
        </ch.FormHelperText>
      </ch.FormControl>
    </>
  )
}

const EnergyField = (): JSX.Element => {

  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (event) => {
    const value = event.target.value
    dispatch(setEnergy(value))
  }

  return (
    <>
      <ch.FormControl isRequired>
        <ch.FormLabel>
          Energy:
        </ch.FormLabel>
        <ch.Select p onChange={handleChange}>
          <option value="1">
            1 MeV
          </option>
          <option value="10">
            10 MeV
          </option>
          <option value="30">
            30 MeV
          </option>
        </ch.Select>
        <ch.FormHelperText>
          The higher the energy, the longer the simulation will take.
        </ch.FormHelperText>
      </ch.FormControl>
    </>
  )
}


const SubmitButton = (): JSX.Element => {
  return (
    <>
      <ch.FormControl>
        <ch.Button type="submit" colorScheme="facebook" w="full" hidden>
          Simulate
        </ch.Button>
      </ch.FormControl>
    </>
  )
}