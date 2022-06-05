import * as Yup from "yup";

const schemaRegister = Yup.object({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),

  }).required();

export default schemaRegister;