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
  Text
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
      styles={{
        option: {
          padding: "0 10px 0 5px",
          display: "flex",
          alignItems: "center",
          borderRadius: 8,
          background: value === item.value ? "#F3F3F3" : "white",
          boxShadow:
            value === item.value
              ? "0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
              : "none",
        },
      }}
    >
      <Flex direction={dir === "rtl" ? "row-reverse" : "row"} align="center" justify="space-between" w="100%">
        {value === item.value ? (
          <Box w={3} h="30px" bg="#2A8947" style={{ borderRadius: "9999px" }} />
        ) : (
          ""
        )}
        <Text size="xs" tt="uppercase">{item.value}</Text>
        <Image mr={-4} h={12} w={16} src={item.icon} />
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
        <Button
          onClick={() => combobox.toggleDropdown()}
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
            root: {
              cursor: "pointer",
              width: fullWidth || fullWidth === true ? "100%" : 87,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "transparent",
              padding: "14px 8px",
              borderRadius: "8px",
              border: "1.6px solid #AAAAAA",
              borderBottomLeftRadius: combobox.dropdownOpened ? 0 : "8px",
              borderBottomRightRadius: combobox.dropdownOpened ? 0 : "8px",
            },
          }}
          unstyled
          rightSection={
            <svg
              style={{
                marginTop: 2,
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1012_36172)">
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1012_36172">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        >
          <Text tt="uppercase" >{value}</Text>
        </Button>
      </Combobox.Target>
      <Combobox.Dropdown
        styles={{
          dropdown: {
            marginTop: -8,
            background: "white",
            border: "1.6px solid #AAAAAA",
            borderTopLeftRadius: combobox.dropdownOpened ? 0 : "8px",
            borderTopRightRadius: combobox.dropdownOpened ? 0 : "8px",
            borderTop: combobox.dropdownOpened ? 0 : "1.6px",
          },
        }}
      >
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default Language;
