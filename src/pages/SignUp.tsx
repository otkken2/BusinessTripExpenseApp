import { Button, Paper } from "@material-ui/core";
import { Input } from "../components/input";
import { PasswordInput } from "../components/passwordInput";
import {styled} from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { AuthInputs } from "./Login";

const StyledButton = styled(Button)({
  marginTop: "40px",
})

const StyledContainer = styled('div')({
  width: "500px",
  height: "500px",
  margin: "auto",
})

const StyledPaper = styled(Paper)({
  height: "auto",
  // paddingBottom: "20px",
})

const StyledForm = styled("form")({
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  width: "300px",
  margin: "auto",
  paddingBottom: "30px"
})


export const SignUp = () => {
  const {control,setValue} = useForm<AuthInputs>();
  const typeOfContent = "メールアドレス";
  return (
    <StyledContainer>
      <h2>新規ユーザー登録</h2>
      <StyledPaper elevation={2}>
        <StyledForm action="#">
          <Input label={typeOfContent} placeholder={typeOfContent}/>
          <PasswordInput label="パスワード" control={control} setValue={setValue}/>
          <PasswordInput label="パスワード(確認用)" control={control} setValue={setValue}/>
          <StyledButton variant="contained" color="primary">会員登録する</StyledButton>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  )


}