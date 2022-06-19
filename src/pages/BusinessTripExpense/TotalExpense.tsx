import { Input, InputAdornment } from "@mui/material"
import { useState } from "react";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { FlexContainer, StyledInputLabel } from "../../Utility/globalStyles"
import { Inputs } from "./BusinessTripExpense";

interface TotalExpenseProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
}

export const TotalExpense = (props: TotalExpenseProps) => {
  const [totalExpense] = useState<number>(0);
  // const handleOnChangeTotalExpense = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTotalExpense(event.target.value as unknown as number);
  // }
  return (
    <>
      <FlexContainer>
        <StyledInputLabel>請求額</StyledInputLabel>
        <Controller
          control={props.control}
          name="totalExpense"
          render={()=>(
            <Input
              {...props.register("totalExpense")}
              disabled
              type="text"
              value={totalExpense}
              endAdornment={
                <InputAdornment position="end">円</InputAdornment>
              }
            />
          )}
        />
      </FlexContainer>
    </>
  )
}