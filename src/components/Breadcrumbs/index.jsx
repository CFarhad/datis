import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Anchor } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Breadcrumbs = ({ routes }) => {
  const { t } = useTranslation();
  const breadcrumbs = useBreadcrumbs(routes, {
    disableDefaults: false,
    excludePaths: ["/"],
    defaultFormatter: (str) => str,
  });

  return breadcrumbs.map(({ match, breadcrumb }, index) => (
    <Anchor
      fw={index === 0 ? "bold" : null}
      fz={index === 0 ? "22px" : "sm"}
      underline="never"
      key={index}
      component={NavLink}
      to={match.pathname}
    >
      {t(`menu.${breadcrumb?.props?.children}`)}
    </Anchor>
  ));
};

export default Breadcrumbs;
