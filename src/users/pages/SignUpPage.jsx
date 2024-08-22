import React from "react";
import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import SignupForm from "../components/SignupForm";
import ROUTES from "../../routes/routesModuel";
import { useCurrentUser } from "../porviders/UserProvider";
import initialSignupForm from "../helpers/initialForms/initialSignUpForm";
import signupSchema from "../models/signUpSchema";
import useUsers from "../hooks/useUsers";


export default function SignupPage() {
  const { error, isLoading, handleSignup } = useUsers()
  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    handleChangeCheckBox,
  } = useForm(initialSignupForm, signupSchema, handleSignup);

  const { user } = useCurrentUser();

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignupForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"register form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
        handleChangeCheckBox={handleChangeCheckBox}
      />
    </Container>
  );
}
