import { Button, Paper } from "@material-ui/core";
import { Input } from "../components/input";
import { PasswordInput } from "../components/passwordInput";
import {styled} from '@mui/material/styles';

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
  const typeOfContent = "メールアドレス";
  return (
    <StyledContainer>
      <h2>新規ユーザー登録</h2>
      <StyledPaper elevation={2}>
        <StyledForm action="#">
          <Input label={typeOfContent} placeholder={typeOfContent}/>
          <PasswordInput label="パスワード"/>
          <PasswordInput label="パスワード(確認用)"/>
          <StyledButton variant="contained" color="primary">会員登録する</StyledButton>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  )


}