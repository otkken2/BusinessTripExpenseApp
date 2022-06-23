import { Button, FormControl, MenuItem, OutlinedInput, Select, SelectChangeEvent }from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {StyledInputLabel} from "../../Utility/globalStyles";
import {useAtom} from "jotai";
import { placeOfBusinessAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { baseURL, Inputs } from "./BusinessTripExpense";
import axios from "axios";
import { useQuery } from "react-query";
import { RegistMode } from "../../Utility/Enums";
import useHandleRegistMode from "../../hooks/useHandleRegistMode";
import useFetch from "../../hooks/useFetch";

interface PlaceOfBusiness{
  id: number,
  name: string,
}

interface PlaceOfBusinessProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}

export const PlaceOfBusiness = (props: PlaceOfBusinessProps) => {
  const [registNewValue,selectFromRegisteredValue,handleOnClickSwitchRegistMode] = useHandleRegistMode();

  // TODO カスタムフック化できないか検討
  const fetchPlacesOfBusiness = async () => {
    const response = await axios.get(`${baseURL}/placesOfBusiness`);
    const placesOfBusiness: PlaceOfBusiness[] = JSON.parse(JSON.stringify(response.data.placesOfBusiness));
    return placesOfBusiness;
  }

  const placesOfBusiness = useQuery('placesOfBusiness',fetchPlacesOfBusiness); 
  return (
  <>
    <FormControl>
      <StyledInputLabel id="place-of-business">用務地</StyledInputLabel>
      {selectFromRegisteredValue && 
        (
          <>
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
                  {placesOfBusiness.data?.map((placeOfBusiness)=>(
                    <MenuItem key={placeOfBusiness.id} value={placeOfBusiness.name}>{placeOfBusiness.name}</MenuItem>
                  ))}
                </Select>
                )
              }
              />
            <Button onClick={handleOnClickSwitchRegistMode}>新しい用務地を登録する</Button>
          </>
        )
      }
      {
        registNewValue && 
          (
            <>
              <Controller
                control={props.control}
                name="placeOfBusiness"
                render={()=>(
                  <OutlinedInput
                    placeholder="用務地名を入力"
                    onChange={(newValue)=>{
                      props.setValue("placeOfBusiness",newValue.target.value as unknown as string);
                    }}
                  />
                )}
              />
              <Button onClick={handleOnClickSwitchRegistMode}>登録済みの用務地から選択する</Button>
            </>
          )
      }
    </FormControl>
  </>)
}