import {MenuItem, Select, SelectChangeEvent, styled, Paper, OutlinedInput, InputAdornment, RadioGroup, FormControlLabel, Radio}from "@mui/material";
// import { useAtom } from "jotai";
// import { ChangeEvent } from "react";
// import { meansOfTransportAtom,startPointAtom,endPointAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { StyledInputLabel } from "../../Utility/globalStyles";
// import { serviceSectionInterFace } from "../../Utility/interfaces";
import { UseFormRegister, Controller, Control, UseFormSetValue } from 'react-hook-form';
import { Inputs } from "./BusinessTripExpense";

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

const SelectServiceSection = styled(Select)({
  flexGrow: 1,
})

export interface ServiceSection{
  meansOfTransport: string;
  startPoint: string;
  endPoint: string;
  isRouteDuplicated: boolean;
  serviceSectionExpense: number;
}

export interface ServiceSectionForm{
  serviceSections: ServiceSection[]
}

interface ServiceSectionProps{
  number: number,
  register: UseFormRegister<Inputs>;
  control:Control<Inputs,any>;
  setValue:UseFormSetValue<Inputs>
}

export const ServiceSection = (props:ServiceSectionProps) => {

  // const [meansOfTransport, setMeansOfTransport] = useAtom(meansOfTransportAtom);
  // const handleOnChangeServiceSection = (event: SelectChangeEvent<string>) => {
  //   setMeansOfTransport(event.target.value);
  // }

  // const [startPoint, setStartPoint] = useAtom(startPointAtom);
  // const handelOnChangeStartPoint = (event:SelectChangeEvent<unknown>) => {
  //   setStartPoint(event.target.value as unknown as string);
  // }

  // const [endPoint, setEndPoint] = useAtom(endPointAtom);
  // const handelOnChangeEndPoint = (event:SelectChangeEvent<unknown>) => {
  //   setEndPoint(event.target.value as string);
  // }

  return (
    <>
      <h3>{`利用区間${props.number + 1}`}</h3>
      <Paper>
        <Container>
          
          <StyledInputLabel>交通手段・機関</StyledInputLabel>
          <Controller
            control={props.control}
            {...props.register(`serviceSections.${props.number}.meansOfTransport`)}
            render={({field})=>(
              <>
                <Select {...field}>
                  {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
                  <MenuItem value="京王線">京王線</MenuItem>
                  <MenuItem value="小田急線">小田急線</MenuItem>
                  <MenuItem value="JR相模線">JR相模線</MenuItem>
                </Select>
              </>
            )}
          />

          <StyledInputLabel>利用区間</StyledInputLabel>
          <ServiceSectionContainer>
            <Controller
              control={props.control}
              {...props.register(`serviceSections.${props.number}.startPoint`)}
              render={({field})=>(
                <>
                  <SelectServiceSection {...field}>
                    {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
                    <MenuItem value="座間駅">座間駅</MenuItem>
                    <MenuItem value="入谷駅">入谷駅</MenuItem>
                    <MenuItem value="横浜駅">横浜駅</MenuItem>
                    <MenuItem value="川崎駅">川崎駅</MenuItem>
                    <MenuItem value="登戸駅">登戸駅</MenuItem>
                  </SelectServiceSection>
                </>
              )}
            />
            <p> 〜 </p>
            <Controller
              control={props.control}
              {...props.register(`serviceSections.${props.number}.endPoint`)}
              render={({field})=>(
                <>
                  <SelectServiceSection {...field} >
                    {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
                    <MenuItem value="座間駅">座間駅</MenuItem>
                    <MenuItem value="入谷駅">入谷駅</MenuItem>
                    <MenuItem value="横浜駅">横浜駅</MenuItem>
                    <MenuItem value="川崎駅">川崎駅</MenuItem>
                    <MenuItem value="登戸駅">登戸駅</MenuItem>
                  </SelectServiceSection>
                </>
              )}
            />
          </ServiceSectionContainer>
          <StyledInputLabel>経路重複</StyledInputLabel>
          <Controller
            control={props.control}
            {...props.register(`serviceSections.${props.number}.isRouteDuplicated`)}
            render={({field})=>(
              <RadioGroup {...field} defaultValue={false}>
                <FormControlLabel value={false} control={<Radio />} label="無"/>
                <FormControlLabel value={true} control={<Radio />} label="有"/>
              </RadioGroup>
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
                onChange={(newValue)=>{
                  props.setValue(`serviceSections.${props.number}.serviceSectionExpense`,newValue.target.value as unknown as number)}
                  // name="serviceSectionExpense",newValue as Date)
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