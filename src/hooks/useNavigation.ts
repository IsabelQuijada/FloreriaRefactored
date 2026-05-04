import { useLocation, useNavigate } from 'react-router-dom';

export function useNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToHomeSection = (sectionId: string) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
      return;
    }
    navigate('/');
    window.setTimeout(() => scrollToSection(sectionId), 120);
  };

  return { scrollToSection, goToHomeSection };
}
