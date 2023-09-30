import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

let lang = localStorage.getItem("lang");
if(!lang) lang = "fa";
i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: lang,
    supportedLngs: ["en", "fa", "tr", "aq"],
    fallbackLng: "fa",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection:{
      caches:["localStorage","cookie"]
    }
  });

export default i18next;
