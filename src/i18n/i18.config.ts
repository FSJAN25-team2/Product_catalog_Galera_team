import i18n from "i18next";                      
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },

    // Translation messages. Add any languages
    // you want here.
    resources: {
      // English
      en: {
        // `translation` is the default namespace.
        // More details about namespaces shortly.
        translation: {
          hello_world: "Hello, World!",
        },
      },
      // Ukrainian
      uk: {
        translation: {
          hello_world: "Привіт, світе!",
        },
      },
    },
  });

export default i18n;
