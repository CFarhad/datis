import React,{useState} from "react";
import { Button,Input,Group,Box } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { MapProvider } from "../../../contexts/map";

const AddBranch = (props) => {
  // use map once
  const mapContext = React.useContext(MapProvider);
  const { t } = useTranslation();
  const [name, setName] = useState("");
  function submitFunc() {
    props.addNewMark(name, randomId());
    setName("");
  }
  return (
    <Box>
      <Box>
        <Group>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("define_accomodation.branch_name")}
          />
          {mapContext.mode === "add" ? (
            <Button
              onClick={() => props.handlers.toggle()}
              variant="light"
              color="error"
            >
              {t("cancel")}
            </Button>
          ) : (
            <Button
              onClick={() => props.handlers.toggle()}
              variant="light"
              color="error"
            >
              {t("delete")}
            </Button>
          )}
          <Button variant="filled" color="success" onClick={() => submitFunc()}>
            {t("submit")}
          </Button>
        </Group>
      </Box>
    </Box>
  );
};

export default AddBranch;
