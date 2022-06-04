// import OutlinedInput from "@mui/material/OutlinedInput"
import { FormControlLabel, Radio, RadioGroup, styled, TextField, TextFieldProps} from "@mui/material";
// import { InputAdornment } from "@material-ui/core";
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import {format, add} from 'date-fns';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ChangeEvent, useState } from "react";
import {FlexContainer,StyledInputLabel} from "../../Utility/globalStyles";
import AdapterDateFns from '@mui/lab/AdapterDateFns';



const StyledRadioGroup = styled(RadioGroup)({
  display:"flex",
  flexDirection:"row"
})

// TODO なぜかスタイルが適用されない
const StyledDatePicker = styled(DatePicker)({
  margin: "10px",
  backgroundColor: 'red',
})

const enum DayOrOvernight{
  DAY = "day",
  OVERNIGHT = "overnight"
}

export const DateOfTrip = () => {
  const [firstDay,setFirstDay] = useState<Date | null>(null);
  const [lastDay, setLastDay]  = useState<Date | null>(null);

  const [dayOrOvernight, setDayOrOvernight] = useState(DayOrOvernight.DAY);
  const isOvernight = () => {
    return dayOrOvernight === DayOrOvernight.OVERNIGHT;
  }

  const handleOnChangeFirstDay:(newFirstDay: Date | null) => void = (newFirstDay: Date | null) => {
    setFirstDay(newFirstDay)
  }
  const handleOnChangeLastDay :(newLastDay: Date | null) => void  = (newLastDay: Date | null) => {
    setLastDay(newLastDay)
  }

  const handleOnChangeDayOrOverNight = (event: ChangeEvent<HTMLInputElement>) => {
    setDayOrOvernight((event.target as HTMLInputElement).value as DayOrOvernight);
  }
  return (
    <>
      <FlexContainer>
        <StyledInputLabel>旅行月日</StyledInputLabel>
        <StyledRadioGroup onChange={handleOnChangeDayOrOverNight} value={dayOrOvernight} defaultValue={DayOrOvernight.DAY} name="radio-day-or-overnight">
          <FormControlLabel value={DayOrOvernight.DAY} control={<Radio />} label="日帰り"/>
          <FormControlLabel value={DayOrOvernight.OVERNIGHT} control={<Radio />} label="宿泊"/>
        </StyledRadioGroup>
      </FlexContainer>
      <FlexContainer>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StyledDatePicker
            label="初日"
            value={firstDay}
            // @ts-ignore
            onChange={handleOnChangeFirstDay}
            inputFormat='yyyy/MM/dd'
            mask='____/__/__'
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps)=><TextField {...params}/>}
          />
          {isOvernight() && (
            <StyledDatePicker
              label="最終日"
              value={lastDay}
              // @ts-ignore
              onChange={handleOnChangeLastDay}
              inputFormat='yyyy/MM/dd'
              mask='____/__/__'
              renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps)=><TextField {...params}/>}
            />)}
        </LocalizationProvider>
      </FlexContainer>
    </>
  )
}