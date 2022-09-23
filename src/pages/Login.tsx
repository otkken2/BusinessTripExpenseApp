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

  const onSubmit:SubmitHandler<AuthInputs> = async (data) => {
    console.log("onSubmit!",data);

    const response = await axios.post("http://0.0.0.0:8000/api/login",
      {
        email:    data.email,
        password: data.password
      }
    );
    console.log(response.data?.email);
    console.log(response.data?.name);
  }

  useEffect(()=>{
    axios.get('http://0.0.0.0:8000/sanctum/csrf-cookie');

  },[]);

  return (
    <StyledContainer>
      <h2>{pageTitles.LOGIN}</h2>
      <StyledPaper elevation={2} >
        <StyledForm 
          onSubmit={handleSubmit(onSubmit)}
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
          <StyledButton 
            type="submit" 
            color="primary" 
            variant="contained"
          >
            ログインする
          </StyledButton>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  )
}