// src/App.jsx
import { Box, Container, Link, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async'; // Importar Helmet

// Importar Componentes e Seções
import DarkModeSwitch from './components/DarkModeSwitch';
import HeaderSection from './sections/HeaderSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import { resumeData } from './data/resumeData'; // Para usar o nome no título

function App() {
  const bgColor = useColorModeValue('brand.backgroundLight', 'brand.backgroundDark');
  const footerBorderColor = useColorModeValue('gray.200', 'gray.600');
  const footerTextColor = useColorModeValue('gray.600', 'gray.400');

  // IDs para navegação
  const sectionIds = {
    header: 'header',
    about: 'sobre',
    skills: 'habilidades',
    experience: 'experiencia',
    education: 'educacao',
    projects: 'projetos',
    contact: 'contato',
  };

  return (
    <Box bg={bgColor} minH="100vh"> {/* Garante que o fundo cubra toda a altura */}
      {/* Configuração de SEO com Helmet */}
      <Helmet>
        <title>{resumeData.name} - {resumeData.title}</title>
        <meta name="description" content={`Currículo online de ${resumeData.name}, ${resumeData.title}. Habilidades em ${resumeData.skills.main.map(s=>s.name).join(', ')} e mais.`} />
        {/* Adicione outras meta tags se necessário (keywords, author, etc.) */}
        <link rel="canonical" href="URL_DO_SEU_SITE_DEPLOYADO" /> {/* Atualizar após deploy */}
      </Helmet>

      {/* Botão Dark Mode posicionado */}
      <DarkModeSwitch position="fixed" top={1} right={4} zIndex="tooltip" />

      {/* Navegação Fixa (Opcional - Exemplo Simples) */}
      <Flex
        as="nav"
        position="sticky" // Ou 'fixed' se preferir
        top="0"
        zIndex="sticky" // Acima do conteúdo
        bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')} // Fundo com transparência
        backdropFilter="blur(10px)" // Efeito de desfoque
        px={4}
        py={2}
        justify="center"
        boxShadow="sm"
        display={{ base: 'none', md: 'flex'}} // Esconder no mobile por simplicidade
      >
        <Link href={`#${sectionIds.about}`} px={3} py={1} rounded="md" _hover={{ bg: useColorModeValue('gray.100', 'gray.700')}}>Sobre</Link>
        <Link href={`#${sectionIds.skills}`} px={3} py={1} rounded="md" _hover={{ bg: useColorModeValue('gray.100', 'gray.700')}}>Habilidades</Link>
        <Link href={`#${sectionIds.experience}`} px={3} py={1} rounded="md" _hover={{ bg: useColorModeValue('gray.100', 'gray.700')}}>Experiência</Link>
        <Link href={`#${sectionIds.education}`} px={3} py={1} rounded="md" _hover={{ bg: useColorModeValue('gray.100', 'gray.700')}}>Educação</Link>
        <Link href={`#${sectionIds.projects}`} px={3} py={1} rounded="md" _hover={{ bg: useColorModeValue('gray.100', 'gray.700')}}>Projetos</Link>
        <Link href={`#${sectionIds.contact}`} px={3} py={1} rounded="md" _hover={{ bg: useColorModeValue('gray.100', 'gray.700')}}>Contato</Link>
      </Flex>


      {/* Conteúdo Principal */}
      <Container maxW="container.xl" pt={0} px={0}> {/* Remover padding do container pai */}
        <HeaderSection id={sectionIds.header} />
        <main>
          <AboutSection id={sectionIds.about} />
          <SkillsSection id={sectionIds.skills} />
          <ExperienceSection id={sectionIds.experience} />
          <EducationSection id={sectionIds.education} />
          <ProjectsSection id={sectionIds.projects} />
          <ContactSection id={sectionIds.contact} />
        </main>
      </Container>

      {/* Footer Simples */}
      <Box as="footer" py={6} borderTop="1px" borderColor={footerBorderColor} mt={10}>
        <Text textAlign="center" fontSize="sm" color={footerTextColor}>
          © {new Date().getFullYear()} {resumeData.name}. Todos os direitos reservados.
          {/* Opcional: Link para o código fonte */}
          {' | '}
          <Link href="https://github.com/yourusername/meu-curriculo-spa" isExternal>
            Código Fonte no GitHub
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

export default App;