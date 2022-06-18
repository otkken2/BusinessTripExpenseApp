import { FormControl, MenuItem, Select, SelectChangeEvent }from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {StyledInputLabel} from "../../Utility/globalStyles";
import {useAtom} from "jotai";
import { placeOfBusinessAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Inputs } from "./BusinessTripExpense";

interface PlaceOfBusinessProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}

export const PlaceOfBusiness = (props: PlaceOfBusinessProps) => {
  const register = props.register;
  const [placeOfBusiness,setPlaceOfBusiness] = useAtom(placeOfBusinessAtom)
  const handleOnChangePlaceOfBusiness = (event: SelectChangeEvent<string>) => {
    setPlaceOfBusiness(event.target.value);
  }
  return (
  <>
    <FormControl>
      <StyledInputLabel id="place-of-business">用務地</StyledInputLabel>
      <Controller
        control={props.control}
        name="placeOfBusiness"
        render={({field})=>
          (
            <Select
              {...field}
              defaultValue=""
              placeholder="用務地を選択"
              onChange={(newValue)=>{
                props.setValue("placeOfBusiness",newValue.target.value as unknown as string);
              }}
            >
              {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
              <MenuItem value="教育委員会">教育委員会</MenuItem>
              <MenuItem value="市役所">市役所</MenuItem>
              <MenuItem value="座間高校">座間高校</MenuItem>
              <MenuItem value="西中学校">西中学校</MenuItem>
              <MenuItem value="東中学校">東中学校</MenuItem>
            </Select>
          )}
      />
      <Link to="/registPlaceOfBusiness" style={{textDecoration:"none"}}>新しい用務地を登録する</Link>
    </FormControl>
  </>)
}