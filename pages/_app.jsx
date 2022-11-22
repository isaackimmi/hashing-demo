import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../constants/theme";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
