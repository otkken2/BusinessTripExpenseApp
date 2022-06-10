import {MenuItem, Select, SelectChangeEvent, styled, Paper, OutlinedInput, InputAdornment}from "@mui/material";
import { useAtom } from "jotai";
import { useState } from "react";
import { meansOrTransportAtom,startPointAtom,endPointAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { StyledInputLabel } from "../../Utility/globalStyles";

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

interface ServiceSectionProps{
  number: number,
}


export const ServiceSection = (props:ServiceSectionProps) => {
  const [meansOfTransport, setMeansOfTransport] = useAtom(meansOrTransportAtom);
  const handleOnChangeServiceSection = (event: SelectChangeEvent<string>) => {
    setMeansOfTransport(event.target.value);
  }

  const [startPoint, setStartPoint] = useAtom(startPointAtom);
  const handelOnChangeStartPoint = (event:SelectChangeEvent<unknown>) => {
    setStartPoint(event.target.value as unknown as string);
  }

  const [endPoint, setEndPoint] = useAtom(endPointAtom);
  const handelOnChangeEndPoint = (event:SelectChangeEvent<unknown>) => {
    setEndPoint(event.target.value as string);
  }
  
  return (
    <>
      <h3>{`利用区間${props.number}`}</h3>
      <Paper>
        <Container>
          <StyledInputLabel>交通手段・機関</StyledInputLabel>
          <Select
            value={meansOfTransport}
            onChange={handleOnChangeServiceSection}
            >
            {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
            <MenuItem value="京王線">京王線</MenuItem>
            <MenuItem value="小田急線">小田急線</MenuItem>
            <MenuItem value="JR相模線">JR相模線</MenuItem>
          </Select>

          <StyledInputLabel>利用区間</StyledInputLabel>
          <ServiceSectionContainer>
            <SelectServiceSection 
              value={startPoint} 
              onChange={handelOnChangeStartPoint}
            >
              {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
              <MenuItem value="座間駅">座間駅</MenuItem>
              <MenuItem value="入谷駅">入谷駅</MenuItem>
              <MenuItem value="横浜駅">横浜駅</MenuItem>
              <MenuItem value="川崎駅">川崎駅</MenuItem>
              <MenuItem value="登戸駅">登戸駅</MenuItem>
            </SelectServiceSection>
            <p> 〜 </p>
            <SelectServiceSection 
              value={endPoint}
              onChange={handelOnChangeEndPoint}  
            >
              {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
              <MenuItem value="座間駅">座間駅</MenuItem>
              <MenuItem value="入谷駅">入谷駅</MenuItem>
              <MenuItem value="横浜駅">横浜駅</MenuItem>
              <MenuItem value="川崎駅">川崎駅</MenuItem>
              <MenuItem value="登戸駅">登戸駅</MenuItem>
            </SelectServiceSection>
          </ServiceSectionContainer>
          <StyledInputLabel>経路重複</StyledInputLabel>
          <Select value="無">
            <MenuItem value="無">無</MenuItem>
            <MenuItem value="有">有</MenuItem>
          </Select>

          <StyledInputLabel>利用経費</StyledInputLabel>
          <OutlinedInput
            type="text"
            endAdornment={
              <InputAdornment position="end">円</InputAdornment>
            }
          />
        </Container>
      </Paper>
    </>
  )
};