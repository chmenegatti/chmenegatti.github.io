// src/sections/AboutSection.jsx
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resumeData';

const AboutSection = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Sobre Mim">
      <Text fontSize="lg" textAlign="center" maxW="container.md" mx="auto">
        {resumeData.aboutMe}
      </Text>
    </SectionWrapper>
  );
};

AboutSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AboutSection;