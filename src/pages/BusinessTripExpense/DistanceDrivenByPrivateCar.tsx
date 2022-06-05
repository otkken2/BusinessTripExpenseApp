import { Checkbox, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, styled } from "@mui/material"
import { ChangeEvent, useState } from "react";

const FlexContainer = styled('div')({
  display: "flex",
  flexDirection: "row"
})

const StyledInputLabel = styled('label')({
  marginBottom: "5px",
  marginRight: "50px",
})

const StyledOutlinedInput = styled(OutlinedInput)({
  flexGrow: 2,
  height: "56px",
})
const StyledP = styled('p')({
  flexGrow: 1,
  padding: "15px",
  lineHeight: 1,
  margin: 0,
})

export const DistanceDrivenByPrivateCar = () => {
  const [drivenByPrivateCar,setDrivenByPrivateCar] = useState<boolean>(false);
  const handleOnChangeCheckBox = () => {
    drivenByPrivateCar === false && setDistanceValue(0);
    setDrivenByPrivateCar(!drivenByPrivateCar);
  };
  const unitPrice = 15;

  const [distanceValue, setDistanceValue] = useState<number>(0);
  const handleOnChangeDistanceValue = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as unknown as HTMLInputElement;
    setDistanceValue(target.value as unknown as number);
  }
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={drivenByPrivateCar} onChange={handleOnChangeCheckBox}/>} label="自家用車運転"/>
        <StyledInputLabel>運転距離</StyledInputLabel>
        <FlexContainer>
          <StyledOutlinedInput
            disabled={!drivenByPrivateCar}
            type="text"
            value={distanceValue}
            onChange={handleOnChangeDistanceValue}
            endAdornment={
              <InputAdornment position="end">km</InputAdornment>
            }
          />
          <StyledP>{`✖️ ${unitPrice}円`}</StyledP>
        </FlexContainer>
      </FormGroup>

    </>
  )
}