import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
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
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import ma from "../assets/ma.jpeg";
import bs from "../assets/bs.jpeg";
import ura from "../assets/ura.png";
import gg from "../assets/gg.png"
import la from "../assets/la.jpeg";
import ri from "../assets/ri.png"
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";

export default function Experience() {
  const experience = [
    {
      image: ma,
      company: "Moody's Analytics",
      position: "Software Engineer",
      duration: "Jun'23 - Aug'23",
      badges: [{ name: "Internship", colorScheme: "blue" }],
      listItems: [],
    },
    {
      image: bs,
      company: "Beansprout",
      position: "Software Engineer",
      duration: "Mar'23 - May'23",
      badges: [{ name: "Internship", colorScheme: "blue" }],
      listItems: [],
    },
    {
      image: ura,
      company: "Urban Redevelopment Authority",
      position: "Software Engineer",
      duration: "Jan'23 - Mar'23",
      badges: [{ name: "Internship", colorScheme: "blue" }],
      listItems: [
        "Piloted the integration of a cutting-edge tool into URA's existing systems, enabling users to analyze freight movements with ease.",
        "Contributed to the refinement of existing documentation, capturing detailed steps for new users to operate the tool.",
        "Possessed advanced proficiency in Node.js and Python, providing the necessary skills and expertise to drive successful integrations and development initiatives.",
      ],
    },
    {
      image: gg,
      company: "Google Developer Student Clubs",
      position: "Software Engineer",
      duration: "Sep'22 - Present",
      badges: [{ name: "School Project", colorScheme: "green" }],
      listItems: [
        "Designed and developed an intuitive admin portal with a user-friendly interface, providing an efficient way to manage course materials and users.",
        "Adopted front-end frameworks such as React.js and Chakra UI to create a highly responsive and engaging user interface.",
        "Engineered a full-stack API with Node.js and GraphQL, providing robust and scalable solutions for delivering online education.",
      ],
    },
    {
      image: la,
      company: "Lumens Auto",
      position: "Data Scientist",
      duration: "Sep'22 - Dec'22",
      badges: [{ name: "Internship", colorScheme: "blue" }],
      listItems: [
        "Utilized a diverse range of APIs including Postman, Trello, HubSpot, and CarTrack to effectively retrieve and analyze data Designed and implemented automated Python workflows on GitHub, streamlining daily reporting processes and improving efficiency.",
        "Built a comprehensive business intelligence (BI) system on Metabase, providing valuable insights and enabling data-driven decision-making.",
        "Performed extensive data cleaning and pre-processing for unstructured data, resulting in a more organized and usable data set.",
      ],
    },
    {
      image: ri,
      company: "RIMM Sustainability",
      position: "Data Scientist",
      duration: "May'22 - Jul'22",
      badges: [{ name: "Internship", colorScheme: "blue" }],
      listItems: [
        "Designed and implemented a cutting-edge API for sequence labeling with spaCy models, resulting in improved accuracy and efficiency of NLP tasks.",
        "Leveraged open-source data labeling tools such as Doccano to drive successful named entity recognition initiatives.",
        "Proficient in utilizing JSON and JSONL formatted files to train NLP models, contributing to the development of highly effective machine learning models.",
      ],
    },
  ];

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
          <Stack px={4} spacing={4}>
            {experience.map((exp) => (
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
                            <ListIcon as={ChevronRightIcon} color="pink.500" />
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
