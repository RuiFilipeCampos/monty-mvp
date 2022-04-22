import type { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";

import * as ch from "@chakra-ui/react";

const Demo: NextPage = () => {
  const [selected, setSelected] = React.useState("none");
  return (
    <>
      <ch.Flex w="100vw" h="full" bgImage="bg.bmp" >
        <ch.Flex shadow="lg" rounded="lg" bg="white" w="full" h="full" p="10" m="50">
          <ch.VStack w="full">
            <ch.HStack w="full">
              <ch.Heading>Geometry</ch.Heading>
              <ch.Spacer />
            </ch.HStack>
            <GeometrySelector selected={selected} setSelected={setSelected} />
          </ch.VStack>
        </ch.Flex>
      </ch.Flex>
    </>
  );
};

export default Demo;

interface selectGeometry {
  selected: string,
  setSelected: any,
}

const GeometrySelector = ({ selected, setSelected }: selectGeometry) => {
  const image_links: any = {
    none: "",
    sphere: "sphere.png",
    onion: "onion.png",
    "sphere-cut":
      "https://user-images.githubusercontent.com/63464503/137699819-3dad4fb6-7e76-4a5c-89b4-86924a62105c.png",
  };

  return (
    <ch.VStack w="full" h="full" spacing={10}>
      <ch.FormControl>
        <ch.FormLabel>Choose Geometry</ch.FormLabel>
        <ch.Select
          placeholder="Select geometry"
          onChange={(event) => setSelected(event.target.value)}
        >
          <option value="sphere">
            Sphere
          </option>
          <option value="onion">
            Onion
          </option>
          <option value="sphere-cut">
            A Cut Sphere (option 404s)
          </option>
        </ch.Select>

        <ch.FormHelperText>
          In the full version you programatically define any geometry.
        </ch.FormHelperText>


      </ch.FormControl>

      <FormNavigation previous="/" next={`/${selected}/`} />


      {
        image_links[selected] ? (
          
          <ch.Flex p={10} bg="black" rounded="lg">
            <ch.Image src={image_links[selected]} alt={selected} />
          </ch.Flex>


        ) : (
          <></>
        )
      }

    </ch.VStack>
  );
};

interface FormNavigationInput {
  previous: string,
  next: string,
}

const FormNavigation = ({ previous, next }: FormNavigationInput): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <ch.HStack w="full" align="left">
        <ch.Spacer />
        <ch.Button onClick={() => router.push(previous)}>Previous</ch.Button>
        <ch.Button colorScheme="facebook" onClick={() => router.push(next)}>
          Next
        </ch.Button>
      </ch.HStack>
    </>
  );
};
