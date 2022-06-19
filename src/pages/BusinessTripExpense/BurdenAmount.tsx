import { InputAdornment, OutlinedInput } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form"
import { StyledInputLabel } from "../../Utility/globalStyles"
import { Inputs } from "./BusinessTripExpense"

interface BurdenAmountProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
}

export const BurdenAmount = (props:BurdenAmountProps) => {
  const [burdenAmount, setBurdenAmount] = useState<number>(0);
  const handleOnChangeBurdenAmountValue = (event: ChangeEvent<HTMLInputElement>) => {
    setBurdenAmount(event.target.value as unknown as number);
  }
  return (
    <>
      <StyledInputLabel>別途負担額</StyledInputLabel>
      <Controller
        control={props.control}
        name="burdenAmount"
        render={()=>(
          <OutlinedInput
            {...props.register("burdenAmount")}
            type="text"
            value={burdenAmount}
            onChange={handleOnChangeBurdenAmountValue}
            endAdornment={
              <InputAdornment position="end">円</InputAdornment>
            }
          />
        )}
      />
      
    </>
  )
}