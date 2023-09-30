import { useEffect, useRef, useState } from "react";
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
  Rating
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


const Define_Accomodation = (props) => {
  const { data, mutate } = useSend(["/api/define-accomodation", "xyz"]);

  function submitForm(obj) {
    console.log(obj);
  }

  const { t } = useTranslation();
  const form = useForm({
    validate: yupResolver(MainForm),
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
      state: "",
      city: "",
      address: "",
      file: null,
    },
    validateInputOnBlur: true,
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
      meta: <Rating color="primary" defaultValue={5} />
    },
    {
      value: "2",
      label: t("define_accomodation.accomodation_degree.four_star"),
      meta: <Rating color="primary" defaultValue={4} />
    },
    {
      value: "3",
      label: t("define_accomodation.accomodation_degree.three_star"),
      meta: <Rating color="primary" defaultValue={3} />
    },
    {
      value: "4",
      label: t("define_accomodation.accomodation_degree.two_star"),
      meta: <Rating color="primary" defaultValue={2} />
    },
    {
      value: "5",
      label: t("define_accomodation.accomodation_degree.one_star"),
      meta: <Rating color="primary" defaultValue={1} />
    },
    {
      value: "6",
      label: t("define_accomodation.accomodation_degree.degree_three"),
      meta: <Rating emptySymbol={<IconThumbUp />} fullSymbol={<IconThumbUp fill="primary" />} color="primary" defaultValue={0} />
    },
    {
      value: "7",
      label: t("define_accomodation.accomodation_degree.degree_two"),
      meta: <Rating emptySymbol={<IconThumbUp />} fullSymbol={<IconThumbUp fill="primary" />} color="primary" defaultValue={0} />
    },
    {
      value: "8",
      label: t("define_accomodation.accomodation_degree.degree_one"),
      meta: <Rating color="primary" defaultValue={1} />
    },
    {
      value: "9",
      label: t("define_accomodation.accomodation_degree.privileged"),
    },
  ];

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Container size="xl" mt="lg">
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
            {/* <Combobox
              placeholder={t("forms.choose")}
              label={t("forms.accomodation_degree")}
              {...form.getInputProps("accomodation_degree")}
              error={t(form.getInputProps("accomodation_degree").error)}
            ></Combobox> */}
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
                <TimePicker />
              </Center>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text classNames={{ root: InputClasess.label }}>
              {t("forms.delivery_time")}
            </Text>
            <Paper shadow="none" withBorder p="lg">
              <Center>
                <TimePicker />
              </Center>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group wrap="nowrap">
              <TextInput
                w={{ base: "65%", lg: "75%" }}
                placeholder={t("forms.enter_call_number")}
                label={t("forms.call_number")}
                {...form.getInputProps("call_number")}
                error={t(form.getInputProps("call_number").error)}
              />
              <TextInput
                w={{ base: "35%", lg: "25%" }}
                placeholder="021"
                label={t("forms.city_phone_code")}
                {...form.getInputProps("city_phone_code")}
                error={t(form.getInputProps("city_phone_code").error)}
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
            <Uploader setFile={form.setFieldValue} />
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

const Uploader = (props) => {
  let { mutate } = useFileUploadMutation();
  const [files, setFiles] = useState([]);
  useEffect(() => {
    if (files.length > 0) {
      // props.setFile("file",files[0])
      mutate("https://jsonplaceholder.typicode.com/", files[0]);
    }
  }, [files]);
  const { t } = useTranslation();
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    // return <Image radius="md" key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
    return (
      <BackgroundImage
        key={index}
        pos="relative"
        style={{ overflow: "hidden" }}
        w={140}
        h={145}
        radius="lg"
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      >
        <Center h="100%">
          <Box
            pos="absolute"
            w="100%"
            h="100%"
            bg="rgba(255,255,255,0.3)"
            style={{ backdropFilter: "blur(10px)", zIndex: 4 }}
          />
          <RingProgress
            style={{ zIndex: 6 }}
            sections={[{ value: 40, color: "primary" }]}
            label={
              <Center>
                <Text c="black" fw={700} ta="center" size="xl">
                  40%
                </Text>
              </Center>
            }
          />
        </Center>
      </BackgroundImage>
    );
  });
  const openRef = useRef(null);
  return (
    <>
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        maxFiles={1}
        onReject={(e) =>
          notifications.show({
            title: t("system_notification"),
            color: "red",
            message: t("upload_error", { files: 1 }),
          })
        }
        styles={{
          root: {
            display: "none",
            border: 0,
          },
        }}
        openRef={openRef}
        onDrop={setFiles}
        activateOnClick={false}
      ></Dropzone>
      <Button
        variant="transparent"
        onClick={() => openRef.current?.()}
        style={{ pointerEvents: "all" }}
        leftSection={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55L14.5598 20.94Z"
              stroke="#157B96"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.25 6.25L17.75 17.75"
              stroke="#157B96"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.75 6.25L6.25 17.75"
              stroke="#157B96"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 10V13C5 13.2761 5.22386 13.5 5.5 13.5H6H7"
              stroke="#157B96"
              strokeLinecap="round"
            />
            <circle cx="12" cy="6" r="1.5" stroke="#157B96" />
            <circle cx="12" cy="18" r="1.5" stroke="#157B96" />
            <mask id="path-7-inside-1_1004_33021" fill="white">
              <path d="M18.3027 10.0736C18.3733 9.81584 18.2206 9.54415 17.9538 9.52901C17.636 9.51099 17.3161 9.55908 17.0148 9.67233C16.5616 9.84271 16.1738 10.1519 15.9067 10.5557C15.6396 10.9595 15.5068 11.4374 15.5274 11.9211C15.5479 12.4049 15.7207 12.8698 16.021 13.2495C16.3214 13.6292 16.734 13.9044 17.2 14.0358C17.6661 14.1672 18.1616 14.148 18.6161 13.9811C19.0706 13.8141 19.4608 13.5079 19.7309 13.1061C19.9069 12.8444 19.9749 12.4476 19.9963 12.069C20.0124 11.7846 19.7298 11.5885 19.459 11.6772C19.278 11.7365 19.165 11.9105 19.1258 12.0969C19.0909 12.2637 19.024 12.4231 18.9278 12.5661C18.7714 12.7987 18.5455 12.976 18.2824 13.0726C18.0193 13.1693 17.7324 13.1804 17.4626 13.1043C17.1928 13.0283 16.9539 12.869 16.78 12.6491C16.6062 12.4293 16.5061 12.1601 16.4942 11.8801C16.4824 11.6 16.5592 11.3234 16.7139 11.0896C16.8685 10.8558 17.093 10.6768 17.3554 10.5782C17.4655 10.5368 17.5798 10.5105 17.6955 10.4993C17.9615 10.4735 18.2322 10.3314 18.3027 10.0736Z" />
            </mask>
            <path
              d="M18.9278 12.5661L17.683 11.7291L18.9278 12.5661ZM17.9538 9.52901L17.8689 11.0266L17.9538 9.52901ZM18.0387 8.03142C17.5136 8.00163 16.9849 8.0811 16.487 8.26828L17.5427 11.0764C17.6473 11.0371 17.7584 11.0203 17.8689 11.0266L18.0387 8.03142ZM16.487 8.26828C15.738 8.54985 15.0971 9.06078 14.6556 9.72816L17.1578 11.3832C17.2506 11.243 17.3853 11.1356 17.5427 11.0764L16.487 8.26828ZM14.6556 9.72816C14.2142 10.3955 13.9948 11.1853 14.0287 11.9847L17.026 11.8575C17.0189 11.6895 17.065 11.5235 17.1578 11.3832L14.6556 9.72816ZM14.0287 11.9847C14.0626 12.7842 14.3482 13.5525 14.8446 14.1801L17.1975 12.3189C17.0932 12.187 17.0331 12.0255 17.026 11.8575L14.0287 11.9847ZM14.8446 14.1801C15.341 14.8076 16.0229 15.2624 16.7931 15.4795L17.607 12.5921C17.4451 12.5464 17.3018 12.4508 17.1975 12.3189L14.8446 14.1801ZM16.7931 15.4795C17.5632 15.6966 18.3823 15.665 19.1334 15.3891L18.0989 12.573C17.941 12.631 17.7689 12.6377 17.607 12.5921L16.7931 15.4795ZM19.1334 15.3891C19.8844 15.1131 20.5292 14.6071 20.9757 13.9431L18.4861 12.2691C18.3923 12.4087 18.2568 12.5151 18.0989 12.573L19.1334 15.3891ZM20.9757 13.9431C21.3932 13.3221 21.4705 12.5688 21.4939 12.1537L18.4987 11.9843C18.4911 12.1198 18.4766 12.2226 18.4606 12.2916C18.453 12.3243 18.4475 12.3383 18.4478 12.3375C18.448 12.3372 18.4582 12.3106 18.4861 12.2691L20.9757 13.9431ZM17.6578 11.7889C17.6623 11.7677 17.6708 11.7474 17.683 11.7291L20.1726 13.4031C20.3772 13.0988 20.5194 12.7596 20.5939 12.405L17.6578 11.7889ZM17.683 11.7291C17.703 11.6995 17.7317 11.6769 17.7652 11.6646L18.7997 14.4807C19.3594 14.275 19.8399 13.8979 20.1726 13.4031L17.683 11.7291ZM17.7652 11.6646C17.7987 11.6523 17.8352 11.6509 17.8696 11.6606L17.0556 14.5481C17.6296 14.7099 18.2399 14.6863 18.7997 14.4807L17.7652 11.6646ZM17.8696 11.6606C17.9039 11.6703 17.9344 11.6906 17.9565 11.7186L15.6036 13.5797C15.9735 14.0474 16.4817 14.3863 17.0556 14.5481L17.8696 11.6606ZM17.9565 11.7186C17.9786 11.7466 17.9914 11.7808 17.9929 11.8165L14.9956 11.9437C15.0209 12.5395 15.2337 13.112 15.6036 13.5797L17.9565 11.7186ZM17.9929 11.8165C17.9944 11.8521 17.9846 11.8874 17.9649 11.9171L15.4628 10.2621C15.1338 10.7594 14.9703 11.3479 14.9956 11.9437L17.9929 11.8165ZM17.9649 11.9171C17.9452 11.9469 17.9167 11.9697 17.8832 11.9822L16.8275 9.17414C16.2694 9.38397 15.7918 9.76472 15.4628 10.2621L17.9649 11.9171ZM17.8832 11.9822C17.8692 11.9875 17.8547 11.9909 17.8399 11.9923L17.551 9.00624C17.305 9.03004 17.0617 9.08611 16.8275 9.17414L17.8832 11.9822ZM17.8399 11.9923C18.3943 11.9387 19.4414 11.5952 19.7495 10.4697L16.8559 9.67754C16.9376 9.37925 17.1262 9.19904 17.2577 9.11395C17.3795 9.03517 17.4835 9.01278 17.551 9.00624L17.8399 11.9923ZM18.9921 10.2517C18.127 10.5351 17.7632 11.2867 17.6578 11.7889L20.5939 12.405C20.5748 12.4959 20.5323 12.6155 20.4384 12.7405C20.3399 12.8716 20.172 13.0221 19.9259 13.1027L18.9921 10.2517ZM21.4939 12.1537C21.5763 10.6979 20.1532 9.87142 18.9921 10.2517L19.9259 13.1027C19.3064 13.3056 18.4486 12.8713 18.4987 11.9843L21.4939 12.1537ZM17.8689 11.0266C17.4694 11.0039 17.148 10.7743 16.9768 10.4956C16.817 10.2356 16.7844 9.93907 16.8559 9.67754L19.7495 10.4697C20.0095 9.51976 19.4818 8.11327 18.0387 8.03142L17.8689 11.0266Z"
              fill="#157B96"
              mask="url(#path-7-inside-1_1004_33021)"
            />
            <path d="M18 12H19.5" stroke="#157B96" strokeLinecap="round" />
          </svg>
        }
      >
        {t("forms.add_logo_text")}
      </Button>
      <SimpleGrid
        cols={{ base: 2, xs: 3, sm: 3, md: 4, lg: 6 }}
        mt={previews.length > 0 ? "xl" : 0}
      >
        {previews}
      </SimpleGrid>
    </>
  );
};

export default Define_Accomodation;
