import {
  Box,
  Button,
  Grid,
  Group,
  InputBase,
  InputPlaceholder,
  ScrollArea,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId, useId, useInputState } from "@mantine/hooks";
import Item from "./component/item";
import { useTranslation } from "react-i18next";
import {useSend} from "../../../libs/api"

const Features = (props) => {
  const {mutateAsync,isLoading} = useSend({url:"ResidenceAmenitiesAdditionView"})
  const { t } = useTranslation();
  const form = useForm({
    initialValues: {
      items: [],
    },
  });
  const id = randomId;

  const [inputState, setInputState] = useInputState("");

  function submitForm(values) {
    if (!inputState || inputState === "") return;
    let item = { id: id(), content: inputState };
    let items = [item, ...values.items];
    form.setValues({ items });
    setInputState("");
  }

  function sendForm(values) {
    let items = values.items;
    if (items.length === 0) return;

    let newItems = [];
    items.map((im) => newItems.push(im.content));
    newItems = newItems.join(",");

    mutateAsync({additional_facilities_field: newItems})
  }

  function deleteItem(id) {
    const index = form.values.items.findIndex((item) => item.id === id);
    form.removeListItem("items", index);
  }

  function changeContent(id, content) {
    let item = form.values.items.map((im) => {
      if (im.id === id) return { id, content };
      return im;
    });
    form.setFieldValue("items", item);
  }

  return (
    <Box mt={{ base: "xl", lg: "xs" }}>
      <form onSubmit={form.onSubmit((values) => submitForm(values))}>
        <Grid align="end">
          <Grid.Col span={{ base: 8, lg: 6 }}>
            <TextInput
              w="100%"
              placeholder="آیتم خود را وارد کنید"
              value={inputState}
              onChange={setInputState}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 4, lg: 2 }}>
            <Button type="submit" size="">
              افزودن
            </Button>
          </Grid.Col>
        </Grid>
      </form>
      <Grid mt="xl">
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <ScrollArea h={{ base: 400, lg: 600 }}>
            <Stack>
              {form.values.items.map((item, index) => (
                <Item
                  key={item.id}
                  item={item}
                  delete={deleteItem}
                  changeContent={changeContent}
                />
              ))}
            </Stack>
          </ScrollArea>
        </Grid.Col>
      </Grid>
      <Box>
        <form onSubmit={form.onSubmit((values) => sendForm(values))}>
          <Group justify="end">
            <Button color="error" variant="outline">
              {t("forms.cancel")}
            </Button>
            <Button type="submit" color="success" variant="filled" loading={isLoading}>
              {t("forms.submit")}
            </Button>
          </Group>
        </form>
      </Box>
    </Box>
  );
};

export default Features;
