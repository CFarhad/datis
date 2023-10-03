import React, {
  useState,
  useMemo,
  useRef,
  useId,
  useEffect,
  createContext,
  memo,
} from "react";
import { Box, Button, ColorInput, Group, Input, Text } from "@mantine/core";
import { useDisclosure, randomId, useDebouncedState } from "@mantine/hooks";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import { useTranslation } from "react-i18next";
import { IconCirclePlus, IconMap } from "@tabler/icons-react";
import MapMarker from "../../assets/icons/mapmarker.svg";
import { MapProvider } from "../../contexts/map";
import EditBranch from "./components/edit";
import AddBranch from "./components/add";
import Mark from "./components/mark";

const GetCenter = (props) => {
  const map = useMap();
  useMapEvent("moveend", () => {
    props.setCenter([map.getCenter().lat, map.getCenter().lng]);
  });
  return;
};

const XMap = (props) => {
  const { t } = useTranslation();
  let [center, setCenter] = useDebouncedState(
    [35.70222474889245, 51.338657483464765],
    200
  );
  let [markers, setMarkers] = useState([]);
  const [opened, handlers] = useDisclosure(false);
  const [mode, setMode] = useState("add");
  const [selectedMarker, setSelectedMark] = useState(null);
  function addNewMark(name, id) {
    if (markers.length === 0)
      setMarkers([{ id: id, name: name, position: center, color: "#15aabf" }]);
    handlers.toggle();
  }
  function editMark(id, name) {
    console.log(id, name);
    let mark = markers.find((mark) => mark.id === id);
    let index = markers.indexOf(mark);
    let marks = [...markers];
    marks[index] = { ...mark, name: name };
    setMarkers(marks);
    handlers.toggle();
  }
  function deleteMark(id) {
    setMarkers(markers.filter((mark) => mark.id !== id));
    handlers.toggle();
  }
  return (
    <Group>
      <MapProvider.Provider
        value={{
          markers: markers,
          setMarkers: setMarkers,
          opened: opened,
          handlers: handlers,
          mode: mode,
          setMode: setMode,
          addNewMark: addNewMark,
          selectedMarker,
          setSelectedMark,
        }}
      >
        <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
          <GetCenter setCenter={setCenter} />
          {markers.map((mark) => (
            <Mark
              id={mark.id}
              mode={mode}
              handlers={handlers}
              key={mark.id}
              lastPosition={mark.position}
              name={mark.name}
            />
          ))}
          <TileLayer
            url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&BBOX=25.0,35.0,42.0,40.0"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
        </MapContainer>
        <Box hidden={opened}>
          {markers.length === 0 && (
            <Button
              leftSection={<IconCirclePlus />}
              onClick={() => {
                handlers.toggle();
                setMode("add");
              }}
              variant="subtle"
            >
              {t("define_accomodation.add_branch")}
            </Button>
          )}
        </Box>
        {opened && mode === "add" && (
          <AddBranch addNewMark={addNewMark} handlers={handlers} />
        )}
        {opened && mode === "edit" && (
          <EditBranch
            deleteMark={deleteMark}
            editMark={editMark}
            handlers={handlers}
          />
        )}
      </MapProvider.Provider>
    </Group>
  );
};

const memoizedXMap =
  (XMap,
  (prevProps, nextProps) => {
    return prevProps.markers === nextProps.markers;
  });

export default memo(XMap, memoizedXMap);
