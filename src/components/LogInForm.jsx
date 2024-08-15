import React from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values) => {
    console.log("Form values:", values);
    try {
      const response = await fetch("https://todos.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const signUpData = await response.json();
      console.log("Sign-up successful:", signUpData);
    } catch (error) {
      console.log("Sign-up failed:", error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <FormikForm>
            <legend className="pb-5 font-semibold text-2xl text-center">
              Sign Up
            </legend>
            <div className="ml-6 md:ml-10">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="w-72 md:w-96 h-12 mt-7 pl-2 border-2 border-black"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-72 md:w-96 h-12 mt-7 pl-2 border-2 border-black"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="block w-72 md:w-96 mt-7 h-12 pl-2 border-2 border-black"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="block w-72 md:w-96 mt-7 h-12 pl-2 border-2 border-black"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="whitespace-nowrap ml-6 md:ml-10 mt-7 px-28 md:px-40 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md"
            >
              Sign Up
            </button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
