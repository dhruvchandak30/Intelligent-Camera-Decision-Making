import React, { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { Box, Text, Button, Alert } from "@chakra-ui/react";
import emergencySound from "../Assets/emergency-alarm-with-reverb-29431.mp3";
const Home = () => {
  const toast = useToast();
  const [alert, setAlert] = useState(false);
  const audio = new Audio(emergencySound);

  const handleAudioPlay = (val) => {
    if (val == "pause") {
      audio.pause();
      return;
    }
    audio.play();
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(true);
      handleAudioPlay("kk");
      toast({
        title: `Scissor Detected at Cell-01, Raja Park Police Station, Jaipur`,
        position: "top",
        status: "warning",
        isClosable: true,
      });
    }, 17000);
  }, []);

  return (
    <div>
      {!alert ? (
        <Text
          textAlign={"center"}
          marginTop={"6rem"}
          color={"lightgreen"}
          fontSize={"5rem"}
        >
          {" "}
          Everything is fine
        </Text>
      ) : (
        <>
          <Text
            textAlign={"center"}
            marginTop={"6rem"}
            color={"red"}
            fontSize={"5rem"}
          >
            {" "}
            Scissor Detected at Cell-01, Raja Park Police Station, Jaipur{" "}
          </Text>
        </>
      )}
    </div>
  );
};

export default Home;
