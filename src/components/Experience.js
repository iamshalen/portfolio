import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import ma from "../assets/ma.jpeg";
import bs from "../assets/bs.jpeg";
import ura from "../assets/ura.png";
import gg from "../assets/gg.png"
import la from "../assets/la.jpeg";
import ri from "../assets/ri.png"
import ro from "../assets/ro.png";
import sd from "../assets/sd.jpeg";
import cs from "../assets/cs.jpeg";
import nk from "../assets/nk.jpeg";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState } from "react";

const experience = [
  {
    image: nk,
    company: "Nika.eco",
    position: "Full-Stack Developer",
    duration: "Aug'23 - Dec'23",
    badges: [
      { name: "Internship", colorScheme: "blue" },
      { name: "Pending Start Date", colorScheme: "red" },
    ],
    listItems: [],
    tags: "Work",
  },
  {
    image: ma,
    company: "Moody's Analytics",
    position: "Software Engineer",
    duration: "Jun'23 - Aug'23",
    badges: [
      { name: "Internship", colorScheme: "blue" },
      { name: "Pending Start Date", colorScheme: "red" },
    ],
    listItems: [],
    tags: "Work",
  },
  {
    image: bs,
    company: "Beansprout",
    position: "Data Analytics",
    duration: "Mar'23 - May'23",
    badges: [
      { name: "Internship", colorScheme: "blue" },
      { name: "In Progress", colorScheme: "orange" },
    ],
    listItems: [
      "Performed association rule mining and text classification analysis to understand user path exploration.",
      "Worked with digital analytics software like Google Analytics and Amplitude to track site activity."
    ],
    tags: "Work",
  },
  {
    image: ura,
    company: "Urban Redevelopment Authority",
    position: "Data Engineer",
    duration: "Jan'23 - Mar'23",
    badges: [{ name: "Internship", colorScheme: "blue" }],
    listItems: [
      "Piloted the integration of a optimization modeling tool (Python) into URA's existing systems with Docker and Node.js.",
      "Performed data analytics on movement of traffic and implemented NLP (Natural Language Processing) on entity categorization of feedback.",
      "Employed port forwarding to securely expose the necessary ports for communication between the front-end and the optimization model.",
    ],
    tags: "Work",
  },
  {
    image: la,
    company: "Lumens Auto",
    position: "Data Scientist",
    duration: "Sep'22 - Dec'22",
    badges: [{ name: "Internship", colorScheme: "blue" }],
    listItems: [
      "Utilized a range of APIs including Postman, Trello, and CarTrack to extract data and perform data analytics on datasets with up to 300K rows.",
      "Built a comprehensive business intelligence system on Metabase, providing insightful data visualisations for stakeholders.",
      "Implemented automated ETL workflows with Python and BigQuery SQL, saving up to 730 man-hours annually.",
    ],
    tags: "Work",
  },
  {
    image: ri,
    company: "RIMM Sustainability",
    position: "Data Scientist",
    duration: "May'22 - Jul'22",
    badges: [{ name: "Internship", colorScheme: "blue" }],
    listItems: [
      "Designed and implemented a Python API for sequence labeling with spaCy models, resulting in improved accuracy and efficiency of NLP tasks.",
      "Leveraged open-source tools such as Doccano and HuggingFace to build an optimized BERT (Bidirectional Encoder Representations from Transformer) model.",
      "Came up with a production ready interface by the end of internship period and presented the product to the CTO directly.",
    ],
    tags: "Work",
  },
  {
    image: ro,
    company: "Roboto Coding Academy",
    position: "Technology Educator",
    duration: "Nov'20 - Present",
    badges: [
      { name: "Education", colorScheme: "yellow" },
      { name: "In Progress", colorScheme: "orange" },
    ],
    listItems: [
      "Teach and conduct coding, STEM and technology related classes for up to a class of 30 students (including schools like Assumption English School).",
      "Oversee and train students in preparation of coding & robotics competitions (in collaboration with DSTA, DSO National Laboratories) that held at a national level.",
      "Provided support for students outside of curriculum hours for them to embark on personal projects like a landing page for their school's CCA (Xinmin Secondary).",
    ],
    tags: "Teaching",
  },
  {
    image: cs,
    company: "Construcshare",
    position: "Front-End Developer",
    duration: "Feb'23 - Present",
    badges: [
      { name: "Project", colorScheme: "green" },
      { name: "In Progress", colorScheme: "orange" },
    ],
    listItems: [
      "Developing an e-commerce simulation model for construction materials.",
      "Working on an interface to run, tweak and visualize the model.",
    ],
    tags: "Other",
  },
  {
    image: gg,
    company: "Google Developer Student Clubs",
    position: "Software Engineer",
    duration: "Sep'22 - Present",
    badges: [
      { name: "Project", colorScheme: "green" },
      { name: "In Progress", colorScheme: "orange" },
    ],
    listItems: [
      "Designed and developed an intuitive admin portal with a user-friendly interface, providing an efficient way to manage course materials and users.",
      "Adopted front-end frameworks such as React.js and Chakra UI to create a highly responsive and engaging user interface.",
      "Engineered a full-stack API with Node.js and GraphQL, providing robust and scalable solutions for delivering online education.",
    ],
    tags: "Other",
  },
  {
    image: sd,
    company: "NUS Statistics & Data Science Society",
    position: "Vice-Director of Marketing",
    duration: "Dec'21 - May'22",
    badges: [{ name: "Project", colorScheme: "green" }],
    listItems: [],
    tags: "Other",
  },
];

export default function Experience() {
  const [selected, setSelected] = useState("Work");

  const handleSelected = (value) => {
    setSelected(value);
  };
  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color="pink.400" fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              <Button
                colorScheme={selected === "Work" ? "pink" : "gray"}
                onClick={() => handleSelected("Work")}
              >
                Work
              </Button>
              <Button
                colorScheme={selected === "Teaching" ? "pink" : "gray"}
                onClick={() => handleSelected("Teaching")}
              >
                Teaching
              </Button>
              <Button
                colorScheme={selected === "Other" ? "pink" : "gray"}
                onClick={() => handleSelected("Other")}
              >
                Other
              </Button>
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            {experience
              .filter((exp) => exp.tags.includes(selected))
              .map((exp) => (
                <Fade bottom>
                  <Card key={exp.company} size="sm">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={exp.image} h={50} />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>{exp.company}</Text>
                            <Text>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color="pink.500"
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                        {exp.badges.map((badge) => (
                          <Badge
                            key={badge.name}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.name}
                          </Badge>
                        ))}
                      </HStack>
                    </CardFooter>
                  </Card>
                </Fade>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
