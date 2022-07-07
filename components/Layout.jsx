import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Easte</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout;
