export const columns = (renderActions) => [
  {
    field: "nombre",
    headerName: "Nombre",
    width: 200,
  },
  {
    field: "apellido",
    headerName: "Apellido",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "numeroDeDocumento",
    headerName: "Nro. Documento",
    width: 200,
  },
  {
    field: "cuit",
    headerName: "CUIT",
    width: 200,
  },
  {
    field: "fechaDeNacimiento",
    headerName: "Fecha Nacimiento",
    width: 200,
  },
  {
    field: "acciones",
    headerName: "Acciones",
    renderCell: renderActions,
    width: 100,
  },
];
