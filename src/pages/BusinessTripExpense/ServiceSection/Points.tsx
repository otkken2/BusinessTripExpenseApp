import styled from "@emotion/styled";
import { Button, MenuItem, OutlinedInput, Select } from "@mui/material";
import axios from "axios";
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { useQuery, UseQueryResult } from "react-query";
import useHandleRegistMode from "../../../hooks/useHandleRegistMode";
import { StyledInputLabel } from "../../../Utility/globalStyles";
import { Point } from "../../../Utility/interfaces";
import { baseURL, Inputs } from "../BusinessTripExpense";

const ServiceSectionContainer = styled('div')({
  display: "flex",
  flexDirection: "row",
  // flexGrow: "1",
  width: "100%",
})

const SelectServiceSection = styled(Select)({
  flexGrow: 1,
})

interface PointsProps{
  control:Control<Inputs,any>
  register: UseFormRegister<Inputs>
  number: number
  setValue: UseFormSetValue<Inputs>
}


export const Points = (props: PointsProps) => {
  const {registNewValue,selectFromRegisteredValue,handleOnClickSwitchRegistMode} = useHandleRegistMode();

  const fetchPoints = async () => {
    const response = await axios.get(`${baseURL}/points`);
    const points:Point[] = JSON.parse(JSON.stringify(response.data.points));
    return points
  }
  const points = useQuery('points',fetchPoints);
  return (
    <>
      <StyledInputLabel>利用区間</StyledInputLabel>
      <ServiceSectionContainer>
        <Controller
          control={props.control}
          {...props.register(`serviceSections.${props.number}.startPoint`)}
          render={({field})=>(
            <>
              {selectFromRegisteredValue && 
                (
                  <SelectServiceSection {...field}>
                    {points.data?.map((point)=>(
                      <MenuItem key={point.id} value={point.name}>{point.name}</MenuItem>
                  ))}
                  </SelectServiceSection>
                )
              }
              {registNewValue && 
                (
                  <OutlinedInput
                    placeholder="始点"
                    onChange={(newValue)=>{
                      props.setValue(`serviceSections.${props.number}.startPoint`,newValue.target.value as string);
                    }}
                  />
                )
              }
            </>
          )}
        />
        <p> 〜 </p>
        <Controller
          control={props.control}
          {...props.register(`serviceSections.${props.number}.endPoint`)}
          render={({field})=>(
            <>
              {selectFromRegisteredValue && 
                (
                  <SelectServiceSection {...field} >
                    {points.data?.map((point)=>(
                      <MenuItem key={point.id} value={point.name}>{point.name}</MenuItem>
                  ))}
                  </SelectServiceSection>
                )
              }
              {registNewValue && 
                (
                  <OutlinedInput
                    placeholder="終点"
                    onChange={(newValue)=>{
                      props.setValue(`serviceSections.${props.number}.endPoint`,newValue.target.value as string);
                    }}
                  />
                )
              }
            </>
          )}
        />
      </ServiceSectionContainer>
      {/* <Button onClick={handleOnClickSwitchRegistMode}>新しい始点終点を登録する</Button> */}
      <Button onClick={handleOnClickSwitchRegistMode}>
        {registNewValue && ("登録済みの始点終点から選択する")}
        {selectFromRegisteredValue && ("新しい始点終点を登録する")}
      </Button>
    </>
  )
}