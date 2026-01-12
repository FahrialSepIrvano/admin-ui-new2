import React from "react";
// Import dari Layouts dan Fragments, BUKAN Elements
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";

const SignUpPage = () => {
  return (
    <AuthLayout title="Create an account" type="register">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;