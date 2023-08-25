import {Button, Grid, Link} from "@mui/material";
import {useForm} from "react-hook-form";
import {Input} from "../../components/Input";
import {AuthLayout} from "../layout/AuthLayout";
import {Link as RouterLink} from "react-router-dom";

export const RegisterPage = () => {
  const {
    handleSubmit,
    formState: {errors},
    control,
    watch,
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      confirmEmail: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const fields = [
    {
      name: "name",
      label: "Nombre de Usuario",
      type: "text",
      placeholder: "User",
      control,
      rules: {
        required: {value: true, message: "Este campo es requerido"},
      },
      errors,
      sx: {mt: 2},
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "example@dsistemas.com",
      control,
      rules: {
        required: {value: true, message: "Este campo es requerido"},
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Email invalido",
        },
      },
      errors,
      sx: {mt: 2},
    },
    {
      name: "confirmEmail",
      label: "Confirme Email",
      type: "text",
      placeholder: "example@dsistemas.com",
      control,
      rules: {
        required: {value: true, message: "Este campo es requerido"},
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Email invalido",
        },
        validate: (value) =>
          value === watch("email") || "Los correos ingresados no coinciden",
      },
      errors,
      sx: {mt: 2},
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      control,
      rules: {
        required: {value: true, message: "Este campo es requerido"},
      },
      errors,
      sx: {mt: 2},
    },
  ];

  return (
    <AuthLayout title={"Register"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
            {fields.map((field, index) => (
              <div key={index}>
                <Input {...field} />
              </div>
            ))}
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Grid container direction="row" justifyContent="end">
        <Link component={RouterLink} color="inherit" to="/auth/login">
          Sing up
        </Link>
      </Grid>
    </AuthLayout>
  );
};
