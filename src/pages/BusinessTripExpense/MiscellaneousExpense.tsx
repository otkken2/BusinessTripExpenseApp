import { FormGroup, InputAdornment, OutlinedInput, styled } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FlexContainer, StyledInputLabel } from "../../Utility/globalStyles";
import { Inputs } from "./BusinessTripExpense";

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

interface MiscellaneousExpenseProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}

export const MiscellaneousExpense = (props: MiscellaneousExpenseProps) => {

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
          <Controller
            control={props.control}
            name="numberOfTripDays"
            render={()=>(
              <StyledOutlinedInput
                {...props.register("numberOfTripDays")}
                type="text"
                value={numberOfTripDays}
                onChange={handleOnChangeNumberOfTripDaysValue}
                endAdornment={
                  <InputAdornment position="end">日</InputAdornment>
                }
              />
            )}
          />
          <StyledP>{`✖️ ${unitPrice}円`}</StyledP>
        </FlexContainer>
      </FormGroup>

    </>
  )
}