export const validateCuil = (codigoIdentificacion) => {
  const cuitValidos = ["20", "23", "24", "25", "26", "27", "30", "33", "34"];
  const primerosDigitos = codigoIdentificacion.slice(0, 2);
  return cuitValidos.includes(primerosDigitos);
};

const validarCantDeArrobas = (string) => {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "@") {
      contador++;
    }
  }
  return contador;
};
const tipoDNI = [
  {
    value: "DNI",
    label: "DNI",
  },
  {
    value: "LC",
    label: "Libreta Cívica",
  },
];
export const fieldsForm = (control, errors, readonly, id = null) => [
  {
    control,
    errors,
    name: "nombre",
    label: "Nombre *",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "Este campo es requerido",
      },
    },
    grid: {xs: 12, md: 6},
    disabled: readonly,
  },
  {
    control,
    errors,
    name: "apellido",
    label: "Apellido *",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "Este campo es requerido",
      },
    },
    grid: {xs: 12, md: 6},
    disabled: readonly,
  },
  {
    control,
    errors,
    name: "email",
    label: "Email *",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "Este campo es requerido",
      },
      validate: (email) => {
        if (validarCantDeArrobas(email) > 1) {
          return "El email no puede contener mas de 1 @";
        }
      },
    },
    grid: {xs: 12, md: 8},
    disabled: readonly,
  },
  {
    control,
    errors,
    name: "fechaDeNacimiento",
    label: "Fecha de Nacimiento*",
    type: "date",
    rules: {
      required: {
        value: true,
        message: "Este campo es requerido",
      },
    },
    grid: {xs: 12, md: 4},
    disabled: readonly,
    InputLabelProps: {shrink: true},
  },
  {
    control,
    errors,
    name: "tipoDeDni",
    label: "Tipo Doc. *",
    select: true,
    rules: {
      required: {
        value: true,
        message: "Este campo es requerido",
      },
    },
    grid: {xs: 12, md: 2},
    disabled: id ? true : readonly,
    items: tipoDNI,
  },
  {
    control,
    errors,
    name: "numeroDeDocumento",
    label: "Número de documento *",
    type: "number",
    rules: {
      required: {
        value: true,
        message: "Este campo es requerido",
      },
      pattern: {
        value: /^[0-9]{8}$/,
        message:
          " El Documento debe ser un número entero, positivo de 8 dígitos",
      },
    },
    grid: {xs: 12, md: 5},
    disabled: id ? true : readonly,
  },
  {
    control,
    errors,
    name: "cuit",
    label: "CUIT *",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "debes ingresar un cuit para poder dar de alta una persona",
      },
      pattern: {
        value: /^[0-9]{11}$/,
        message: " El CUIT debe ser un número entero, positivo de 11 dígitos",
      },
      validate: (codigo) => {
        if (!validateCuil(codigo)) {
          return "El CUIT/CUIL/CUIM debe comenzar con: 20, 23, 24, 25, 26, 27, 30, 33, 34";
        }
      },
    },
    grid: {xs: 12, md: 5},
    disabled: id ? true : readonly,
  },
  {
    control,
    errors,
    name: "codPostal",
    label: "Código Postal",
    type: "text",
    rules: {},
    grid: {xs: 12, md: 2},
    disabled: readonly,
  },
  {
    control,
    errors,
    name: "calle",
    label: "Calle",
    type: "text",
    rules: {},
    grid: {xs: 12, md: 6},
    disabled: readonly,
  },
  {
    control,
    errors,
    name: "numero",
    label: "Número",
    type: "number",
    rules: {},
    grid: {xs: 12, md: 4},
    disabled: readonly,
  },
];
