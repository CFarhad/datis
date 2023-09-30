import React, { memo, useEffect, useState } from "react";
import {
  useLocation,
  Link,
  useParams,
  NavLink as RNavLink,
} from "react-router-dom";
import { Box, NavLink, useDirection } from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCircleDot,
  IconPointFilled,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import { useForceUpdate } from "@mantine/hooks";

const MenuBar = memo(function MenuBar({ routes }) {
  const { dir } = useDirection();
  const { pathname } = useLocation();
  const params = useParams();
  const [activeMenu, setActiveMenu] = useState(pathname);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const { t } = useTranslation();

  function activeNav(parent, child) {}

  useEffect(() => {
    const route = routes.find((route) => route.path === pathname);
    setSelectedRoute(route);
  }, [pathname]);

  return (
    <>
      {routes.map((route, index) => {
        if (route.children)
          return (
            <Box key={index}>
              <NavLink
                defaultOpened={route.children.find((item) => item.path === pathname)
                  ? true
                  : false}
                component={RNavLink}
                active={
                  route.children.find((item) => item.path === pathname)
                    ? true
                    : false
                }
                styles={(theme) => ({
                  body: {
                    textAlign: dir === "rtl" ? "right" : "left",
                  },
                  section: {
                    stroke: route.children.find(
                      (item) => item.path === pathname
                    )
                      ? "white"
                      : theme.colors.primary[5],
                  },
                })}
                classNames={{
                  root: styles.root,
                  label: styles.label,
                  section: styles.section,
                }}
                leftSection={route?.icon}
                rightSection={
                  dir === "rtl" ? (
                    <IconChevronLeft color="inherit" size={20} stroke={2.5} />
                  ) : (
                    <IconChevronRight color="inherit" size={20} stroke={2.5} />
                  )
                }
                label={t(`${route?.title}`)}
              >
                {route.children.map((child, index2) => (
                  <NavLink
                    mt={5}
                    leftSection={<IconCircleDot size={15} stroke={2.5} />}
                    styles={(theme) => ({
                      body: {
                        textAlign: dir === "rtl" ? "right" : "left",
                      },
                      root: {
                        borderRadius: "10px",
                      },
                    })}
                    key={index2}
                    label={t(`${child.title}`)}
                    active={pathname === child.path ? true : false}
                    component={RNavLink}
                    to={`${child.path}`}
                    end
                  />
                ))}
              </NavLink>
            </Box>
          );
        else
          return (
            <Box key={index}>
              <NavLink
                leftSection={route?.icon}
                classNames={{
                  root: styles.root,
                  section: styles.section,
                }}
                styles={(theme) => ({
                  section: {
                    stroke:
                      selectedRoute?.path === route.path
                        ? "white"
                        : theme.colors.primary[5],
                  },
                  body: {
                    textAlign: dir === "rtl" ? "right" : "left",
                  },
                })}
                key={index}
                label={t(`${route.title}`)}
                active={
                  route.path
                    ? selectedRoute?.path === route.path
                      ? true
                      : false
                    : false
                }
                component={Link}
                to={`${route.path}`}
              />
            </Box>
          );
      })}
    </>
  );
});

export default MenuBar;
