// src/components/SectionWrapper.jsx
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Criar um componente Box "animável" com Framer Motion
const MotionBox = motion(Box);

const SectionWrapper = ({ id, title, children, ...rest }) => {
  const headingColor = useColorModeValue('brand.primary', 'teal.300');

  return (
    // Aplicar a animação ao container da seção
    <MotionBox
      id={id} // ID para o smooth scroll
      as="section"
      py={{ base: 10, md: 16 }} // Padding vertical responsivo
      px={{ base: 4, md: 8 }}
      initial={{ opacity: 0, y: 20 }} // Estado inicial da animação
      whileInView={{ opacity: 1, y: 0 }} // Anima ao entrar na viewport
      viewport={{ once: true, amount: 0.2 }} // `once: true` anima só uma vez, `amount` define quanto do elemento precisa estar visível
      transition={{ duration: 0.6 }} // Duração da animação
      {...rest}
    >
      {title && (
        <Heading
          as="h2"
          size="xl" // Tamanho do título da seção
          mb={8} // Margem inferior
          textAlign="center"
          color={headingColor}
        >
          {title}
        </Heading>
      )}
      {children}
    </MotionBox>
  );
};

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired, // ID é obrigatório para navegação
  title: PropTypes.string, // Título é opcional
  children: PropTypes.node.isRequired, // Conteúdo da seção é obrigatório
};

export default SectionWrapper;