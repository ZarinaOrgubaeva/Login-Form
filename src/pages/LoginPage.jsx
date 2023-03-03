import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "../components/UI/Button";
import { Input } from "../components/UI/Input";
import { Login } from "../store/auth/authAction";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    dispatch(Login(values));
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
  });

  const { handleChange, handleSubmit, values } = formik;
  return (
    <Form onSubmit={handleSubmit}>
      <Input onChange={handleChange} name="email" value={values.email} />
      <Input onChange={handleChange} name="password" value={values.password} />
      <Button type="submit">sign in</Button>
    </Form>
  );
};
const Form = styled.form`
  display: grid;
  gap: 15px;
  width: 600px;
  margin: 230px 350px;
`;
