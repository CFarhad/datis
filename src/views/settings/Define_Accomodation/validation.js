import * as yup from "yup"

export const MainForm = yup.object().shape({
  accomodation_name: yup.string().required("fields.errors.required"),
  accomodation_type: yup.string().required("fields.errors.required"),
  website_address: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "fields.errors.pattern"
    )
    .required("fields.errors.required"),
  accomodation_degree: yup.string().required("fields.errors.required"),
  accomodation_create_date: yup.string().required("fields.errors.required"),
  accomodation_floors: yup.string().required("fields.errors.required"),
  call_number: yup.string().required("fields.errors.required"),
  city_phone_code: yup.string().required("fields.errors.required"),
  phone_number: yup.string().required("fields.errors.required"),
  state: yup.string().required("fields.errors.required"),
  city: yup.string().required("fields.errors.required"),
  address: yup.string().required("fields.errors.required"),
});
