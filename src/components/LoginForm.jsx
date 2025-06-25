import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "./redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        dispatch(login(values));
        resetForm();
      }}
    >
      <Form>
        <label>Email:</label>
        <Field name="email" type="email" />
        <label>Password:</label>
        <Field name="password" type="password" />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
