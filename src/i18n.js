import i18n from "i18next";
// import Backend from "./lib/services/i18nFetch";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
// import {FetchBackend, ajaxFetch} from "./lib/services/i18nFetch";


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
        fallbackLng: {
            "en-US": ["en-GB","en"],
            "no": ["nb"],
            default: ["en"],
          },

        // have a common namespace used around the full app
        ns: "Header",
        defaultNS: "Header",

        debug: true,
        // saveMissing: true,
        // backend: {
        //     loadPath: "./locales/{{lng}}/{{ns}}.json",
        //     addPath: "./locales/{{lng}}/{{ns}}.json",
        //     parse: (data) => data,
        //     ajax: loadLocales
        // },
        interpolation: {
            escapeValue: false, // not needed for react!!
           
        },

        react: {
            wait: true
        }
    });



export default i18n;

