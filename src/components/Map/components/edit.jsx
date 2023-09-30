import React, { useEffect, useState } from "react";
import { Button, Input, Group, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { MapProvider } from "../../../contexts/map";
import { IconTrash } from "@tabler/icons-react";

const EditBranch = (props) => {
  // use map once
  const mapContext = React.useContext(MapProvider);
  const { t } = useTranslation();
  const [name, setName] = useState("");
  function submitFunc() {
    props.editMark(mapContext.selectedMarker?.id,name);
    setName("");
  }
  useEffect(() => {
    setName(mapContext.selectedMarker.name);
  }, [mapContext.selectedMarker.name])
  return (
    <Box>
      <Box>
        <Group>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("define_accomodation.branch_name")}
          />
          <Button
            onClick={() => {
              props.handlers.toggle();
            }}
            variant="light"
            color="warning"
          >
            {t("cancel")}
          </Button>
          <Button variant="filled" color="success" onClick={() => submitFunc()}>
            {t("submit")}
          </Button>
          <Button
            onClick={() => {
              props.deleteMark(mapContext.selectedMarker.id);
            }}
            variant="light"
            color="error"
          >
            <IconTrash />
          </Button>
        </Group>
      </Box>
    </Box>
  );
};

export default EditBranch;
