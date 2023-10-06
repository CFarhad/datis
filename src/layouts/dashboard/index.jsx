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
  Container,
  ActionIcon,
} from "@mantine/core";
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Language from "../../components/Language";
import { Suspense } from "react";
import { PublicRoutes } from "../../routes/public";
import MenuBar from "../../components/MenuBar";
import XBreadcrumbs from "../../components/Breadcrumbs";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { TopHeader } from "@/components";
import { SearchIcon } from "@/components";

function Dashboard(props) {
  const { dir } = useDirection();
  const [opened, menuToggler] = useDisclosure();
  const routes = PublicRoutes[0].children;
  const { t } = useTranslation();

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 180, md: 120 } }}
      navbar={{ width: 300, breakpoint: "md", collapsed: { mobile: !opened } }}
      padding="md"
      transitionDuration={300}
    >
      <AppShell.Header>
        <TopHeader menuToggler={menuToggler} opened={opened} />
      </AppShell.Header>
      <AppShell.Navbar p="md" pt={0}>
        <Burger
          opened={opened}
          onClick={() => menuToggler.toggle()}
          hiddenFrom="md"
          size="sm"
        />
        <Box h={{ base: 180, md: 120 }} display="flex" style={{alignItems:"center",justifyContent:"center"}}>
        <Link to="/">
              <Image h={61} src={logo} />
            </Link>
        </Box>
        <AppShell.Section grow my="md" mt={0} component={ScrollArea}>
          <MenuBar routes={routes} MenuToggle={menuToggler} />
        </AppShell.Section>
        <AppShell.Section>{/* PROFILE */}</AppShell.Section>
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
          <Flex justify={{ base: "center", md: "space-between" }}>
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
                input: {
                  fontSize: "12px",
                },
                wrapper: {
                  boxShadow: "0px 0px 8px 0px rgba(8, 117, 146, 0.30)",
                  borderRadius: "10px",
                },
              }}
              w="300"
              size="md"
              rightSection={
                <ActionIcon variant="white" style={{ cursor: "pointer" }}>
                  <SearchIcon />
                </ActionIcon>
              }
              placeholder={t("forms.quick_search")}
            />
          </Flex>
          <Container size="xl" mt="37.45px" pb="xl">
            <Outlet />
          </Container>
        </Suspense>
      </AppShell.Main>
    </AppShell>
  );
}

export default Dashboard;
