import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import emergencySound from "../Assets/emergency-alarm-with-reverb-29431.mp3"; // Import the audio file
import { useNavigate } from "react-router-dom";
const Main = () => {
  const nav = useNavigate();
  return (
    <Box
      marginTop={"9rem"}
      textAlign={"center"}
      gap={"30px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Text fontSize={"3rem"} textAlign={"center"}>
        Welcome To Rajasthan Police Anomaly Detector Website
      </Text>
      <Box>
        <Button
          onClick={() => {
            nav("/home");
          }}
          colorScheme="whatsapp"
        >
          Go Live
        </Button>
      </Box>
    </Box>
  );
};

export default Main;
