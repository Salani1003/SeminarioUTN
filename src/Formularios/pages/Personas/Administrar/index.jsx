import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {DsLayout} from "../../../../layout/DsLayout";
import {Box} from "@mui/system";
import {getAllPersonas} from "../helpers/personasHelper";
import {columns} from "../data/dataGrid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export const Personas = () => {
  const navigate = useNavigate();

  const handleDeletePersona = (id) => {
    Swal.fire({
      title: "¿Está seguro?",
      text: "Si continúa eliminará una persona",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#12416F",
      cancelButtonColor: "#F44336",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      setPersonas((prev) => prev.filter((p) => p.id !== id));
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se elimino una persona con éxito.",
          icon: "success",
          confirmButtonColor: "#12416F",
        });
      }
    });
  };

  const handleViewPersona = (id) => {
    navigate(`/Persona/Agregar/${id}`);
  };

  const filterPersona = (value) => {
    const personasFiltradas = per.filter((persona) =>
      persona.nombre.toLowerCase().includes(value.toLowerCase())
    );

    setPersonas(personasFiltradas);
  };
  const renderActions = (params) => {
    return (
      <div>
        <IconButton
          size="large"
          onClick={() => handleDeletePersona(params.row.id)}
        >
          <DeleteIcon color="primary" />
        </IconButton>

        <IconButton
          size="large"
          onClick={() => handleViewPersona(params.row.id)}
        >
          <RemoveRedEyeIcon color="primary" />
        </IconButton>
      </div>
    );
  };

  const per = getAllPersonas();
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    setPersonas(per);
  }, [per]);

  const headers = columns(renderActions);

  const goToAddPersona = () => {
    navigate(`/Persona/Agregar`);
  };
  return (
    <DsLayout>
      <Box p={5}>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="h3">Personas</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => goToAddPersona()}
            >
              <AddIcon sx={{color: "white"}} />
              <Typography sx={{ml: 1, color: "white"}}>Agregar</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} mt={3}>
            <TextField
              sx={{width: "50%"}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder={"Ingrese nombre de la persona que quiere buscar"}
              onChange={(e) => filterPersona(e.target.value)}
            />
          </Grid>
        </Grid>
        <Divider sx={{mt: 2}} />
        <Grid container>
          <Grid item sx={{mt: 2}}>
            <DataGrid
              columns={headers}
              rows={personas}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
            />
          </Grid>
        </Grid>
      </Box>
    </DsLayout>
  );
};
