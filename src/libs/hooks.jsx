import { useMatch, useLocation } from "react-router-dom";

let pat = {
  title: "menu.settings.title",
  icon: "",
  children: [
    {
      title: "menu.settings.define_accomodation",
      path: "/settings",
      element: <h2>XYSZ</h2>,
    },
  ],
};

export const useCurrentPath = ({ routes }) => {
  if (!routes) return null;
  const location = useLocation();
  const route = useMatch(pat,location.pathname);

  console.log(route.path);

  return route.path;
};
