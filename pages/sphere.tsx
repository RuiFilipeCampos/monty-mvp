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



  return (
    <>
      <ch.Flex w="100vw" h="full">
        <ch.Flex bg="white" rounded="lg" shadow="md"  w="full" h="full" p="10" m="50">
          <ch.VStack w="full">
            <ch.HStack w="full">
              <ch.Heading>Sphere</ch.Heading>
              <ch.Spacer />
            </ch.HStack>
            <ch.Spacer />
            <ch.FormControl>
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




            <ch.FormControl>
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




            <FormNavigation previous="/demo" next={null} />
          </ch.VStack>
        </ch.Flex>
      </ch.Flex>
    </>
  );
};

export default Demo;

const LayerSelector = () => {
  const [selected, setSelected] = React.useState("none");

  const image_options = {
    none: "",
    sphere: "",
    onion:
      "https://user-images.githubusercontent.com/63464503/124515938-880a8f80-ddd8-11eb-9439-409381b5124a.png",
    "sphere-cut":
      "https://user-images.githubusercontent.com/63464503/137699819-3dad4fb6-7e76-4a5c-89b4-86924a62105c.png",
  };

  // const handleSelection = (event) => setSelected(event.target.value);

  return (
    <>
      <ch.HStack w="full">
        <ch.Heading>The Onion</ch.Heading>
        <ch.Spacer />
      </ch.HStack>
      <ch.Spacer />
      <ch.FormControl>
        <ch.FormLabel>How many layers?</ch.FormLabel>
        <ch.NumberInput step={1} defaultValue={3} min={1} max={10}>
          <ch.NumberInputField />
          <ch.NumberInputStepper>
            <ch.NumberIncrementStepper />
            <ch.NumberDecrementStepper />
          </ch.NumberInputStepper>
        </ch.NumberInput>

        <ch.FormHelperText>
          Maximum of 10 layers due to performance issues. These performance
          restrictions are meant to protect the Server. In the full version
          there are no restriction.
        </ch.FormHelperText>
      </ch.FormControl>
    </>
  );
};

interface FormNavigationInput {
  previous: string,
  next: string,
}

const FormNavigation = ({ previous, next }: FormNavigationInput) => {
  const router = useRouter();

  return (
    <ch.HStack w="full" align="left">
      <ch.Spacer />
      <ch.Button onClick={() => router.push(previous)}>Previous</ch.Button>
      <ch.Button colorScheme="facebook" onClick={() => router.push(next)}>
        Next
      </ch.Button>
    </ch.HStack>
  );
};
