import {AuthLayout} from "../layout/AuthLayout";
import {Button, Grid, Link} from "@mui/material";
import {useForm} from "react-hook-form";
import {Link as RouterLink} from "react-router-dom";
import {Input} from "../../components/Input";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export const RecoveryPage = () => {
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const navigate = useNavigate();

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
  ];

  const handleVolver = () => {
    navigate("/auth/login");
  };

  const onSubmit = (data) => {
    Swal.fire({
      title: "Excelente!!",
      text: `Enviamos un correo de recuperación a ${data.email}`,
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) handleVolver();
    });
  };

  return (
    <AuthLayout title={"Recovery"}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                Recuperar
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
