import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react"
import { store } from '../app/store'
import { Provider as ReduxProvider } from 'react-redux'


const theme = extendTheme(
  {
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'gray.100',
        },
      }
    }
  }
)

function MontyMVP({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>,
      </ChakraProvider>
    </>
  );
}

export default MontyMVP;
