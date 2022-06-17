import { Input, InputAdornment } from "@mui/material"
import { useState } from "react";
import { FlexContainer, StyledInputLabel } from "../../Utility/globalStyles"

export const TotalExpense = () => {
  const [totalExpense] = useState<number>(0);
  // const handleOnChangeTotalExpense = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTotalExpense(event.target.value as unknown as number);
  // }
  return (
    <>
      <FlexContainer>
        <StyledInputLabel>請求額</StyledInputLabel>
        <Input
          disabled
          type="text"
          value={totalExpense}
          endAdornment={
            <InputAdornment position="end">円</InputAdornment>
          }
        />
      </FlexContainer>
    </>
  )
}