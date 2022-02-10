import React from "react";
import { Box } from "@chakra-ui/react";
import MainNavigation from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ApplicationCTA } from "../components/ApplicationCTA";
import { HireFAQs } from "../components/HireFAQs";
export const Hire = () => {
  return (
    <Box position={"relative"}>
      <MainNavigation />
      <Box>
        <HireFAQs />
        <ApplicationCTA />
      </Box>
      <Footer />
    </Box>
  );
};
