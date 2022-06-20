import { InputAdornment, OutlinedInput } from "@mui/material"
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form"
import { StyledInputLabel } from "../../Utility/globalStyles"
import { Inputs } from "./BusinessTripExpense"

interface BurdenAmountProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue: UseFormSetValue<Inputs>
}

export const BurdenAmount = (props:BurdenAmountProps) => {
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
            onChange={(newValue)=>{
              props.setValue("burdenAmount",newValue.target.value as unknown as number)
            }}
            endAdornment={
              <InputAdornment position="end">円</InputAdornment>
            }
          />
        )}
      />
      
    </>
  )
}