'use client';

import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Heading } from "./ui/Heading";
import { Card } from "./ui/Card";
import { Link } from "./ui/Link";
import { Tag } from "./ui/Tag";
import { Icon } from "./ui/Icon";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from "@/constants/projects";

export function Projects() {
  return (
    <Section id="projects" className="bg-gradient-to-b from-gray-900 to-black">
      <Container maxWidth="xl">
        <Heading level={2} gradient className="text-center mb-12">
          Featured Projects
        </Heading>
        <div className="grid gap-10">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative bg-gray-900/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-gray-800/50 backdrop-blur-sm"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Heading level={3} gradient className="group-hover:from-gray-100 group-hover:to-white">
                    {project.title}
                  </Heading>
                </div>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Tag 
                      key={tag}
                      className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-full ring-1 ring-gray-700 hover:shadow-md transition-all duration-300"
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <Link
                    href={project.liveLink}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-100 to-white hover:from-white hover:to-gray-100 text-gray-900 rounded-xl shadow-lg shadow-white/10 hover:shadow-white/20 transform hover:scale-[1.02] transition-all duration-200"
                  >
                    <span className="font-medium">View Live</span>
                    <Icon icon={FaExternalLinkAlt} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href={project.githubLink}
                    external
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-xl hover:text-white ring-1 ring-gray-700 hover:ring-gray-600 shadow-lg shadow-black/20 hover:shadow-black/40 transform hover:scale-[1.02] transition-all duration-200"
                  >
                    <Icon icon={FaGithub} className="mr-2" />
                    <span className="font-medium">View Code</span>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
} 