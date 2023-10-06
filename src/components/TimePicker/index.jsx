import {
  Flex,
  Group,
  NumberInput,
  Text,
  TextInput,
  useDirection,
} from "@mantine/core";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { number } from "yup";

const TimePicker = ({name,onChange}) => {
  const { dir } = useDirection();
  const { t } = useTranslation();
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(30);

  const [time, setTime] = useState({ hour: "", minute: "" });

  function minuteBlur(e) {
    if(!Number.isInteger(+e.target.value)) return setTime({ ...time, minute: "00" });
    let val = time.minute;
    // if val is less than 10 add zero prev it and if it has a zero dont do that
    if (val < 10 && val.length === 1) {
      val = `0${val}`;
    }
    // if val is less than 0 set it to 0
    if (val < 0) {
      val = "00";
    }
    // if val is greater than 59 set it to 59
    if (val > 59) {
      val = 59;
    }
    setTime({ ...time, minute: val });
  }

  //   create hourBlur function
  function hourBlur(e) {
    if(!Number.isInteger(+e.target.value)) return setTime({ ...time, hour: "00" });
    let val = time.hour;
    // if val is less than 10 add zero prev it and if it has a zero dont do that
    if (val < 10 && val.length === 1) {
      val = `0${val}`;
    }
    // if val is less than 0 set it to 0
    if (val < 0) {
      val = "00";
    }
    
    // if val is greater than 59 set it to 59
    if (val > 23) {
      val = 23;
    }
    setTime({ ...time, hour: val });
  }
  
  useEffect(() => {
    onChange(name,`${time.hour}:${time.minute}`);
  },[time])

  return (
    <Flex display="flex" direction={dir === "rtl" ? "row" : "row-reverse"}>
      <Flex direction="column" align="center">
        <TextInput
          value={time.minute}
          onBlur={minuteBlur}
          onChange={(e) => setTime({ ...time, minute: e.target.value })}
          placeholder="30"
          type="text"
          step={1}
          classNames={{ input: styles.input }}
          variant="filled"
          styles={{
            input: {
              height: 60,
            },
          }}
          w={100}
          min={0}
          max={59}
        />
        <Text size="sm">{t("forms.minute")}</Text>
      </Flex>
      <Text fz={35} mx="sm">
        :
      </Text>
      <Flex direction="column" align="center">
        <TextInput
          value={time.hour}
          onBlur={hourBlur}
          onChange={(e) => setTime({ ...time, hour: e.target.value })}
          placeholder="12"
          type="text"
          step={1}
          classNames={{ input: styles.input }}
          variant="filled"
          styles={{
            input: {
              height: 60,
            },
          }}
          w={100}
          min={0}
          max={23}
        />
        <Text size="sm">{t("forms.hour")}</Text>
      </Flex>
    </Flex>
  );
};

export default TimePicker;
