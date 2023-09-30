import { PasswordInput, Select, TextInput, Textarea,NumberInput,InputLabel } from "@mantine/core";
import InputClasses from "../components/input.module.css";
import NumberInputClasses from "../components/numberinput.module.css";
import SelectClasses from "@/components/select.module.css";


export const Theme = {
  fontFamily: "IRANSansX, sans-serif",
  headings: { fontFamily: "IRANSansX, sans-serif" },
  primaryShade: {
    light: 5,
    dark: 6,
  },
  primaryColor: "primary",
  defaultRadius: "md",
  colors: {
    primary: [
      "#E5F6FA",
      "#CCEDF5",
      "#9DDCEC",
      "#6ACAE1",
      "#37B7D7",
      "#2393B0",
      "#1C768C",
      "#15596A",
      "#0E3D48",
      "#071D22",
      "#030E11",
    ],
    disabled: [
      "#FFFFFF",
      "#FCFCFD",
      "#F9F9FB",
      "#F5F7F9",
      "#F2F4F7",
      "#F0F2F6",
      "#B3BDD1",
      "#7688AD",
      "#495979",
      "#242C3D",
      "#131720",
    ],
    success: [
      "#EAFBEA",
      "#D1F5D1",
      "#A3ECA2",
      "#75E274",
      "#4CD949",
      "#2BC128",
      "#229C20",
      "#197218",
      "#114C10",
      "#082608",
      "#051504",
    ],
    error: [
      "#FFEBEF",
      "#FED2DA",
      "#FDA5B5",
      "#FD7890",
      "#FC4B6B",
      "#FB2047",
      "#DC042C",
      "#A50321",
      "#6E0216",
      "#37010B",
      "#1E0106",
    ],
    warning: [
      "#FFF7E5",
      "#FFF0D1",
      "#FFE0A3",
      "#FFD175",
      "#FFC247",
      "#FFB119",
      "#E09600",
      "#A87000",
      "#704B00",
      "#382500",
      "#191100",
    ],
    employer: [
      "#E5FAEB",
      "#CBF6D8",
      "#93EBAE",
      "#5FE287",
      "#2CD95F",
      "#1EA547",
      "#188639",
      "#12632A",
      "#0C411C",
      "#06230F",
      "#031107",
    ],
  },
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        size: "lg",
      },
      classNames: {
        input: InputClasses.input,
        label: InputClasses.label,
        error: InputClasses.error,
      },
    }),
    PasswordInput: PasswordInput.extend({
      classNames: {
        input: InputClasses.input,
        label: InputClasses.label,
        error: InputClasses.error,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        size: "lg",
      },
      classNames: {
        input: InputClasses.input,
        label: InputClasses.label,
        error: InputClasses.error,
        option: SelectClasses.option
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        size: "lg",
      },
      classNames: {
        input: InputClasses.input,
        label: InputClasses.label,
        error: InputClasses.error,
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        size: "xl",
      },
      classNames: {
        input: NumberInputClasses.input,
        label: NumberInputClasses.label,
        error: NumberInputClasses.error,
      },
    }),
    InputLabel: InputLabel.extend({
      styles:{
        label:{
          color:'red'
        }
      },
      classNames:{
        label: InputClasses.label
      }
    })
  },
  other: {
    blue: "#00519A",
    darkBlue: "#00284D",
    textColorSystem: "#003666",
    textColor: "#001B33",
    gray: "#C2C7CC",
    lightGray: "#EBEEF0",
  },
};
