import { Flex, Group, NumberInput, Text } from "@mantine/core"
import styles from "./styles.module.css"
import { useState } from "react"
import { useTranslation } from "react-i18next"


const TimePicker = (props) => {
    const {t} = useTranslation();
    return (
        <Group>
            <Flex direction="column" align="center">
                <NumberInput placeholder="30" type="text" step={1} classNames={{input:styles.input}} variant="filled" hideControls w={100} min={0} max={59} />
                <Text size="sm">{t("forms.minute")}</Text>
            </Flex>
            <Text fz={35}>:</Text>
            <Flex direction="column" align="center">
                <NumberInput placeholder="12" type="text" step={1} classNames={{input:styles.input}} variant="filled" hideControls w={100} min={0} max={23} />
                <Text size="sm">{t("forms.hour")}</Text>
            </Flex>
        </Group>
    )
}

export default TimePicker