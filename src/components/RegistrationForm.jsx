import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "./redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}
    >
      <Form>
        <label>Name:</label>
        <Field name="name" type="text" />
        <label>Email:</label>
        <Field name="email" type="email" />
        <label>Password:</label>
        <Field name="password" type="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
