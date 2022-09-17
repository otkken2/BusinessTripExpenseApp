import { InputLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { styled } from "@mui/material";
import React from "react";
import { Control, UseFormSetValue } from "react-hook-form";
import { AuthInputs } from "../pages/Login";

const StyledTextField = styled(TextField)({
  width:"100%",
})

const StyledContainer = styled("div")({
  paddingTop:"20px",
})

interface InputProps{
  label: string
  placeholder: string,
  control?: Control,
  setValue?:UseFormSetValue<any>
}

export const Input = (props: InputProps) => {
  return (
    <>
      <StyledContainer>
        <InputLabel htmlFor="">{props.label}</InputLabel><br />
        <StyledTextField variant="outlined" defaultValue="" placeholder={props.placeholder}/>
      </StyledContainer>
    </>
  )
}