// src/sections/HeaderSection.jsx
import { Flex, Heading, Text, Avatar, Link, IconButton, useColorModeValue, VStack, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { resumeData } from '../data/resumeData'; // Importar dados

// Componente "animável"
const MotionFlex = motion(Flex);

const HeaderSection = ({ id }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.700'); // Fundo sutilmente diferente
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <MotionFlex
      id={id} // Para navegação, se necessário apontar diretamente pro header
      direction={{ base: 'column', md: 'row' }} // Coluna no mobile, linha no desktop
      align="center"
      justify="space-between"
      p={{ base: 5, md: 10 }}
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Flex align="center" mb={{ base: 4, md: 0 }}>
        {/* Adicione a foto se o path estiver definido e a foto existir */}
        {resumeData.profilePic && (
          <Avatar
            size="xl"
            name={resumeData.name}
            src={resumeData.profilePic}
            mr={6} // Margem à direita
            showBorder
            borderColor={borderColor}
          />
        )}
        <VStack align="flex-start" spacing={0}>
          <Heading as="h1" size="xl">
            {resumeData.name}
          </Heading>
          <Text fontSize="lg" color="brand.secondary">
            {resumeData.title}
          </Text>
        </VStack>
      </Flex>

      {/* Links Sociais */}
      <HStack spacing={3}>
        {resumeData.socialLinks.map((social) => (
          <Link key={social.name} href={social.url} isExternal>
            <IconButton
              aria-label={social.name}
              icon={<social.icon size="20px" />} // Ajuste o tamanho conforme necessário
              variant="ghost"
              size="md"
              color="gray.500"
              _hover={{ color: 'brand.primary' }} // Cor no hover
            />
          </Link>
        ))}
      </HStack>
    </MotionFlex>
  );
};

HeaderSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default HeaderSection;