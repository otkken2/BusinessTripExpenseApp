import { FormControlLabel, InputAdornment, MenuItem, OutlinedInput, Radio, RadioGroup, Select } from "@mui/material"
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
  FULL_AMOUNT = "全額",
  FARE = "運賃",
  OTHER = "その他"
}

export const BurdenAmount = (props:BurdenAmountProps) => {
  const isTypeOther = () => {
    return props.watch("burdenAmountType") === BurdenAmountType.OTHER;
  }
  return (
    <>
      <StyledInputLabel>別途負担額</StyledInputLabel>
      <Controller
        control={props.control}
        name="burdenAmount"
        render={()=>
        (
          <Select
            defaultValue=""
            placeholder="別途負担額の種類を選択"
            onChange={(event)=>{
              props.setValue("burdenAmountType",event.target.value as BurdenAmountType);
            }}
          >
            <MenuItem value="">未選択</MenuItem>
            <MenuItem value={BurdenAmountType.FULL_AMOUNT}>{BurdenAmountType.FULL_AMOUNT}</MenuItem>
            <MenuItem value={BurdenAmountType.FARE}>{BurdenAmountType.FARE}</MenuItem>
            <MenuItem value={BurdenAmountType.OTHER}>{BurdenAmountType.OTHER}</MenuItem>
          </Select>
        )}
      />
      {isTypeOther() && 
        <Controller
          control={props.control}
          name="burdenAmount"
          render={()=>(
            <OutlinedInput
              {...props.register("burdenAmount")}
              type="text"
              sx={{marginTop: "15px"}}
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