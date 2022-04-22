import type { NextPage } from "next";

import React from "react";
import * as ch from "@chakra-ui/react";
import { useRouter } from "next/router";

const Demo: NextPage = () => {
  const [radius, setRadius] = React.useState(25);
  const [numberOfParticles, setNumberOfParticles] = React.useState(1000);
  const [energy, setEnergy] = React.useState(0);
  const [particle, setParticle] = React.useState('');
  const [material, setMaterial] = React.useState('');


  const handleSubmit = (e: any) => {
    e.preventDefault();

    let parameters: any = {
      geometry: 'sphere',
      radius: radius,
      numberOfParticles: numberOfParticles,
      material: material,
      particle: particle,
      energy: energy
    }


    const u: any = new URLSearchParams(parameters).toString();
    window.open('/simulate' + '?' + u)
  }


  return (
    <>
      <ch.Flex w="100vw" h="full">
        <ch.Flex bg="white" rounded="lg" shadow="md" w="full" h="full" p="10" m="50">
          <ch.VStack w="full">

            <ch.HStack w="full">
              <ch.Heading>Sphere</ch.Heading>
              <ch.Spacer />
            </ch.HStack>

            <ch.Spacer />
            
            <form onSubmit={handleSubmit}>
            <ch.VStack w="full" spacing={10}>

              <ch.FormControl isRequired>
                <ch.FormLabel>Choose a radius</ch.FormLabel>
                <ch.HStack>

                  <ch.Slider
                    flex="1"
                    focusThumbOnChange={false}
                    value={radius}
                    min={1}
                    max={1000}
                    onChange={(value: number) => setRadius(value)}
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




              <ch.FormControl isRequired>
                <ch.FormLabel>Number of Particles</ch.FormLabel>
                <ch.HStack>

                  <ch.Slider
                    flex="1"
                    focusThumbOnChange={false}
                    value={numberOfParticles}
                    min={1}
                    max={1000}
                    onChange={
                      (value: number) => setNumberOfParticles(value)
                    }
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




              <ch.FormControl isRequired>
                <ch.FormLabel>
                  Material
                </ch.FormLabel>

                <ch.Select placeholder="Select Material" onChange={e => setMaterial(e.target.value)}>
                  <option value="air">
                    Air
                  </option>
                  <option value="water">
                    Water
                  </option>
                  <option value="gold">
                    Gold
                  </option>
                </ch.Select>
                <ch.FormHelperText>
                  {"Photons don't interact much with matter (generally result in quicker simulations). Charged particles like Positrons and Electrons interact much more with the medium."}
                </ch.FormHelperText>
              </ch.FormControl>






              <ch.FormControl isRequired>
                <ch.FormLabel>
                  Particle Type
                </ch.FormLabel>

                <ch.Select placeholder="Select Particle" onChange={e => setParticle(e.target.value)}>
                  <option value="photon">
                    Photon
                  </option>
                  <option value="electron">
                    Electron
                  </option>
                  <option value="positron">
                    Positron
                  </option>
                </ch.Select>
                <ch.FormHelperText>
                  {"Photons don't interact much with matter (generally result in quicker simulations). Charged particles like Positrons and Electrons interact much more with the medium."}
                </ch.FormHelperText>
              </ch.FormControl>

              {/* To choose the particle type */}
              <ch.FormControl isRequired>
                <ch.FormLabel>
                  Energy
                </ch.FormLabel>
                <ch.Select placeholder="Select Initial Energy" onChange={e => setEnergy(e.target.value)}>
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

              <ch.FormControl>
                <ch.Button type="submit" colorScheme="facebook" w="full" >
                  Simulate !
                </ch.Button>
              </ch.FormControl>
              </ch.VStack>
            </form>

          </ch.VStack>
        </ch.Flex>
      </ch.Flex>
    </>
  );
};

export default Demo;


