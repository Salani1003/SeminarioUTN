import {MenuItem, TextField} from "@mui/material";
import {useController} from "react-hook-form";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const Input = ({
  name,
  label,
  type,
  placeholder,
  control,
  rules,
  errors,
  select = false,
  sx,
  items,
  InputLabelProps,
  disabled,
}) => {
  const {
    field: {ref, onChange, value},
    fieldState: {invalid},
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <TextField
      label={label}
      type={type}
      placeholder={placeholder}
      fullWidth
      xs={12}
      ms={12}
      name={name}
      inputRef={ref}
      error={invalid}
      helperText={invalid && errors[name].message}
      InputProps={{
        endAdornment: invalid && (
          <ErrorOutlineIcon color="error" fontSize={"inherit"} />
        ),
      }}
      onChange={onChange}
      sx={sx}
      select={select}
      InputLabelProps={InputLabelProps}
      value={value}
      disabled={disabled}
    >
      {items?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
