import React,{useState} from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, Container, Typography } from "@mui/material";
import TextFieldWrapper from "../../components/FormUi/Textfield";
import SelectWrapper from "../../components/FormUi/select";
import countries from "../../countries.json";
// import DateTimePicker from "../../components/FormUi/dataTimePicker";
import CheckboxWrapper from "../../components/FormUi/checkbox";
import ButtonWrapper from "../../components/FormUi/Button";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  adress: "",
  country: "",
  arrivealDate: "",
  departureDate: "",
  message: "",
  termsOfService: false,
};
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("please enter a valid phone number")
    .required("Required"),
  adress: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivealDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
  message: Yup.string().required("Required"),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted")
    .required("The terms and conditions must be accepted"),
});
const FormExample = () => {
  const [val, setVal] = useState();
  return (
    <Grid container>
      <Typography>{val}</Typography>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {/* <Typography>{val}</Typography> */}
                  <Typography>Your details</Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextFieldWrapper name="firstName" label="First Name" />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldWrapper name="lastName" label="Last Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper name="phone" label="Phone" />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Adress</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper name="adress" label="Adress" />
                </Grid>
                <Grid item xs={6}>
                  <SelectWrapper
                    name="country"
                    label="Country"
                    options={countries}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Booking informations</Typography>
                </Grid>
                {/* <Grid item xs={12}>
                 <DateTimePicker name="arrivealDate" label="Arriveal Date"/>
                </Grid>  */}

                <Grid item xs={6}>
                  <TextFieldWrapper
                    name="message"
                    label="Message"
                    multiline={true}
                    rows={4}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CheckboxWrapper
                    name="termsOfService"
                    legend="Terms of services"
                    label="I agree"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonWrapper>Submit form</ButtonWrapper>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </Grid>
  );
};

export default FormExample;
