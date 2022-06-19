import { FormControlLabel, InputAdornment, OutlinedInput, Radio, RadioGroup, styled } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form"
import { StyledInputLabel } from "../../Utility/globalStyles"
import { Inputs } from "./BusinessTripExpense"

const StyledOutlinedInput = styled(OutlinedInput)({

})

export const enum HotelCharge{
  KOU = 13000,
  OTSU = 11000,
  ACTUAL_HOTEL_CHARGE = "ActualHotelCharge",
}
interface HotelChargeRadioProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}

export const HotelChargeRadio = (props: HotelChargeRadioProps) => {
  const [hotelChargeType,setHotelChargeType] = useState<HotelCharge | null>(HotelCharge.KOU)

  
  const handleOnChangeHotelChargeType = (event: ChangeEvent<HTMLInputElement>)=>{
    setHotelChargeType((event.target as HTMLInputElement).value as unknown as HotelCharge);
  }

  const isActual = () => {
    return hotelChargeType === HotelCharge.ACTUAL_HOTEL_CHARGE;
  };

  const [actualHotelChargeValue,setActualHotelChargeValue] = useState<number>(0);
  const handleOnChangeActualHotelChargeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as unknown as HTMLInputElement;
    setActualHotelChargeValue(target.value as unknown as number)
  }

  const showActualHotelChargeInput = () => {
    return (isActual() && 
      <>
        <Controller
          control={props.control}
          name="actualHotelChargeValue"
          render={()=>(
            <StyledOutlinedInput
              {...props.register("actualHotelChargeValue")}
              type="text"
              value={actualHotelChargeValue}
              onChange={handleOnChangeActualHotelChargeValue}
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
      <RadioGroup onChange={handleOnChangeHotelChargeType} value={hotelChargeType} >
        <FormControlLabel value={HotelCharge.KOU} control={<Radio {...props.register("hotelChargeType")}/>} label="甲/13000"/>
        <FormControlLabel value={HotelCharge.OTSU} control={<Radio {...props.register("hotelChargeType")}/>} label="乙/11000"/>
        <FormControlLabel value={HotelCharge.ACTUAL_HOTEL_CHARGE} control={<Radio {...props.register("hotelChargeType")}/>} label="実費"/>
      </RadioGroup>
      {showActualHotelChargeInput()}
    </>
  )
}