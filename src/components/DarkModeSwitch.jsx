// src/components/DarkModeSwitch.jsx
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types'; 


const DarkModeSwitch = ({ size = "md", ...rest }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      icon={isDark ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      variant="ghost" // Estilo sutil
      size={size}
      {...rest} // Permite passar outras props (como position, top, right)
    />
  );
};

// Definindo PropTypes
DarkModeSwitch.propTypes = {
  size: PropTypes.string, // Tamanho do botão (e.g., 'sm', 'md', 'lg')
  // Você pode adicionar mais validações se passar outras props via ...rest
};

export default DarkModeSwitch;