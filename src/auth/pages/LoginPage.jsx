import {Google} from "@mui/icons-material";
import {Button, Grid, Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

import {Typography} from "@mui/material";
import {AuthLayout} from "../layout/AuthLayout";
import {useForm} from "react-hook-form";
import {Input} from "../../components/Input";
import useStyles from "./styles";

export const LoginPage = () => {
  const classes = useStyles();

  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const fields = [
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
    <AuthLayout title={"Login"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
            {fields.map((field, index) => (
              <div className={classes.input} key={index}>
                <Input {...field} />
              </div>
            ))}
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                sx={{backgroundColor: "#C63434"}}
              >
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Link
                component={RouterLink}
                color="inherit"
                to="/auth/recuperar"
                sx={{mt: 1}}
              >
                ¿Te olvidaste tu contraseña?
              </Link>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
