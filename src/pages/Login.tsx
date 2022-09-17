import { InputLabel, OutlinedInput, styled, TextField } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/input";
import { PasswordInput } from "../components/passwordInput";
import { pageTitles } from "../Utility/Enums";
import { StyledButton, StyledForm, StyledPaper } from "../Utility/globalStyles";



const StyledContainer = styled('div')({
  width: "500px",
  height: "500px",
  margin: "auto",
})

export interface AuthInputs{
  email: string,
  password: string,
  passwordForVerification: string,
}


export const Login = () => {

  const typeOfContent = "ユーザーID"
  const {register,handleSubmit,watch,control,setValue} = useForm<AuthInputs>();

  // const onSubmit:SubmitHandler<AuthInputs> = async (data) => {
  //   console.log("onSubmit!",data);

  //   await axios.get('http://0.0.0.0:8000/sanctum/csrf-cookie').then(response => {
  //     axios.post("http://0.0.0.0:8000/api/login",{
  //       login: data,
  //     }).then(response => {
  //       console.log(response);
  //     })
  //   })
  // }

  useEffect(()=>{
    axios.get('http://0.0.0.0:8000/sanctum/csrf-cookie').then(response => {
      // ログイン…
      // axios.post('http://0.0.0.0:8000/api/login',{
      //   email:'admin@example.com',
      //   password: '123456789'
      // }).then(response => {
      //   console.log(response);
      // })
    })
  },[]);

  return (
    <StyledContainer>
      <h2>{pageTitles.LOGIN}</h2>
      <StyledPaper elevation={2} >
        <StyledForm 
          // onSubmit={handleSubmit(onSubmit)}
        >
          {/* <Input label={typeOfContent} placeholder={typeOfContent} control={control} setValue={setValue}/> */}
          <InputLabel sx={{marginTop:"20px"}} htmlFor="">ユーザーID</InputLabel><br />
          <Controller
            control={control}
            name="email"
            render={()=>(
              <OutlinedInput
                {...register("email")}
                type="text"
                sx={{marginTop:"20px"}}
              />
            )}
          />
          <PasswordInput label="パスワード" control={control} setValue={setValue}/>
          <StyledButton type="submit" color="primary" variant="contained">ログインする</StyledButton>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  )
}