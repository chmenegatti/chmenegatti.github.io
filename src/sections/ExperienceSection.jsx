// src/sections/ExperienceSection.jsx
import { Box, Heading, Text, VStack, List, ListItem, ListIcon, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resumeData';
import { MdCheckCircle } from 'react-icons/md'; // Ícone para lista

const ExperienceSection = ({ id }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardBorder = useColorModeValue('gray.200', 'gray.600');

  return (
    <SectionWrapper id={id} title="Experiência Profissional">
      <VStack spacing={8} align="stretch">
        {resumeData.experience.map((job, index) => (
          <Box
            key={index}
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={cardBorder}
            bg={cardBg}
            boxShadow="md" // Sombra sutil
          >
            <Heading as="h3" size="md">{job.title}</Heading>
            <Text fontWeight="semibold" color="brand.primary">{job.company}</Text>
            <Text fontSize="sm" color="gray.500" mb={3}>{job.period} | {job.location}</Text>
            <List spacing={2}>
              {job.description.map((item, idx) => (
                <ListItem key={idx} display="flex" alignItems="center">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </VStack>
    </SectionWrapper>
  );
};

ExperienceSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ExperienceSection;