// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async'; // Importar HelmetProvider
import App from './App.jsx';
import theme from './styles/theme'; // Importar nosso tema customizado
// Opcional: Importar CSS base se não estiver sendo importado em App.jsx ou index.html
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* Envolver com HelmetProvider */}
      <ChakraProvider theme={theme}>
        {/* ColorModeScript garante que o tema correto seja aplicado antes do render inicial */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>,
);