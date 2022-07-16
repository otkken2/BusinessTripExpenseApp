import { FormGroup, InputAdornment, OutlinedInput, styled } from "@mui/material";
import { Control, Controller, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useMiscellaneousExpense } from "../../hooks/useMiscellaneousExpense";
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
  watch:UseFormWatch<Inputs>
}

export const MiscellaneousExpense = (props: MiscellaneousExpenseProps) => {

  const [unitPrice,] = useMiscellaneousExpense(props.watch) 

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
                defaultValue="1"
                onChange={(newValue)=>{
                  props.setValue("numberOfTripDays",newValue.target.value as unknown as number)
                }}
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