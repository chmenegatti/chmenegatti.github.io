// src/sections/SkillsSection.jsx
import { SimpleGrid, Box, Heading, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SectionWrapper from '../components/SectionWrapper';
import SkillBar from '../components/SkillBar';
import { resumeData } from '../data/resumeData';

const SkillsSection = ({ id }) => {
  const subHeadingColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <SectionWrapper id={id} title="Habilidades Técnicas">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Habilidades Principais */}
        <Box>
          <Heading size="md" mb={4} color={subHeadingColor}>Principais (Go & Node.js)</Heading>
          {resumeData.skills.main.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </Box>

        {/* Habilidades Secundárias */}
        <Box>
          <Heading size="md" mb={4} color={subHeadingColor}>Outras Linguagens</Heading>
          {resumeData.skills.secondary.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </Box>

         {/* Bancos de Dados */}
        <Box>
          <Heading size="md" mb={4} color={subHeadingColor}>Bancos de Dados</Heading>
          {resumeData.skills.databases.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </Box>

         {/* Ferramentas e DevOps */}
        <Box>
          <Heading size="md" mb={4} color={subHeadingColor}>Ferramentas & DevOps</Heading>
          {resumeData.skills.tools.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </Box>

        {/* Adicione mais grids para outras categorias (Frontend, Cloud, etc.) */}

      </SimpleGrid>
    </SectionWrapper>
  );
};

SkillsSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SkillsSection;