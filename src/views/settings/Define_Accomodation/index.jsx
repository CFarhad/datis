import { useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  InputLabel,
  Pagination,
  Image,
  Paper,
  Select,
  Space,
  Text,
  TextInput,
  Textarea,
  SimpleGrid,
  BackgroundImage,
  RingProgress,
  Box,
  Flex,
  Combobox,
  Rating,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useForm, isNotEmpty, hasLength, yupResolver } from "@mantine/form";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import TimePicker from "../../../components/TimePicker";
import InputClasess from "@/components/input.module.css";
import XMap from "../../../components/Map";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useData, useFileUploadMutation, useSend } from "../../../libs/api";
import axios, { AxiosError } from "axios";
import { MainForm } from "./validation";
import { Icon123, IconThumbUp } from "@tabler/icons-react";
import Uploader from "../../../components/Uploader";
import LogoIcon from "@/assets/images/logo_icon.png";

const Define_Accomodation = (props) => {
  const { data, mutate } = useSend({
    url: "/ResidenceInfoCompletionView" 
  });

  function submitForm(values) {
    mutate(values);
  }

  const { t } = useTranslation();
  const form = useForm({
    // validate: yupResolver(MainForm),
    initialValues: {
      accomodation_name: "",
      accomodation_type: "",
      website_address: "",
      accomodation_degree: "",
      accomodation_create_date: "",
      accomodation_floors: "",
      call_number: "",
      city_phone_code: "",
      phone_number: "",
      discharge_time: "",
      delivery_time: "",
      state: "",
      city: "",
      address: "",
      file: null,
    },

  });

  const accomodation_type = [
    { value: "1", label: t("define_accomodation.accomodation_type.hotel") },
    {
      value: "2",
      label: t("define_accomodation.accomodation_type.apartment_hotel"),
    },
    { value: "3", label: t("define_accomodation.accomodation_type.motel") },
    { value: "4", label: t("define_accomodation.accomodation_type.suite") },
    { value: "5", label: t("define_accomodation.accomodation_type.villa") },
    { value: "6", label: t("define_accomodation.accomodation_type.beach") },
    { value: "7", label: t("define_accomodation.accomodation_type.cabin") },
    {
      value: "8",
      label: t("define_accomodation.accomodation_type.lodging_house"),
    },
    {
      value: "9",
      label: t("define_accomodation.accomodation_type.guest_house"),
    },
    {
      value: "10",
      label: t("define_accomodation.accomodation_type.ecotourism"),
    },
    {
      value: "11",
      label: t("define_accomodation.accomodation_type.boarding_house"),
    },
    {
      value: "12",
      label: t("define_accomodation.accomodation_type.accomodation_unit"),
    },
  ];

  const accomodation_degree = [
    {
      value: "1",
      label: t("define_accomodation.accomodation_degree.five_star"),
      meta: <Rating color="primary" defaultValue={5} />,
    },
    {
      value: "2",
      label: t("define_accomodation.accomodation_degree.four_star"),
      meta: <Rating color="primary" defaultValue={4} />,
    },
    {
      value: "3",
      label: t("define_accomodation.accomodation_degree.three_star"),
      meta: <Rating color="primary" defaultValue={3} />,
    },
    {
      value: "4",
      label: t("define_accomodation.accomodation_degree.two_star"),
      meta: <Rating color="primary" defaultValue={2} />,
    },
    {
      value: "5",
      label: t("define_accomodation.accomodation_degree.one_star"),
      meta: <Rating color="primary" defaultValue={1} />,
    },
    {
      value: "6",
      label: t("define_accomodation.accomodation_degree.degree_three"),
      meta: (
        <Rating
          emptySymbol={<IconThumbUp />}
          fullSymbol={<IconThumbUp fill="primary" />}
          color="primary"
          defaultValue={0}
        />
      ),
    },
    {
      value: "7",
      label: t("define_accomodation.accomodation_degree.degree_two"),
      meta: (
        <Rating
          emptySymbol={<IconThumbUp />}
          fullSymbol={<IconThumbUp fill="primary" />}
          color="primary"
          defaultValue={0}
        />
      ),
    },
    {
      value: "8",
      label: t("define_accomodation.accomodation_degree.degree_one"),
      meta: <Rating color="primary" defaultValue={1} />,
    },
    {
      value: "9",
      label: t("define_accomodation.accomodation_degree.privileged"),
    },
  ];

  return (
    <form onSubmit={form.onSubmit((values) => submitForm(values))}>
      <Container size="xl">
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              placeholder={t("forms.enter_accomodation_name")}
              label={t("forms.accomodation_name")}
              {...form.getInputProps("accomodation_name")}
              error={t(form.getInputProps("accomodation_name").error)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Select
              placeholder={t("forms.choose")}
              label={t("forms.accomodation_type")}
              data={accomodation_type}
              {...form.getInputProps("accomodation_type")}
              error={t(form.getInputProps("accomodation_type").error)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              placeholder={t("forms.enter_website_address")}
              label={t("forms.website_address")}
              {...form.getInputProps("website_address")}
              error={t(form.getInputProps("website_address").error)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Select
              placeholder={t("forms.choose")}
              label={t("forms.accomodation_degree")}
              data={accomodation_degree}
              {...form.getInputProps("accomodation_degree")}
              error={t(form.getInputProps("accomodation_degree").error)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              placeholder={t("forms.enter_accomodation_create_date")}
              label={t("forms.accomodation_create_date")}
              {...form.getInputProps("accomodation_create_date")}
              error={t(form.getInputProps("accomodation_create_date").error)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              placeholder={t("forms.enter_accomodation_floors")}
              label={t("forms.accomodation_floors")}
              {...form.getInputProps("accomodation_floors")}
              error={t(form.getInputProps("accomodation_floors").error)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text classNames={{ root: InputClasess.label }}>
              {t("forms.discharge_time")}
            </Text>
            <Paper shadow="none" withBorder p="lg">
              <Center>
                <TimePicker onChange={form.setFieldValue} name="discharge_time" />
              </Center>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text classNames={{ root: InputClasess.label }}>
              {t("forms.delivery_time")}
            </Text>
            <Paper shadow="none" withBorder p="lg">
              <Center>
                <TimePicker onChange={form.setFieldValue} name="delivery_time" />
              </Center>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group wrap="nowrap">
              <TextInput
                w={{ base: "35%", lg: "25%" }}
                placeholder="021"
                label={t("forms.city_phone_code")}
                {...form.getInputProps("city_phone_code")}
                error={t(form.getInputProps("city_phone_code").error)}
              />
              <TextInput
                w={{ base: "65%", lg: "75%" }}
                placeholder={t("forms.enter_call_number")}
                label={t("forms.call_number")}
                {...form.getInputProps("call_number")}
                error={t(form.getInputProps("call_number").error)}
              />
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              placeholder={t("forms.enter_phone_number")}
              label={t("forms.phone_number")}
              {...form.getInputProps("phone_number")}
              error={t(form.getInputProps("phone_number").error)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              placeholder={t("forms.enter_state")}
              label={t("forms.state")}
              {...form.getInputProps("state")}
              error={t(form.getInputProps("state").error)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              placeholder={t("forms.enter_city")}
              label={t("forms.city")}
              {...form.getInputProps("city")}
              error={t(form.getInputProps("city").error)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12 }}>
            <Textarea
              placeholder={t("forms.enter_address")}
              label={t("forms.address")}
              rows={5}
              minRows={5}
              maxRows={7}
              {...form.getInputProps("address")}
              error={t(form.getInputProps("address").error)}
            />
          </Grid.Col>
          <Grid.Col>
            <Paper withBorder p="lg">
              <XMap />
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12 }}>
            <Uploader 
              url="/ManagementResidenceLogo"
              items={[]}
              maxFiles={1}
              maxSize={6 * 1024 * 1024}
            >
              <Button
                variant="transparent"
                style={{ pointerEvents: "all" }}
                leftSection={<Image src={LogoIcon} />}
              >
                {t("forms.add_logo_text")}
              </Button>
            </Uploader>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Pagination total={1} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group justify="end">
              <Button color="error" variant="outline">
                {t("forms.cancel")}
              </Button>
              <Button type="submit" color="success" variant="filled">
                {t("forms.submit")}
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </form>
  );
};

const AccomodationDegree = (props) => {
  const { t } = useTranslation();
  return props.list.map((item) => {
    <Combobox.Option value={item} key={item}>
      <Flex justify="space-between" align="center">
        <Text>{t(`${props.text}`)}</Text>
        {props.meta}
      </Flex>
    </Combobox.Option>;
  });
};

export default Define_Accomodation;
