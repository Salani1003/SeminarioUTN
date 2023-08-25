import {
  Alert,
  AlertTitle,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {Box} from "@mui/system";
import {Controller, useForm} from "react-hook-form";
import {Input} from "../../../../components/Input";
import {DsLayout} from "../../../../layout/DsLayout";
import SaveIcon from "@mui/icons-material/Save";
import Swal from "sweetalert2";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPersonaById} from "../helpers/personasHelper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {fieldsForm} from "./fields";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";

export const PersonaAddEdit = () => {
  const navigate = useNavigate();

  const {id} = useParams();

  const radioOptions = [
    {
      value: "masculino",
      label: "Masculino",
    },
    {
      value: "femenino",
      label: "Femenino",
    },
    {
      value: "otro",
      label: "Sin Especificar",
    },
  ];
  const defaultValues = {
    nombre: "",
    apellido: "",
    tipoDeDni: "",
    numeroDeDocumento: "",
    cuit: "",
    email: "",
    fechaDeNacimiento: "",
    sexo: "otro",
    nacionalidad: "",
    codPostal: "",
    calle: "",
    numero: "",
  };
  const {
    handleSubmit,
    formState: {errors},
    control,
    reset,
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    Swal.fire({
      title: "Excelente?",
      text: `La persona fue ${!id ? "agregada" : "modificada"} con éxito`,
      icon: "success",
      confirmButtonColor: "#12416F",
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) navigate(`/Personas`);
    });

    console.log(data);
  };

  const [readOnly, setReadOnly] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (id) {
      setReadOnly(true);
      const persona = getPersonaById(parseInt(id));
      reset(persona);
    }
  }, [id]);

  const handleVolver = () => {
    navigate(`/Personas`);
  };

  const handleCancelar = () => {
    Swal.fire({
      title: "¿Está seguro?",
      text: "Si continúa perdera los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#12416F",
      cancelButtonColor: "#F44336",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) navigate(`/Personas`);
    });
  };

  const handleEditPage = () => {
    setReadOnly(false);
  };
  const fields = fieldsForm(control, errors, readOnly, id);

  const returnTitulo = () => {
    if (id && readOnly) {
      return "Persona";
    }
    if (id && !readOnly) {
      return "Modificar Persona";
    }
    if (!id && !readOnly) {
      return "Agregar Persona";
    }
  };

  return (
    <DsLayout>
      <Box p={5}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            {!readOnly && (
              <Collapse in={open}>
                <Alert
                  severity="info"
                  p={2}
                  sx={{m: 3}}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  <AlertTitle>Atención</AlertTitle>
                  Para poder realizar la solicitud por favor complete todos los
                  campos que tengan *
                </Alert>
              </Collapse>
            )}
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h3">{returnTitulo()}</Typography>
              </Grid>
              {id && readOnly && (
                <Grid item>
                  <EditIcon color="primary" onClick={() => handleEditPage()} />
                </Grid>
              )}
            </Grid>

            <Divider sx={{mt: 3, mb: 3}} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card
                sx={{
                  p: 3,
                  m: 3,
                }}
              >
                <Grid container spacing={2} rowSpacing={2}>
                  {fields.map((field, index) => (
                    <Grid
                      key={index} // esto si es de react
                      item
                      xs={field.grid.xs}
                      md={field.grid.md}
                    >
                      <Input
                        control={field.control}
                        name={field.name}
                        label={field.label}
                        type={field.type}
                        errors={field.errors}
                        rules={field.rules}
                        disabled={field.disabled}
                        select={field.select}
                        items={field.items}
                        InputLabelProps={field.InputLabelProps}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Grid item sx={{mt: 1}}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Sexo</FormLabel>
                    <Controller
                      control={control}
                      name="sexo"
                      render={({field}) => {
                        return (
                          <RadioGroup row {...field}>
                            {radioOptions.map((option, index) => (
                              <FormControlLabel
                                key={index}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                                disabled={id ? true : readOnly}
                              />
                            ))}
                          </RadioGroup>
                        );
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item sx={{mt: 1}}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Nacionalidad Extranjera"
                      disabled={id ? true : readOnly}
                    />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    {!readOnly ? (
                      <>
                        <Button variant="contained" type="submit" sx={{mt: 3}}>
                          <SaveIcon />
                          <Typography sx={{ml: 1}}>Guardar</Typography>
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{mt: 3, ml: 1}}
                          onClick={() => handleCancelar()}
                        >
                          <Typography sx={{ml: 1}}>Cancelar</Typography>
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => handleVolver()}
                        sx={{mt: 3}}
                      >
                        <ArrowBackIcon />
                        <Typography sx={{ml: 1}}>Volver</Typography>
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Card>
            </form>
          </Grid>
        </Grid>
      </Box>
    </DsLayout>
  );
};
