import {Button, Paper, styled} from "@mui/material";

export const FlexContainer = styled("div")({
  display: "flex"
});

export const StyledButton = styled(Button)({
  marginTop: "40px",
})

export const StyledPaper = styled(Paper)({
  height: "auto",
})

export const StyledForm = styled("form")({
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  width: "300px",
  margin: "auto",
  paddingBottom: "30px"
})

export const StyledInputLabel = styled('label')({
  marginTop: "15px",
  marginBottom: "15px",
  marginRight: "50px",
})