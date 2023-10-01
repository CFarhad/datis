import { useState,useEffect } from "react";
import { BackgroundImage,Box,Text,Center,RingProgress } from "@mantine/core";
import { memo, useLayoutEffect } from "react";
import { useFileUploadMutation } from "../../libs/api";

const Preview = ({file,addUrl,deleteUrl,items,setItems}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [success, setSuccess] = useState(true);
  useLayoutEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
    }
  }, [file]);

  return (
    imageUrl !== null && (
      <BackgroundImage
        pos="relative"
        style={{ overflow: "hidden" }}
        w={140}
        h={145}
        radius="lg"
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      >
        {success && (
          <Center h="100%">
            <Blur />
            <Progressive file={file} sendUrl={addUrl} />
          </Center>
        )}
      </BackgroundImage>
    )
  );
};

const Blur = memo(function Blur() {
  return (
    <Box
      pos="absolute"
      w="100%"
      h="100%"
      bg="rgba(255,255,255,0.3)"
      style={{ backdropFilter: "blur(10px)", zIndex: 4 }}
    />
  );
});

const Progressive = (props) => {
    const {mutate,progress} = useFileUploadMutation(props.sendUrl);
    useEffect(() => {
        let form = new FormData();
        form.append("file", props.file);
        mutate(form);
    },[])
  return (
    <RingProgress
      style={{ zIndex: 6 }}
      sections={[{ value: progress || 0, color: "primary" }]}
      label={
        <Center>
          <Text c="black" fw={700} ta="center" size="xl">
            {!progress ? 0 : progress}
          </Text>
        </Center>
      }
    />
  );
};

export default Preview