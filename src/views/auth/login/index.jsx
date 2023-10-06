import {
  Box,
  Button,
  Group,
  SimpleGrid,
  Center,
  Image,
  Grid,
  Text,
  Flex,
  TextInput,
  PasswordInput,
  Anchor,
  useDirection,
} from "@mantine/core";
import { Helmet } from "react-helmet";
import loginImage from "../../../assets/images/login.svg";
import logo from "../../../assets/images/logo.png";
import { useForm } from "@mantine/form";
import Language from "@/components/Language";
import { useTranslation } from "react-i18next";
import {useSend} from "../../../libs/api";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {isLoading,mutateAsync} = useSend({url: "Login/"});
  const navigate = useNavigate();
  const [cookies,setCookie] = useCookies(['user'])
  const { t, i18n } = useTranslation();
  const { dir } = useDirection();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) =>
        value.length === 0 ? "fields.errors.userpass_error" : null,
      password: (value) =>
        value.length === 0 ? "fields.errors.userpass_error" : null,
    },
    clearInputErrorOnChange: true,
  });

  function submitForm(values){
    let formData = {
      UserName: values.username,
      Password: values.password
    }
    mutateAsync(formData,{
      onSuccess: (data) => {
        setCookie("user",data?.Data.Authorization);
        navigate("/",{replace: true});
      },
      onError: (error) => {
        form.setFieldError("username",t(error.response.data.message))
        form.setFieldError("password",t(error.response.data.message))
      }
    })
  }

  return (
    <div>
      <Helmet>
        <title>ورود</title>
      </Helmet>
      <Box style={{ overflow: "hidden" }} h="100vh">
        <Grid spacing={0} m={0}>
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Box style={{ overflow: "auto" }} h="100vh" pt="xl">
              <Center mt={50}>
                <Box
                  pos="absolute"
                  top={24}
                  right={dir === "rtl" ? 24 : "unset"}
                  left={dir === "ltr" ? 24 : "unset"}
                >
                  <Language />
                </Box>
                <form onSubmit={form.onSubmit((values) => submitForm(values))}>
                  <Flex
                    direction="column"
                    w={{ base: "330px", lg: 420 }}
                    pos={"relative"}
                  >
                    <Image
                      h="147px"
                      w="173px"
                      mx="auto"
                      src={logo}
                      alt="Logo"
                    />
                    <Text mx="auto" mb={40} size="lg" c="#003666" fw={500}>
                      {t("login.title")}
                    </Text>
                    <TextInput
                      label={t("fields.username")}
                      placeholder={t("fields.enter_username")}
                      size="lg"
                      mb={32}
                      rightSection={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M12.2227 2.90503C9.46016 2.90503 7.22266 5.14843 7.22266 7.91821C7.22266 10.6817 9.46016 12.9314 12.2227 12.9314C14.9852 12.9314 17.2227 10.6817 17.2227 7.91821C17.2227 5.14843 14.9852 2.90503 12.2227 2.90503ZM12.2227 15.438C8.89141 15.438 2.22266 17.1111 2.22266 20.4512V22.9578H22.2227V20.4512C22.2227 17.1111 15.5539 15.438 12.2227 15.438Z"
                            fill="#C2C7CC"
                          />
                        </svg>
                      }
                      {...form.getInputProps("username")}
                      error={t(form.getInputProps("username").error)}
                    />
                    <PasswordInput
                      label={t("fields.password")}
                      placeholder={t("fields.enter_password")}
                      size="lg"
                      {...form.getInputProps("password")}
                      error={t(form.getInputProps("password").error)}
                    />
                    <Anchor
                      ta={dir === "rtl" ? "left" : "right"}
                      c="#00519A"
                      mt="xs"
                    >
                      {t("fields.forget_pass")}
                    </Anchor>
                    <Button
                      loading={isLoading}
                      type="submit"
                      color="primary"
                      w={{base:"100%",lg:200}}
                      h={55}
                      size="lg"
                      fw={400}
                      mx="auto"
                      mt={{ base: 200, md: 100, lg: 71 }}
                      bg="linear-gradient(90deg, #087592 43.67%, #2393B0 97.5%)"
                    >
                      {t("fields.login")}
                    </Button>
                  </Flex>
                </form>
              </Center>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <Box
              pos="relative"
              style={(theme) => ({
                height: "100vh",
                padding: 0,
                background: "#06355F",
                borderTopRightRadius: dir === "rtl" ? "99999px" : "",
                borderEndStartRadius: dir === "rtl" ? "99999px" : "",
                borderBottomLeftRadius: dir === "ltr" ? "99999px" : "",
                borderTopLeftRadius: dir === "ltr" ? "99999px" : "",
              })}
            >
              <Box
                pos="absolute"
                top="50%"
                right={dir === "rtl" ? -40 : null}
                left={dir === "ltr" ? -40 : null}
                style={{ transform: "translate(0%,-50%)" }}
              >
                <Center h="100%" w="100%">
                  <Image src={loginImage} alt="Image" h="900px" />
                </Center>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
