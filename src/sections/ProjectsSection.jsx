// src/sections/ProjectsSection.jsx
import { Box, Heading, Text, SimpleGrid, Link, Tag, HStack, VStack, useColorModeValue, Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resumeData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Ícones para links

const ProjectsSection = ({ id }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardBorder = useColorModeValue('gray.200', 'gray.600');
  const tagColorScheme = useColorModeValue('blue', 'teal');

  return (
    <SectionWrapper id={id} title="Projetos Pessoais">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {resumeData.projects.map((project, index) => (
          <Box
            key={index}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={cardBorder}
            bg={cardBg}
            boxShadow="md"
            display="flex"
            flexDirection="column" // Para alinhar links no final
            justifyContent="space-between" // Para alinhar links no final
          >
            <VStack align="start" mb={4}>
              <Heading as="h4" size="md">{project.name}</Heading>
              <Text fontSize="sm">{project.description}</Text>
              <HStack spacing={2} wrap="wrap">
                {project.stack.map(tech => (
                  <Tag key={tech} size="sm" colorScheme={tagColorScheme} variant="solid" mt={1}>
                    {tech}
                  </Tag>
                ))}
              </HStack>
            </VStack>

            {/* Links */}
            <HStack spacing={4} mt="auto"> {/* mt="auto" empurra para baixo */}
              {project.githubUrl && (
                <Link href={project.githubUrl} isExternal color="gray.500" _hover={{ color: 'brand.primary' }}>
                  <Icon as={FaGithub} mr={1} /> GitHub
                </Link>
              )}
              {project.liveUrl && (
                <Link href={project.liveUrl} isExternal color="gray.500" _hover={{ color: 'brand.primary' }}>
                  <Icon as={FaExternalLinkAlt} mr={1} /> Demo Online
                </Link>
              )}
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </SectionWrapper>
  );
};

ProjectsSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectsSection;