import {MenuItem, Select, SelectChangeEvent, styled, Paper, OutlinedInput, InputAdornment, RadioGroup, FormControlLabel, Radio, Button}from "@mui/material";
// import { useAtom } from "jotai";
// import { ChangeEvent } from "react";
// import { meansOfTransportAtom,startPointAtom,endPointAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { StyledInputLabel } from "../../Utility/globalStyles";
// import { serviceSectionInterFace } from "../../Utility/interfaces";
import { UseFormRegister, Controller, Control, UseFormSetValue } from 'react-hook-form';
import { baseURL, Inputs } from "./BusinessTripExpense";
import { Points } from "./ServiceSection/Points";
import { MeansOfTransport } from "./ServiceSection/meansOfTransport";

const Container = styled('div')({
  display: "flex",
  flexDirection: "column",
  padding: "15px",
})

const ServiceSectionContainer = styled('div')({
  display: "flex",
  flexDirection: "row",
  // flexGrow: "1",
  width: "100%",
})

const StyledRadioGroup = styled(RadioGroup)({
  display:"flex",
  flexDirection: "row",
})

const SelectServiceSection = styled(Select)({
  flexGrow: 1,
})

export interface ServiceSection{
  meansOfTransport: string;
  startPoint: string;
  endPoint: string;
  isRouteOverLap: boolean;
  oneWayOrRoundTrip: OneWayOrRoundTrip;
  serviceSectionExpense: number;
}

export interface ServiceSectionForm{
  serviceSections: ServiceSection[]
}

export const enum OneWayOrRoundTrip{
  ONE_WAY = 1,
  ROUND_TRIP = 2,
}
export interface MeansOfTransportInterface{
  id: number;
  name: string;
}

interface ServiceSectionProps{
  number: number
  register: UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}


export const ServiceSection = (props:ServiceSectionProps) => {
  

  

  return (
    <>
      <h3>{`利用区間${props.number + 1}`}</h3>
      <Paper>
        <Container>
          {/* 交通機関選択コンポーネント */}
          <MeansOfTransport control={props.control} register={props.register} number={props.number} setValue={props.setValue}/>
          {/* 始点終点選択コンポーネント */}
          <Points control={props.control} register={props.register} number={props.number} setValue={props.setValue}/>

          <StyledInputLabel>経路重複</StyledInputLabel>
          <Controller
            control={props.control}
            {...props.register(`serviceSections.${props.number}.isRouteOverLap`)}
            render={({field})=>(
              <StyledRadioGroup {...field} defaultValue={false}>
                <FormControlLabel value={false} control={<Radio />} label="無"/>
                <FormControlLabel value={true} control={<Radio />} label="有"/>
              </StyledRadioGroup>
            )}
          />
          <StyledInputLabel>往復・片道</StyledInputLabel>
          <Controller
            control={props.control}
            {...props.register(`serviceSections.${props.number}.oneWayOrRoundTrip`)}
            render={({field})=>(
              <StyledRadioGroup {...field} defaultValue={OneWayOrRoundTrip.ONE_WAY}>
                <FormControlLabel value={OneWayOrRoundTrip.ONE_WAY} control={<Radio />} label="片道"/>
                <FormControlLabel value={OneWayOrRoundTrip.ROUND_TRIP} control={<Radio />} label="往復"/>
              </StyledRadioGroup>
            )}
          />

          <StyledInputLabel>利用経費</StyledInputLabel>
          <Controller
            control={props.control}
            {...props.register(`serviceSections.${props.number}.serviceSectionExpense`)}
            // name="serviceSectionExpense"
            render={()=>(
              <OutlinedInput
                type="text"
                defaultValue={0}
                onChange={(newValue)=>{
                  props.setValue(`serviceSections.${props.number}.serviceSectionExpense`,newValue.target.value as unknown as number)}
                }
                endAdornment={
                  <InputAdornment position="end">円</InputAdornment>
                }
              />
            )}
          />
        </Container>
      </Paper>
    </>
  )
};