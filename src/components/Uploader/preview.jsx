import { useState, useEffect } from 'react';
import {
  BackgroundImage,
  Box,
  Text,
  Center,
  RingProgress,
  ActionIcon,
} from '@mantine/core';
import { memo, useLayoutEffect } from 'react';
import { useFileUploadMutation } from '../../libs/api';
import { IconTrash } from '@tabler/icons-react';

const Preview = ({ file, addUrl, deleteUrl, items, setItems }) => {
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
        style={{ overflow: 'hidden' }}
        w={140}
        h={145}
        radius="lg"
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      >
        {success && (
          <Box pos="absolute" top={7} right={7}>
            <ActionIcon  w={30} h={30} radius="xl" color='dark'>
              <IconTrash size={20} />
            </ActionIcon>
          </Box>
        )}
        {!success && (
          <Center h="100%">
            <Blur />
            <Progressive file={file} sendUrl={addUrl} setSuccess={setSuccess} />
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
      style={{ backdropFilter: 'blur(10px)', zIndex: 4 }}
    />
  );
});

const Progressive = memo(function Progressive(props) {
  const { mutate, progress, isSuccess } = useFileUploadMutation(props.sendUrl);
  useEffect(() => {
    let form = new FormData();
    form.append('file', props.file);
    mutate(form);
  }, []);

  useEffect(() => {
    if (isSuccess) props.setSuccess(isSuccess);
  }, [isSuccess]);
  return (
    <RingProgress
      style={{ zIndex: 6 }}
      sections={[{ value: progress || 0, color: 'primary' }]}
      label={
        <Center>
          <Text c="black" fw={700} ta="center" size="xl">
            {!progress ? 0 : progress}
          </Text>
        </Center>
      }
    />
  );
});

export default Preview;
