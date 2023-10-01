import {
  Menu,
  Button,
  Combobox,
  InputBase,
  useCombobox,
  Transition,
  Flex,
  Image,
  Box,
  useDirection,
  Text,
  InputPlaceholder
} from "@mantine/core";
import i18next from "i18next";
import classes from "./styles.module.css";
import iraq from "../../assets/icons/iraq.svg";
import iran from "../../assets/icons/iran.svg";
import turkey from "../../assets/icons/turkey.svg";
import english from "../../assets/icons/english.svg";
import { useState } from "react";

const groceries = [
  { icon: iran, value: "fa" },
  { icon: english, value: "en" },
  { icon: turkey, value: "tr" },
  { icon: iraq, value: "aq" },
];
let lang = localStorage.getItem("lang");
if(!lang) lang = "fa";

const Language = ({size,fullWidth}) => {
  const { toggleDirection, dir } = useDirection();
  const [value, setValue] = useState(lang);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const options = groceries.map((item) => (
    <Combobox.Option
      // w={78}
      // h={36}
      my={3}
      value={item.value}
      key={item.value}
      styles={(theme) => ({
        option: {
          padding: "10px",
          display: "flex",
          alignItems: "center",
          background: value === item.value ? theme.colors.gray[1] : "white",
        },
      })}
    >
      <Flex direction={dir === "rtl" ? "row-reverse" : "row"} align="center" justify="space-between" w="100%">
      <Text size="xs" tt="uppercase">{item.value}</Text>
        <Image h={12} w={16} src={item.icon} />
      </Flex>
    </Combobox.Option>
  ));
  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        if (val === value) return;
        setValue(val);
        i18next.changeLanguage(val);
        localStorage.setItem("lang", val);
        switch (val) {
          case "fa":
            dir === "ltr" && toggleDirection();
            break;
          case "aq":
            dir === "ltr" && toggleDirection();
            break;
          case "en":
            dir === "rtl" && toggleDirection();
            break;
          case "tr":
            dir === "rtl" && toggleDirection();
          default:
            break;
        }
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
        size="md"
        component="button"
          onClick={() => combobox.toggleDropdown()}
          pointer
          styles={{
            label: {
              color: "black",
            },
            inner: {
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-around",
            },
          }}
          rightSection={<Image w={30} h={20} src={groceries.find((item) => item.value === value).icon} />}
        >
          <InputPlaceholder><Text tt="uppercase" >{value}</Text></InputPlaceholder>
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown
      >
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default Language;
