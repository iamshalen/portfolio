import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact({ color }) {
  const linkedin = () => {
    window.open(
      "https://linkedin.com/in/eldoraboo",
      "_blank",
      "noreferrer,noopener"
    );
  };
  const github = () => {
    window.open(
      "https://github.com/eldoraboo",
      "_blank",
      "noreferrer,noopener"
    );
  };
  const email = () => {
    window.open(
      "mailto:eldoraboo.mby@gmail.com",
      "_blank",
      "noreferrer,noopener"
    );
  };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              I'm currently looking for new opportunities. If you wish to engage
              me for a project or role, you can reach me via my inbox. I will
              get back to you as soon as I can!
            </Text>
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
              eldoraboo.mby@gmail.com
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={email} size={28} />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

