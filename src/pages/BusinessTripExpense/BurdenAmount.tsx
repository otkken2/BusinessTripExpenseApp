import { FormControlLabel, InputAdornment, OutlinedInput, Radio, RadioGroup } from "@mui/material"
import { Control, Controller, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form"
import { StyledInputLabel } from "../../Utility/globalStyles"
import { Inputs } from "./BusinessTripExpense"

interface BurdenAmountProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue: UseFormSetValue<Inputs>
  watch:UseFormWatch<Inputs>
}
export const enum BurdenAmountType{
  FULL_AMOUNT = "fullAmount",
  FARE = "fare",
  OTHER = "other"
}

export const BurdenAmount = (props:BurdenAmountProps) => {
  const isTypeOther = () => {
    return props.watch("burdenAmountType") === BurdenAmountType.OTHER;
  }
  return (
    <>
      <StyledInputLabel>別途負担額</StyledInputLabel>
      <RadioGroup
        onChange={(newValue)=>{
          props.setValue("burdenAmountType",newValue.target.value as BurdenAmountType);
        }}
      >
        <FormControlLabel value={BurdenAmountType.FULL_AMOUNT} control={<Radio {...props.register("burdenAmountType")}/>} label="全額"/>
        <FormControlLabel value={BurdenAmountType.FARE} control={<Radio {...props.register("burdenAmountType")}/>} label="運賃"/>
        <FormControlLabel value={BurdenAmountType.OTHER} control={<Radio {...props.register("burdenAmountType")}/>} label="その他"/>
      </RadioGroup>
      {isTypeOther() && 
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
      }
    </>
  )
}