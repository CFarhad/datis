import {
  Flex,
  Burger,
  Text,
  Button,
  ActionIcon,
  Image,
  Transition,
  Box,
  Input,
  Center,
  Container,
} from "@mantine/core";
import Header from "../Header";
import { useDisclosure } from "@mantine/hooks";
import closeCircle from "@/assets/icons/close_circle.svg";
import { useTranslation } from "react-i18next";
import {SearchIcon} from "@/components";

const TopHeader = ({ opened, menuToggler }) => {
  const [searchOpened, searchToggler] = useDisclosure();
  return (
    <Flex direction="column">
      <Flex
        justify="space-between"
        hiddenFrom="md"
        align="center"
        h="100%"
        p="md"
      >
        <Burger
          opened={opened}
          onClick={() => menuToggler.toggle()}
          size="sm"
        />
        <Text c="primary">RAHAD</Text>
        <ActionIcon variant="white" onClick={() => searchToggler.toggle()}>
          {!searchOpened ? (
            <SearchIcon />
          ) : (
            <Image src={closeCircle} />
          )}
        </ActionIcon>
      </Flex>
      {searchOpened ? <SearchHeader /> : <Header />}
    </Flex>
  );
};

const SearchHeader = (props) => {
  const { t } = useTranslation();
  return (
    <Center w="80%" mx="auto" mt="xl">
      <Input
        rightSection={
          <ActionIcon variant="white" style={{ cursor: "pointer" }}>
            <SearchIcon />
          </ActionIcon>
        }
        w="100%"
        size="md"
        placeholder={t("forms.quick_search")}
        styles={{
          input: {
            fontSize: "12px",
          },
          wrapper: {
            boxShadow: "0px 0px 8px 0px rgba(8, 117, 146, 0.30)",
            borderRadius: "10px",
          },
        }}
      />
    </Center>
  );
};

export default TopHeader;
