// src/styles/theme.js
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#2b6cb0', // Azul um pouco mais escuro
    secondary: '#4a5568', // Cinza escuro
    backgroundLight: '#ffffff',
    textLight: '#1a202c',
    backgroundDark: '#1a202c', // Cinza bem escuro/preto
    textDark: '#e2e8f0', // Cinza claro
  },
};

const config = {
  initialColorMode: 'light', // Pode ser 'light', 'dark' ou 'system'
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    'html, body': {
      // Transição suave de cor ao trocar de tema
      transitionProperty: 'background-color',
      transitionDuration: '0.2s',
      lineHeight: 'tall', // Melhora a legibilidade
    },
    // Estilo para o smooth scroll
    html: {
      scrollBehavior: 'smooth',
    },
    // Estilos específicos para modo claro/escuro se necessário
    body: {
      bg: props.colorMode === 'dark' ? 'brand.backgroundDark' : 'brand.backgroundLight',
      color: props.colorMode === 'dark' ? 'brand.textDark' : 'brand.textLight',
    },
    // Estilizando links globais se desejar
    a: {
      color: props.colorMode === 'dark' ? 'teal.300' : 'brand.primary',
      _hover: {
        textDecoration: 'underline',
      },
    },
  }),
};

const theme = extendTheme({ config, colors, styles });

export default theme;