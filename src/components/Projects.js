import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
} from "@chakra-ui/react";
import tps_site from "../assets/tps_site.png";
import scales_io from "../assets/scales_io.png";
import auto_labeling from "../assets/auto_labeling.png"
import pixel_duck from "../assets/pixel_duck.png"
import { Fade } from "react-reveal";
import { useState } from "react";

const projects = [
  {
    name: "TPS Construction Website",
    description:
      "Built a landing page for a construction firm to present them professionally. The first prototype was built in under 2 days.",
    badges: [
      { text: "React.js", colorScheme: "cyan" },
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
    tags: ["WebDev"],
  },
  {
    name: "Scales.io",
    description:
      "Developed a custom piano key visualizer for music scales, providing a user-friendly tool for musicians to practice and improve their skills. Utilized React.js and Chakra UI to create an interactive and visually appealing interface. The tool received positive feedback from users.",
    badges: [
      { text: "React.js", colorScheme: "cyan" },
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
    tags: ["WebDev"],
  },
  {
    name: "Auto-Labeling Pipeline",
    description:
      "Built a highly efficient auto-labeling pipeline for text classification, utilizing cutting-edge technologies such as spaCy, Hugging Face, and Docker. The pipeline significantly reduced manual labeling efforts and improved the accuracy of text classification tasks. Demonstrated expertise in NLP and data engineering by seamlessly integrating various tools and technologies to create a cohesive solution.",
    badges: [
      { text: "Python", colorScheme: "yellow" },
      { text: "Docker", colorScheme: "blue" },
      { text: "spaCy", colorScheme: "green" },
    ],
    buttons: [
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/auto-labeling",
      },
    ],
    image: auto_labeling,
    tags: ["Python", "DevOps"],
  },
  {
    name: "Pixel Duck",
    description:
      "Designed and programmed a web app that generates unique pixel ducks based on user-specified or randomized color inputs. Allows users to copy the generated duck in SVG format. Technologies used include HTML, CSS, React.js, and Chakra UI.",
    badges: [
      { text: "React.js", colorScheme: "cyan" },
      { text: "Chakra UI", colorScheme: "teal" },
    ],
    buttons: [
      { text: "Live Site", href: "https://pixel-duck.netlify.app/" },
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/pixel-duck",
      },
    ],
    image: pixel_duck,
    tags: ["WebDev"],
  },
];

const others = [
  {
    name: "PairALegal",
    description:
      "Chatbot paired with a website depository filled with succinct profiles of lawyers offering their services.",
    badges: [
      { text: "HTML", colorScheme: "red" },
      { text: "CSS", colorScheme: "blue" },
    ],
    buttons: [
      { text: "Live Site", href: "https://eldoraboo.github.io/PairALegal/" },
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/PairALegal",
      },
    ],
    tags: ["WebDev"],
  },
  {
    name: "Trello-Postman Client",
    description: "Trello API optimised as a collection for Postman.",
    badges: [{ text: "Postman", colorScheme: "orange" }],
    buttons: [
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/trello-postman",
      },
    ],
    tags: ["DataSci"],
  },
  {
    name: "Sencilla Theme",
    description:
      "Minimalistic, mobile-friendly one-page resume built with HTML, CSS, and JavaScript.",
    badges: [
      { text: "HTML", colorScheme: "red" },
      { text: "CSS", colorScheme: "blue" },
      { text: "JavaScript", colorScheme: "yellow" },
    ],
    buttons: [
      {
        text: "Live Site",
        href: "https://eldoraboo.github.io/sencilla-theme/",
      },
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/sencilla-theme",
      },
    ],
    tags: ["WebDev"],
  },
  {
    name: "Deploying Docker",
    description: "A blog documenting how to deploy Docker containers.",
    badges: [
      { text: "Markdown", colorScheme: "purple" },
      { text: "Docker", colorScheme: "blue" },
    ],
    buttons: [
      {
        text: "Live Site",
        href: "https://freight.gatsbyjs.io/",
      },
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/freight",
      },
    ],
    tags: ["DevOps"],
  },
  {
    name: "Personal Website V1",
    description: "Version 1 of my personal website.",
    badges: [
      { text: "HTML", colorScheme: "red" },
      { text: "CSS", colorScheme: "blue" },
    ],
    buttons: [
      {
        text: "Live Site",
        href: "https://eldoraboo.github.io/v1",
      },
    ],
    tags: ["WebDev"],
  },
  {
    name: "Personal Website V2",
    description: "Version 2 of my personal website.",
    badges: [
      { text: "React.js", colorScheme: "cyan" },
      { text: "GraphQL", colorScheme: "purple" },
    ],
    buttons: [
      {
        text: "Live Site",
        href: "https://eldoraboo-v2.netlify.app",
      },
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/eldora-gatsby-site",
      },
    ],
    tags: ["WebDev"],
  },
  {
    name: "Personal Website V3",
    description: "Version 3 of my personal website. (This site!)",
    badges: [
      { text: "React.js", colorScheme: "cyan" },
      { text: "Chakra UI", colorScheme: "teal" },
    ],
    buttons: [
      {
        text: "Live Site",
        href: "https://eldoraboo.netlify.app",
      },
      {
        text: "GitHub Repo",
        href: "https://github.com/eldoraboo/portfolio-v3",
      },
    ],
    tags: ["WebDev"],
  },
  {
    name: "Online Resume",
    description: "My online resume based off Sencilla Theme.",
    badges: [
      { text: "HTML", colorScheme: "red" },
      { text: "CSS", colorScheme: "blue" },
    ],
    buttons: [
      {
        text: "Live Site",
        href: "https://eldoraboo.github.io/",
      },
    ],
    tags: ["WebDev"],
  },
  {
    name: "Metabase",
    description: "Building a Business Intelligence System with BigQuery.",
    badges: [{ text: "SQL", colorScheme: "gray" }],
    buttons: [],
    tags: ["DataSci"],
  },
  {
    name: "Trello Workflow",
    description:
      "An automated workflow system to extract data from the Trello API using Python 3 & Postman.",
    badges: [{ text: "Python", colorScheme: "yellow" }],
    buttons: [],
    tags: ["DataSci"],
  },
  {
    name: "Auto Car Report",
    description:
      "An automated system built with Flask that generates excel spreadsheet reports.",
    badges: [{ text: "Python", colorScheme: "yellow" }],
    buttons: [],
    tags: ["DataSci"],
  },
];

export default function Projects() {
    const [selected, setSelected] = useState("All");

    const handleSelected = (value) => {
      setSelected(value);
    };
    
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
                  <Image objectFit="cover" src={project.image} />

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
                      <HStack pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Other Projects
          </Text>
          <Center px={4}>
            <ButtonGroup>
              <Button
                colorScheme={selected === "All" ? "pink" : "gray"}
                onClick={() => handleSelected("All")}
              >
                All
              </Button>
              <Button
                colorScheme={selected === "DevOps" ? "pink" : "gray"}
                onClick={() => handleSelected("DevOps")}
              >
                DevOps
              </Button>
              <Button
                colorScheme={selected === "DataSci" ? "pink" : "gray"}
                onClick={() => handleSelected("DataSci")}
              >
                DataSci
              </Button>
              <Button
                colorScheme={selected === "WebDev" ? "pink" : "gray"}
                onClick={() => handleSelected("WebDev")}
              >
                WebDev
              </Button>
            </ButtonGroup>
          </Center>
          <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {others
              .filter((other) => {
                if (selected === "All") {
                  return true;
                } else {
                  return other.tags.includes(selected);
                }
              })
              .map((other) => (
                <Fade bottom>
                  <Card key={other.name}>
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        <Heading size="sm">{other.name}</Heading>

                        <Text fontSize="sm" py={2}>
                          {other.description}
                        </Text>

                        <HStack spacing={2}>
                          {other.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              color="pink.400"
                            >
                              {button.text}
                            </Link>
                          ))}
                        </HStack>
                        <HStack flexWrap="wrap" pt={4} spacing={2}>
                          {other.badges.map((badge) => (
                            <Badge
                              my={2}
                              key={badge.text}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Fade>
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
