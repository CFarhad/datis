import React,{useState,useMemo,useRef,useEffect} from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import { MapProvider } from "../../../contexts/map";
import { Text } from "@mantine/core";

function Mark(props) {
  console.log(props)
  let map = useMap();
  let getCenter = [map.getCenter().lat, map.getCenter().lng];
  const mapContext = React.useContext(MapProvider);
  const [position, setPosition] = useState(props.lastPosition);
  const markerRef = useRef(null);
  const eventHandlers = {
    dragend() {
      const marker = markerRef.current;
      if (marker != null) {
        setPosition(marker.getLatLng());
      }
    },
    click: () => {
      mapContext.setMode("edit");
      props.handlers.open();
      console.log(props.name)
      mapContext.setSelectedMark({
        id:props.id,
        name:props.name,
      });
    },
  }


  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90} closeOnEscapeKey >
        <Text>{props.name}</Text>
      </Popup>
    </Marker>
  );
}


export default Mark;
