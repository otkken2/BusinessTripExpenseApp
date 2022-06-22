import {MenuItem, Select, SelectChangeEvent, styled, Paper, OutlinedInput, InputAdornment, RadioGroup, FormControlLabel, Radio}from "@mui/material";
// import { useAtom } from "jotai";
// import { ChangeEvent } from "react";
// import { meansOfTransportAtom,startPointAtom,endPointAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { StyledInputLabel } from "../../Utility/globalStyles";
// import { serviceSectionInterFace } from "../../Utility/interfaces";
import { UseFormRegister, Controller, Control, UseFormSetValue } from 'react-hook-form';
import { Inputs } from "./BusinessTripExpense";
import { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { PointsAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { Point } from "../../Utility/interfaces";

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
  isRouteDuplicated: boolean;
  roundTripOrOneWay: RoundTripOrOneWay;
  serviceSectionExpense: number;
}

export interface ServiceSectionForm{
  serviceSections: ServiceSection[]
}

export const enum RoundTripOrOneWay{
  ONE_WAY = 1,
  ROUND_TRIP = 2,
}

interface ServiceSectionProps{
  number: number,
  register: UseFormRegister<Inputs>;
  control:Control<Inputs,any>;
  setValue:UseFormSetValue<Inputs>
}

const baseURL = "http://0.0.0.0:8000/api/businessTripExpense/points"

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

  const [points,setPoints] = useAtom(PointsAtom)
  const getPoints = async () => {
    const response = await axios.get(baseURL);
    const points:Point[] = JSON.parse(JSON.stringify(response.data.points));
    setPoints(points);
  }
  useEffect(()=>{
    getPoints();
    console.log(points);
   },[]);

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
                    {points.map((point)=>(
                    <MenuItem key={point.id}>{point.name}</MenuItem>
                  ))}
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
                    {points.map((point)=>(
                    <MenuItem key={point.id}>{point.name}</MenuItem>
                  ))}
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
              <StyledRadioGroup {...field} defaultValue={false}>
                <FormControlLabel value={false} control={<Radio />} label="無"/>
                <FormControlLabel value={true} control={<Radio />} label="有"/>
              </StyledRadioGroup>
            )}
          />
          <StyledInputLabel>往復・片道</StyledInputLabel>
          <Controller
            control={props.control}
            {...props.register(`serviceSections.${props.number}.roundTripOrOneWay`)}
            render={({field})=>(
              <StyledRadioGroup {...field} defaultValue={RoundTripOrOneWay.ONE_WAY}>
                <FormControlLabel value={RoundTripOrOneWay.ONE_WAY} control={<Radio />} label="片道"/>
                <FormControlLabel value={RoundTripOrOneWay.ROUND_TRIP} control={<Radio />} label="往復"/>
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