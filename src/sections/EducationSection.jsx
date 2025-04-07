// src/sections/EducationSection.jsx
import { Box, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resumeData';

const EducationSection = ({ id }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardBorder = useColorModeValue('gray.200', 'gray.600');

  return (
    <SectionWrapper id={id} title="Educação e Certificações">
      <VStack spacing={6} align="stretch">
        {resumeData.education.map((edu, index) => (
          <Box
            key={index}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={cardBorder}
            bg={cardBg}
            boxShadow="sm"
          >
            <Heading as="h4" size="sm">{edu.degree}</Heading>
            <Text fontWeight="medium">{edu.institution}</Text>
            <Text fontSize="sm" color="gray.500">{edu.period}</Text>
          </Box>
        ))}
      </VStack>
    </SectionWrapper>
  );
};

EducationSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EducationSection;