import { Input, InputAdornment } from "@mui/material"
import { useAtom } from "jotai";
import { Control, Controller, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FlexContainer, StyledInputLabel } from "../../Utility/globalStyles"
import { Inputs } from "./BusinessTripExpense";
import { totalExpenseAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms"

interface TotalExpenseProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue: UseFormSetValue<Inputs>
  watch: UseFormWatch<Inputs>
}

export const TotalExpense = (props: TotalExpenseProps) => {
  const [totalExpense] = useAtom(totalExpenseAtom); 
  return (
    <>
      <FlexContainer>
        <StyledInputLabel>合計請求額</StyledInputLabel>
        <Controller
          control={props.control}
          name="totalExpense"
          render={()=>(
            <Input
              {...props.register("totalExpense")}
              disabled
              type="text"
              value={totalExpense}
              endAdornment={
                <InputAdornment position="end">円</InputAdornment>
              }
            />
          )}
        />
      </FlexContainer>
    </>
  )
}