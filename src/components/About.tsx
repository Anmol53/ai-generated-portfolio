'use client';

import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Heading } from "./ui/Heading";
import { Card } from "./ui/Card";
import { Grid } from "./ui/Grid";
import { Icon } from "./ui/Icon";
import { FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

interface Skill {
  name: string;
  items: string[];
}

const skills: Skill[] = [
  { 
    name: "Frontend", 
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"] 
  },
  { 
    name: "Backend", 
    items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"] 
  },
  { 
    name: "Additional Skills", 
    items: ["Data Structures", "Algorithms", "Problem Solving", "Technical Writing"] 
  }
];

export function About() {
  return (
    <Section id="about">
      <Container maxWidth="xl">
        <div className="flex items-center gap-4 mb-8">
          <Heading level={2}>About Me</Heading>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Icon icon={FaMapMarkerAlt} className="mr-2" />
            Mumbai, India
          </div>
        </div>
        
        <div className="prose dark:prose-invert mb-12">
          <p className="text-lg mb-4">
            I am a Full Stack Developer with expertise in the MERN stack, passionate about creating
            efficient and scalable web applications. With a strong foundation in both frontend and
            backend development, I specialize in building responsive and user-friendly interfaces
            while ensuring robust server-side implementations.
          </p>
          <p className="text-lg mb-4">
            My journey in technology is complemented by my commitment to sharing knowledge through
            technical writing. I maintain a collection of comprehensive guides on React, JavaScript,
            HTML, and CSS concepts, helping other developers learn and grow.
          </p>
          <p className="text-lg">
            I am also dedicated to continuous learning and problem-solving, actively participating
            in coding challenges on platforms like LeetCode, HackerRank, and InterviewBit to
            enhance my algorithmic thinking and coding skills.
          </p>
        </div>

        <div className="mt-12">
          <Heading level={3} className="mb-6">Skills & Technologies</Heading>
          <Grid cols={3} gap={8}>
            {skills.map((category) => (
              <Card
                key={category.name}
                className="p-6"
              >
                <Heading level={4} className="mb-4">{category.name}</Heading>
                <ul className="space-y-2">
                  {category.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <Icon icon={FaCheck} className="mr-2 text-blue-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </Grid>
        </div>

        <Card className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6">
          <Heading level={3} className="mb-4">Technical Writing & Resources</Heading>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I maintain a collection of in-depth technical guides and conceptual questions covering:
          </p>
          <Grid cols={4} gap={4}>
            {["React.js", "JavaScript", "HTML", "CSS"].map((topic) => (
              <Card
                key={topic}
                className="p-3 text-center text-sm font-medium"
              >
                {topic}
              </Card>
            ))}
          </Grid>
        </Card>
      </Container>
    </Section>
  );
} 