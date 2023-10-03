import { useEffect, useLayoutEffect, useState } from "react";
import {
  Container,
  Flex,
  Image,
  Paper,
  Radio,
  RadioGroup,
  Space,
  Text,
  CheckIcon,
  useDirection,
  LoadingOverlay,
} from "@mantine/core";
import iran from "@/assets/icons/iran.svg";
import iraq from "@/assets/icons/iraq.svg";
import turkey from "@/assets/icons/turkey.svg";
import english from "@/assets/icons/english.svg";
import style from "./style.module.css";

const langs = [
  { value: "fa", label: "فارسی", icon: iran },
  { value: "aq", label: "عربي", icon: iraq },
  { value: "tr", label: "Türkçe", icon: turkey },
  { value: "en", label: "English", icon: english },
];

const Language = () => {
  const { dir,toggleDirection } = useDirection();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "fa");
  const [loading, setLoading] = useState(false);
  useLayoutEffect(() => {
    const val = localStorage.getItem("lang");
    setLang(val);
  }, []);
  function onChange(value) {
    setLang(value);
    switch (value) {
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
  }
  return (
    <div>
      <Container size="sm" pos="relative">
        <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm" }} />
        <RadioGroup defaultValue={lang} value={lang} name="language" onChange={onChange}>
          {langs.map((item, index) => (
            <Paper classNames={{
                root:style.root
            }} onClick={() => onChange(item.value)} key={index} withBorder shadow="none" p="sm" my="sm">
              <Flex align="center" justify="space-between">
                <Flex>
                  <Radio
                    value={item.value}
                    label={item.label}
                    icon={CheckIcon}
                  />
                </Flex>
                <Image src={item.icon} />
              </Flex>
            </Paper>
          ))}
        </RadioGroup>
      </Container>
    </div>
  );
};

export default Language;
