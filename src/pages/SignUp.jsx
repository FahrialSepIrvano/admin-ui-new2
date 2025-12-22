import React from 'react';
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignUp from '../components/Fragments/FormSignUp';

const SignUpPage = () => {
  return (
    <AuthLayout title="Register">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;