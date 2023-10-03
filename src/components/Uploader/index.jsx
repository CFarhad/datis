import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { notifications } from '@mantine/notifications';
import { Dropzone,IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Box, SimpleGrid } from '@mantine/core';
import DropzonePreview from './preview';

const Uploader = ({
  url,
  deleteUrl,
  items,
  setItems,
  maxFiles,
  maxSize,
  children,
}) => {
  const [files, setFiles] = useState([]);
  const { t } = useTranslation();
  const previews = files.map((file, index) => {
    return (
      <DropzonePreview
        file={file}
        key={index}
        url={url}
        deleteUrl={deleteUrl}
      />
    );
  });

  function onDrop(acceptedFiles) {
    if (acceptedFiles.length <= maxFiles) {
      setFiles([...files, ...acceptedFiles]);
    } else if (files.length > maxFiles) {
      notifications.show({
        title: t(`system_notification`),
        color: 'red',
        message: t('too-many-files', { files: 1 }),
      });
    } else {
      notifications.show({
        title: t(`system_notification`),
        color: 'red',
        message: t('too-many-files', { files: 1 }),
      });
    }
  }

  const openRef = useRef(null);
  return (
    <>
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        maxFiles={maxFiles || 1}
        maxSize={maxSize || 2 * 1024 * 1024} // 2MB
        onReject={(e) => {
          e[0].errors.map((item) => {
            if (item.code === 'too-many-files') {
              notifications.show({
                title: t(`system_notification`),
                color: 'red',
                message: t('uploadError', { files: 1 }),
              });
            } else {
              notifications.show({
                title: t(`system_notification`),
                color: 'red',
                message: t(`${item.code}`),
              });
            }
          });
        }}
        styles={{
          root: {
            display: 'none',
            border: 0,
          },
        }}
        openRef={openRef}
        onDrop={onDrop}
        activateOnClick={false}
      ></Dropzone>
      <Box onClick={() => openRef.current?.()}>{children}</Box>
      <SimpleGrid
        cols={{ base: 2, xs: 3, sm: 3, md: 4, lg: 6 }}
        mt={previews.length > 0 ? 'xl' : 0}
      >
        {previews}
      </SimpleGrid>
    </>
  );
};

export default Uploader;
