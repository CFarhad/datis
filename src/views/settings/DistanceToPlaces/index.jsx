import {
  Flex,
  Box,
  Text,
  Group,
  Button,
  ActionIcon,
  Image,
} from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import addCircleIcon from "@/assets/icons/add-circle.svg";
import trashIcon from "@/assets/icons/trash.svg"

function DistanceToPlaces() {
  const { t } = useTranslation();
  return (
    <Box mt={{ base: "xl", lg: "xs" }}س>
      <Flex align="center" justify="space-between">
        <Text size="xl" fw="medium">{t("distance_to_places.important_places_around_hotel")}</Text>
        <Group>
        <Button
            variant="outline"
            color="error"
            leftSection={
              <ActionIcon variant="white">
                <Image src={trashIcon} style={{stroke:"red"}} />
              </ActionIcon>
            }
          >
            {t("delete")} {t("location")}
          </Button>
          <Button
            variant="outline"
            leftSection={
              <ActionIcon variant="white">
                <Image src={addCircleIcon} />
              </ActionIcon>
            }
          >
            {t("add")} {t("new")} {t("location")}
          </Button>
        </Group>
      </Flex>
    </Box>
  );
}

export default DistanceToPlaces;
