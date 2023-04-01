import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useToast, Button } from '@chakra-ui/react';

export default function About({ color }) {
    const toast = useToast();
    return (
      <>
        <Container maxW={"3xl"} id="about">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  01
                </Text>
                <Text fontWeight={800}>About</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              Hello! My name is Eldora. My interests are in Full Stack
              Development and Data Science. I am a dedicated individual looking
              forward to gaining internship opportunities to broaden my
              horizons.
            </Text>
            <Button
              onClick={() =>
                toast({
                  title: "Well, hello there!",
                  description: "Thanks for visiting my page.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Say hi to me!
            </Button>
          </Stack>
        </Container>
      </>
    );
}

