import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputAdornment, MenuItem, OutlinedInput, Radio, RadioGroup, Select, styled } from "@mui/material"
import { margin } from "@mui/system"
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react"
import { Control, Controller, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form"
import { StyledInputLabel } from "../../Utility/globalStyles"
import { Inputs } from "./BusinessTripExpense"

const StyledOutlinedInput = styled(OutlinedInput)({
  marginTop: "10px" 
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
      <Controller
        control={props.control}
        name="hotelChargeType"
        render={({field})=>
        (
          <Select
            defaultValue=""
            placeholder="宿泊料を選択"
            onChange={(newValue)=>{
              props.setValue("hotelChargeType",newValue.target.value as unknown as HotelCharge)
            }}
          > 
            <MenuItem value="">未選択</MenuItem>
            <MenuItem value={HotelCharge.KOU}>甲/13000円</MenuItem>
            <MenuItem value={HotelCharge.OTSU}>乙/11700円</MenuItem>
            <MenuItem value={HotelCharge.ACTUAL_HOTEL_CHARGE}>実費</MenuItem>
          </Select>
        )}
      />
      {showActualHotelChargeInput()}
    </>
  )
}