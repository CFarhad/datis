import React, { useState } from "react";
import {
  ActionIcon,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  Text,
  CheckIcon,
  CloseIcon,
  useMantineTheme,
  Input,
} from "@mantine/core";
import { useDisclosure, useInputState } from "@mantine/hooks";
import TrashIcon from "@/assets/icons/trash.svg";
import EditIcon from "@/assets/icons/edit.svg";
import { IconCheck } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

const Item = (props) => {
  const form = useForm({
    initialValues: {
      content: props.item.content,
    },
  });
  const theme = useMantineTheme();
  const [opened, toggler] = useDisclosure(false);
  const [error, errorToggler] = useDisclosure(false);
  let [prevContent,setPrevContent] = useState("");
  function submitContent() {
    if(form.getInputProps("content").value === props.item.content) return toggler.close();
    if (!form.getInputProps("content") || form.getInputProps("content") === "") return errorToggler.open();
    errorToggler.close();
    toggler.close();
    props.changeContent(props.item.id, form.getInputProps("content"));
  }
  return (
    <>
      <Paper withBorder shadow="xs" p="sm">
        <Grid>
          <Grid.Col
            display="flex"
            style={{ alignItems: "center" }}
            span={{ lg: 9 }}
          >
            {!opened && <Text size="sm">{form.getInputProps("content").value}</Text>}
            {opened && (
              <Input w="100%" placeholder="آیتم" {...form.getInputProps("content")} />
            )}
          </Grid.Col>
          <Grid.Col span={{ lg: 3 }}>
            <Flex justify="flex-end">
              <Group>
                {!opened && (
                  <ActionIcon
                    variant="default"
                    size="lg"
                    onClick={() => {
                      setPrevContent(form.getInputProps("content").value);
                      toggler.toggle()
                    }}
                  >
                    <Image w={40} h={20} src={EditIcon} />
                  </ActionIcon>
                )}
                {opened && (
                  <form onSubmit={form.onSubmit((values) => submitContent())}>
                    <Flex align="center">
                      <Group>
                        <ActionIcon
                          variant="default"
                          size="lg"
                          onClick={() => submitContent()}
                        >
                          <IconCheck
                            color="#003666"
                            strokeWidth={1.9}
                            width={25}
                            height={30}
                          />
                        </ActionIcon>
                        <ActionIcon
                          variant="default"
                          size="lg"
                          onClick={() => {
                            form.setFieldValue("content",prevContent);
                            setPrevContent("");
                            toggler.toggle()
                          }}
                        >
                          <CloseIcon color="#003666" width={17} height={30} />
                        </ActionIcon>
                      </Group>
                    </Flex>
                  </form>
                )}
                <ActionIcon
                  variant="default"
                  size="lg"
                  onClick={() => props.delete(props.item.id)}
                >
                  <Image
                    w={40}
                    h={20}
                    src={TrashIcon}
                    style={{ stroke: "red" }}
                  />
                </ActionIcon>
              </Group>
            </Flex>
          </Grid.Col>
        </Grid>
        {error && (
          <Text c="error" size="xs">
            Enter item
          </Text>
        )}
      </Paper>
    </>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.item.content === nextProps.item.content;
};

const memoizedItem = React.memo(Item, areEqual);

export default Item;
