import { FormControlLabel, InputAdornment, OutlinedInput, Radio, RadioGroup, styled } from "@mui/material"
import { Control, Controller, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form"
import { StyledInputLabel } from "../../Utility/globalStyles"
import { Inputs } from "./BusinessTripExpense"

const StyledOutlinedInput = styled(OutlinedInput)({

})

export const enum HotelCharge{
  KOU = 13000,
  OTSU = 11700,
  ACTUAL_HOTEL_CHARGE = "ActualHotelCharge",
}
interface HotelChargeRadioProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
  watch:UseFormWatch<Inputs>
}

export const HotelChargeRadio = (props: HotelChargeRadioProps) => {
  const isActual = () => {
    return props.watch("hotelChargeType") === HotelCharge.ACTUAL_HOTEL_CHARGE;
  }; 

  const showActualHotelChargeInput = () => {
    return (isActual() && 
      <>
        <Controller
          control={props.control}
          name="actualHotelChargeValue"
          defaultValue={0}
          render={()=>(
            <StyledOutlinedInput
              {...props.register("actualHotelChargeValue")}
              type="text"
              onChange={(newValue)=>{
                props.setValue("actualHotelChargeValue",newValue.target.value as unknown as number)
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

  return (
    <>
      <StyledInputLabel>宿泊料</StyledInputLabel>
      <RadioGroup 
        onChange={(newValue)=>{
          props.setValue("hotelChargeType",newValue.target.value as HotelCharge)
        }} 
      >
        <FormControlLabel value={HotelCharge.KOU} control={<Radio {...props.register("hotelChargeType")}/>} label="甲/13000"/>
        <FormControlLabel value={HotelCharge.OTSU} control={<Radio {...props.register("hotelChargeType")}/>} label="乙/11000"/>
        <FormControlLabel value={HotelCharge.ACTUAL_HOTEL_CHARGE} control={<Radio {...props.register("hotelChargeType")}/>} label="実費"/>
      </RadioGroup>
      {showActualHotelChargeInput()}
    </>
  )
}