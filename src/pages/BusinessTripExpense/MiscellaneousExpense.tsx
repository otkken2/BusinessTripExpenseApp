import { FormGroup, InputAdornment, OutlinedInput, styled } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { FlexContainer, StyledInputLabel } from "../../Utility/globalStyles";

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

export const MiscellaneousExpense = () => {

  const [numberOfTripDays, setNumberOfTripDays] = useState<number>(0);
  const handleOnChangeNumberOfTripDaysValue = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as unknown as HTMLInputElement;
    setNumberOfTripDays(target.value as unknown as number);
  }
  const unitPrice = 120;

  return (
    <>
      <FormGroup>
        <StyledInputLabel>旅行雑費</StyledInputLabel>
        <FlexContainer>
          <StyledOutlinedInput
            type="text"
            value={numberOfTripDays}
            onChange={handleOnChangeNumberOfTripDaysValue}
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