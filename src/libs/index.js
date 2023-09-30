export function DirectionDetector() {
  const lang = localStorage.getItem("lang");
  switch (lang) {
    case !lang:
      document.documentElement.setAttribute("dir", "rtl");
      break;
    case "pr":
      document.documentElement.setAttribute("dir", "rtl");
      break;
    case "aq":
      document.documentElement.setAttribute("dir", "rtl");
      break;
    case "en":
      document.documentElement.setAttribute("dir", "ltr");
      break;
    case "tr":
      document.documentElement.setAttribute("dir", "ltr");
    default:
      break;
  }
}