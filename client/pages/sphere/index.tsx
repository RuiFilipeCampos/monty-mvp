import type { NextPage } from "next";

import React from "react";
import * as ch from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'

import {
  setRadius,
  setNumberOfParticles,
  setEnergy,
  setMaterialInside,
  setParticleType,
} from "../../features/sphereSlice"


import { AppDispatch, RootState } from "../../app/store";


const Demo: NextPage = () => {

  const sphere = useSelector((state: RootState) => state.sphere)

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let parameters: any = {
      geometry: 'sphere',
      radius: sphere.radius,
      numberOfParticles: sphere.numberOfParticles,
      material: sphere.materialInside,
      particle: sphere.particleType,
      energy: sphere.energy
    }

    const u: any = new URLSearchParams(parameters).toString();
    window.open('/sphere/simulate' + '?' + u)
  }

  return (
    <>
      <ch.Flex w="100vw" h="full">
        <ch.Flex bg="white" rounded="lg" shadow="md" w="full" h="full" p="10" m="50">
          <ch.VStack w="full">
            <Header />
            <ch.Spacer />
            <pre>{JSON.stringify(sphere, null, 4)}</pre>
            <form onSubmit={handleSubmit}>
              <ch.VStack w="full" spacing={10}>
                <RadiusField />
                <NumberOfParticlesField />
                <MaterialField />
                <ParticleTypeField />
                <EnergyField />
                <SubmitButton />
              </ch.VStack>
            </form>
          </ch.VStack>
        </ch.Flex>
      </ch.Flex>
    </>
  );
};

export default Demo;


const Header = (): JSX.Element => {

  return (
    <>
      <ch.HStack w="full">
        <ch.Heading>Sphere</ch.Heading>
        <ch.Spacer />
      </ch.HStack>
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
        <ch.FormLabel>Choose a radius</ch.FormLabel>
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

            <ch.SliderThumb fontSize="sm" boxSize="32px">
              {radius}
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

  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (value: number) => dispatch(setNumberOfParticles(value))

  return (
    <>
      <ch.FormControl isRequired>
        <ch.FormLabel>Number of Particles</ch.FormLabel>
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
        <ch.FormLabel>Material</ch.FormLabel>

        <ch.Select placeholder="Select Material" onChange={handleChange}>
          <option value="AIR">Air</option>
          <option value="WATER">Water</option>
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
        <ch.Select placeholder="Select Particle" onChange={handleChange}>
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
          Energy
        </ch.FormLabel>
        <ch.Select placeholder="Select Initial Energy" onChange={handleChange}>
          <option value="1">
            1MeV
          </option>
          <option value="10">
            10MeV
          </option>
          <option value="30">
            30MeV
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
        <ch.Button type="submit" colorScheme="facebook" w="full" >
          Simulate
        </ch.Button>
      </ch.FormControl>
    </>
  )
}