// src/components/SkillBar.jsx
import { Box, Text, Progress, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SkillBar = ({ name, level, icon }) => {
  const progressColorScheme = useColorModeValue('blue', 'teal'); // Esquema de cores diferente para claro/escuro

  return (
    <Box mb={4}>
      <Flex justify="space-between" align="center" mb={1}>
        <Flex align="center">
          {icon && <Icon as={icon} mr={2} boxSize={5} />} {/* Exibe o ícone se fornecido */}
          <Text fontWeight="medium">{name}</Text>
        </Flex>
        <Text fontSize="sm" color="gray.500">{level}%</Text>
      </Flex>
      <Progress
        value={level}
        size="sm"
        colorScheme={progressColorScheme}
        borderRadius="md" // Bordas arredondadas
        hasStripe // Adiciona listras
        isAnimated // Anima as listras
      />
    </Box>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  icon: PropTypes.elementType, // Aceita um componente React (como os ícones de react-icons)
};

export default SkillBar;