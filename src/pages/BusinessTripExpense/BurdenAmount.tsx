import { InputAdornment, OutlinedInput } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { StyledInputLabel } from "../../Utility/globalStyles"

export const BurdenAmount = () => {
  const [burdenAmount, setBurdenAmount] = useState<number>(0);
  const handleOnChangeBurdenAmountValue = (event: ChangeEvent<HTMLInputElement>) => {
    setBurdenAmount(event.target.value as unknown as number)
  }
  return (
    <>
      <StyledInputLabel>別途負担額</StyledInputLabel>
      <OutlinedInput
        type="text"
        value={burdenAmount}
        onChange={handleOnChangeBurdenAmountValue}
        endAdornment={
          <InputAdornment position="end">円</InputAdornment>
        }
      />
    </>
  )
}