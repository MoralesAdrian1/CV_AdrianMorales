import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        pages: ['Projects', 'Experience', 'Technologies', 'Contact', 'About me'],
        download: 'Download CV',
        name: 'Full Stack Developer',
      },
      card: {
        title: 'Card Title',
        description: 'This is a description',
      },
      // agrega aquí más claves para otros textos
    },
  },
  es: {
    translation: {
      navbar: {
        pages: ['Proyectos', 'Experiencia', 'Tecnologías', 'Contacto', 'Sobre mí'],
        download: 'Descargar CV',
        name: 'Desarollador Full Stack',
      },
      card: {
        title: 'Título de la Tarjeta',
        description: 'Esta es una descripción',
      },
      // agrega aquí más claves para otros textos
    },
  },
};

i18n
  .use(LanguageDetector) // detecta idioma automáticamente
  .use(initReactI18next) // conecta con React
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React ya escapa el output
    },
  });

export default i18n;
