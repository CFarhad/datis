import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Group,
  Skeleton,
  Image,
  Center,
  Button,
  Box,
  Loader,
  ScrollArea,
  Flex,
  Breadcrumbs,
  Anchor,
  useDirection,
  Input,
  Text,
} from "@mantine/core";
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Language from "../../components/Language";
import { Suspense } from "react";
import { PublicRoutes } from "../../routes/public";
import MenuBar from "../../components/MenuBar";
import XBreadcrumbs from "../../components/Breadcrumbs";
import {
  IconChevronLeft,
  IconChevronRight,
  IconSearch,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";

function Dashboard() {
  const { dir } = useDirection();
  const [opened, { toggle }] = useDisclosure();
  const routes = PublicRoutes[0].children;
  const {t} = useTranslation();

  return (
    <AppShell
      layout="alt"
      header={{ height: {base:180,md:120} }}
      navbar={{ width: 300, breakpoint: "md", collapsed: { mobile: !opened } }}
      padding="md"
      transitionDuration={300}

    >
      <AppShell.Header>
        <Flex direction="column">
          <Flex justify="space-between" hiddenFrom="md" align="center" h="100%" p="md">
            <Burger opened={opened} onClick={toggle} size="sm" />
            <Text c="primary">RAHAD</Text>
            <Button variant="subtle" px="xs">
              <IconSearch />
            </Button>
          </Flex>
          <Header />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <Box pos="absolute" left={10} top={10}></Box>
        <Center>
          <Link to="/">
            <Image h={61} src={logo} />
          </Link>
        </Center>
        <AppShell.Section grow my="md" component={ScrollArea}>
          <MenuBar routes={routes} />
        </AppShell.Section>
        <AppShell.Section>
          <Language size="sm" fullWidth={true} />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main h="100vh">
        <Suspense
          fallback={
            <Box h="100vg">
              <Center>
                <Loader />
              </Center>
            </Box>
          }
        >
          <Flex justify={{base:"center",md:"space-between"}}>
            <Breadcrumbs
              separator={
                dir === "rtl" ? (
                  <IconChevronLeft size={15} />
                ) : (
                  <IconChevronRight size={15} />
                )
              }
            >
              {XBreadcrumbs({ routes })}
            </Breadcrumbs>
            <Input
            visibleFrom="md"
              styles={{
                wrapper: {
                  boxShadow: "0px 0px 8px 0px rgba(8, 117, 146, 0.30)",
                  borderRadius: "10px",
                },
              }}
              size="md"
              rightSection={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M3.29 19.6346L6.69 16.2115C5.59301 14.8003 4.99779 13.0577 5 11.2637C5 9.66597 5.46919 8.10415 6.34824 6.77571C7.22729 5.44727 8.47672 4.41188 9.93853 3.80046C11.4003 3.18905 13.0089 3.02907 14.5607 3.34077C16.1126 3.65247 17.538 4.42183 18.6569 5.55158C19.7757 6.68132 20.5376 8.12071 20.8463 9.68771C21.155 11.2547 20.9965 12.879 20.391 14.355C19.7855 15.8311 18.7602 17.0928 17.4446 17.9804C16.129 18.868 14.5822 19.3418 13 19.3418C11.2233 19.344 9.49754 18.743 8.1 17.6353L4.71 21.0685C4.61703 21.1631 4.50643 21.2383 4.38457 21.2895C4.26271 21.3408 4.13201 21.3672 4 21.3672C3.86798 21.3672 3.73728 21.3408 3.61542 21.2895C3.49356 21.2383 3.38296 21.1631 3.29 21.0685C3.19627 20.9746 3.12187 20.8629 3.0711 20.7399C3.02034 20.6168 2.9942 20.4849 2.9942 20.3516C2.9942 20.2183 3.02034 20.0863 3.0711 19.9632C3.12187 19.8402 3.19627 19.7285 3.29 19.6346ZM19 11.2637C19 10.0654 18.6481 8.89403 17.9888 7.8977C17.3295 6.90137 16.3925 6.12483 15.2961 5.66626C14.1997 5.2077 12.9933 5.08772 11.8295 5.3215C10.6656 5.55527 9.59647 6.13229 8.75736 6.9796C7.91824 7.82691 7.3468 8.90645 7.11528 10.0817C6.88377 11.257 7.00259 12.4751 7.45672 13.5822C7.91084 14.6893 8.67988 15.6355 9.66657 16.3012C10.6533 16.9669 11.8133 17.3223 13 17.3223C14.5913 17.3223 16.1174 16.684 17.2426 15.5477C18.3679 14.4115 19 12.8705 19 11.2637Z"
                    fill="#087592"
                  />
                </svg>
              }
              placeholder={t("forms.quick_search")}
            />
          </Flex>
          <Box pb="xl">
            <Outlet />
          </Box>
        </Suspense>
      </AppShell.Main>
    </AppShell>
  );
}

export default Dashboard;
