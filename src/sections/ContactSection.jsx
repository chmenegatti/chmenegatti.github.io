// src/sections/ContactSection.jsx
import { Box, Text, Link, VStack, Icon, HStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resumeData';
import { MdEmail, MdPhone, MdLink } from 'react-icons/md'; // Ícones de contato

const ContactSection = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Contato">
      <VStack spacing={4} align="center" maxW="container.sm" mx="auto">
        <Text textAlign="center" fontSize="lg">
          Entre em contato:
        </Text>
        <VStack spacing={3} align="start">
          {resumeData.contact.email && (
            <Link href={`mailto:${resumeData.contact.email}`} isExternal>
              <HStack>
                <Icon as={MdEmail} boxSize={5} color="brand.primary" />
                <Text>{resumeData.contact.email}</Text>
              </HStack>
            </Link>
          )}
          {resumeData.contact.phone && (
            <HStack>
              <Icon as={MdPhone} boxSize={5} color="brand.primary" />
              <Text>{resumeData.contact.phone}</Text>
            </HStack>
          )}
          {resumeData.contact.linkedin && (
            <Link href={resumeData.contact.linkedin} isExternal>
                <HStack>
                  <Icon as={MdLink} boxSize={5} color="brand.primary" />
                  <Text>LinkedIn</Text>
                </HStack>
            </Link>
          )}
        </VStack>
        {/* Futuramente, adicionar um formulário de contato aqui se necessário */}
      </VStack>
    </SectionWrapper>
  );
};

ContactSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContactSection;