import React from "react";
import TextField from "@mui/material";
import Container from "@mui/material";

export default function LoginPage() {}
const {
  register,
  handleSubmit,
  formState: { error },
} = useForm();

const onSubmit = (data) => {
  console.log(data);
};
return (
  <Container maxWidth="xs">
    <h1>Hello</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="mb-2">
        <TextField variant="outlined" label="email" fullWidth></TextField>
      </Box>
    </form>
  </Container>
);
