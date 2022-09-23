import { OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import {styled} from '@mui/material/styles';
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { AuthInputs } from "../pages/Login";

const StyledFormControl = styled(FormControl)(()=>({
  marginTop: "20px",
  marginBottom: "15px",
}));

const StyledInputLabel = styled("label")(()=>({
  marginTop: "15px",
  marginBottom: "15px",
}));

interface PasswordInputProps{
  label:string,
  // register?:UseFormRegister<AuthInputs>
  control?:Control<AuthInputs>,
  setValue:UseFormSetValue<AuthInputs>
}

export const PasswordInput = (props:PasswordInputProps) => {
  const [showPassword,setShowPassword] = useState(false);
  const handleOnClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <StyledFormControl>
        <StyledInputLabel>{props.label}</StyledInputLabel>
        <Controller
          control={props.control}
          name="password"
          render={()=>
            (
              <OutlinedInput 
                placeholder={props.label}
                type={showPassword ? "text" : "password"}
                onChange={(event)=>{
                  props.setValue("password",event.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleOnClickShowPassword}>
                      { showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
          )}
        />
      </StyledFormControl>
    </>
  )
}