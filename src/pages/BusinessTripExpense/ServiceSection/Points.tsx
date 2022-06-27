import styled from "@emotion/styled";
import { Button, MenuItem, OutlinedInput, Select } from "@mui/material";
import { lineHeight } from "@mui/system";
import axios from "axios";
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { useQuery, UseQueryResult } from "react-query";
import useHandleRegistMode from "../../../hooks/useHandleRegistMode";
import { StyledInputLabel } from "../../../Utility/globalStyles";
import { baseURL, Inputs } from "../BusinessTripExpense";

const ServiceSectionContainer = styled('div')({
  display: "flex",
  flexDirection: "row",
  // flexGrow: "1",
  width: "100%",
})

const SelectServiceSection = styled(Select)({
  flexGrow: 1,
  marginLeft: "5px"
})

const ButtonContainer = styled('div')({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
})

export interface Point{
  id: number,
  name: string
}

interface PointsProps{
  control:Control<Inputs,any>
  register: UseFormRegister<Inputs>
  number: number
  setValue: UseFormSetValue<Inputs>
}


export const Points = (props: PointsProps) => {
  const [registNewStartPointValue, selectFromRegisteredStartPointValue, handleOnClickSwitchRegistModeForStartPoint] = useHandleRegistMode();
  const [registNewEndPointValue, selectFromRegisteredEndPointValue, handleOnClickSwitchRegistModeForEndPoint] = useHandleRegistMode();

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
        <label htmlFor="#" style={{margin: "auto"}}>
          始点
        </label>
        <Controller
          control={props.control}
          {...props.register(`serviceSections.${props.number}.startPoint`)}
          render={({field})=>(
            <>
              {selectFromRegisteredStartPointValue && 
                (
                  <SelectServiceSection {...field}>
                    {points.data?.map((point)=>(
                      <MenuItem key={point.id} value={point.name}>{point.name}</MenuItem>
                  ))}
                  </SelectServiceSection>
                )
              }
              {registNewStartPointValue && 
                (
                  <OutlinedInput
                    placeholder="始点"
                    onChange={(newValue)=>{
                      props.setValue(`serviceSections.${props.number}.startPoint`,newValue.target.value as string);
                    }}
                    sx={{flexGrow: 1,marginLeft: "5px"}}
                  />
                )
              }
            </>
          )}
        />
      </ServiceSectionContainer>
      <Button onClick={handleOnClickSwitchRegistModeForStartPoint}>
        {registNewStartPointValue && ("登録済みの始点を選択する")}
        {selectFromRegisteredStartPointValue && ("新しい始点を登録する")}
      </Button>
        <p> 〜 </p>
      <ServiceSectionContainer>
      <label htmlFor="#" style={{margin: "auto"}}>
        終点
      </label>
        <Controller
          control={props.control}
          {...props.register(`serviceSections.${props.number}.endPoint`)}
          render={({field})=>(
            <>
              {selectFromRegisteredEndPointValue && 
                (
                  <SelectServiceSection {...field} >
                    {points.data?.map((point)=>(
                      <MenuItem key={point.id} value={point.name}>{point.name}</MenuItem>
                      ))}
                  </SelectServiceSection>
                )
              }
              {registNewEndPointValue && 
                (
                  <OutlinedInput
                    placeholder="終点"
                    onChange={(newValue)=>{
                      props.setValue(`serviceSections.${props.number}.endPoint`,newValue.target.value as string);
                    }}
                    sx={{flexGrow: 1,marginLeft: "5px"}}
                  />
                  )
                }
            </>
          )}
          />
      </ServiceSectionContainer>
      <ButtonContainer>
        
        <Button onClick={handleOnClickSwitchRegistModeForEndPoint}>
          {registNewEndPointValue && ("登録済みの終点を選択する")}
          {selectFromRegisteredEndPointValue && ("新しい終点を登録する")}
        </Button>
      </ButtonContainer>
    </>
  )
}