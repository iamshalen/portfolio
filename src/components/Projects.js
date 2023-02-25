import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  CardFooter,
  Badge,
} from "@chakra-ui/react";
import tps_site from "../assets/tps_site.png";
import scales_io from "../assets/scales_io.png";
import auto_labeling from "../assets/auto_labeling.png"
import { Fade } from "react-reveal";

const projects = [
  {
    name: "TPS Construction Website",
    description:
      "Built a landing page for a construction firm to present them professionally. The first prototype was built in under 2 days.",
    badges: [
      { text: "React.js", colorScheme: "blue" },
      { text: "Chakra UI", colorScheme: "teal" },
    ],
    buttons: [
      { text: "Live Site", href: "https://tpsconstruction.netlify.app/" },
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/tps-construction",
      },
    ],
    image: tps_site,
  },
  {
    name: "Scales.io",
    description: "A piano key visualizer for scales.",
    badges: [
      { text: "React.js", colorScheme: "blue" },
      { text: "Chakra UI", colorScheme: "teal" },
    ],
    buttons: [
      { text: "Live Site", href: "https://scales-io.netlify.app/" },
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/scales-io",
      },
    ],
    image: scales_io,
  },
  {
    name: "Auto-Labeling Pipeline",
    description:
      "Auto Labeling Pipeline for Named Entity Recognition & Test Classification.",
    badges: [
      { text: "Python", colorScheme: "yellow" },
      { text: "Docker", colorScheme: "black" },
      { text: "spaCy", colorScheme: "green" },
    ],
    buttons: [
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/auto-labeling",
      },
    ],
    image: auto_labeling,
  },
];

export default function Projects() {
  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color="pink.400" fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Fade bottom>
                <Card
                  key={project.name}
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image
                    objectFit="cover"
                    src={project.image}
                  />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href}>
                            <Button color="pink.400">{button.text}</Button>
                          </a>
                        ))}
                      </HStack>
                    </CardBody>

                    <CardFooter>
                      <HStack spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack>
                    </CardFooter>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
