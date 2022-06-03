import { Button, createStyles, makeStyles, Paper, TextField } from "@material-ui/core";
import { styled } from "@mui/material";
import React from "react";
import { Input } from "../components/input";
import { PasswordInput } from "../components/passwordInput";
import { pageTitles } from "../Utility/Enums";
import { StyledButton, StyledForm, StyledPaper } from "../Utility/globalStyles";



const StyledContainer = styled('div')({
  width: "500px",
  height: "500px",
  margin: "auto",
})




export const Login = () => {

  const typeOfContent = "ユーザーID"

  return (
    <StyledContainer>
      <h2>{pageTitles.LOGIN}</h2>
      <StyledPaper elevation={2} >
        <StyledForm action="#">
          <Input label={typeOfContent} placeholder={typeOfContent}/>
          <PasswordInput label="パスワード"/>
          <StyledButton color="primary" variant="contained">ログインする</StyledButton>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  )
}