import { FormControlLabel, Radio, RadioGroup, styled, TextField, TextFieldProps} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ChangeEvent } from "react";
import {FlexContainer,StyledInputLabel} from "../../Utility/globalStyles";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { dayOrOvernightAtom, firstDayAtom, lastDayAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import {useAtom} from "jotai";
import { DayOrOvernight } from "../../Utility/Enums";
import { Control, Controller, UseFormRegister, UseFormSetValue} from "react-hook-form";
import { Inputs } from "./BusinessTripExpense";


const StyledRadioGroup = styled(RadioGroup)({
  display:"flex",
  flexDirection:"row"
})

// TODO なぜかスタイルが適用されない
const StyledDatePicker = styled(DatePicker)({
  margin: "10px",
  backgroundColor: 'red',
})

interface DateOfTripProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}

export const DateOfTrip = (props:DateOfTripProps) => {
  const register = props.register;
  const [firstDay,setFirstDay] = useAtom(firstDayAtom);
  const [lastDay, setLastDay]  = useAtom(lastDayAtom);

  const [dayOrOvernight, setDayOrOvernight] = useAtom(dayOrOvernightAtom);
  const isOvernight = () => {
    return dayOrOvernight === DayOrOvernight.OVERNIGHT;
  }

  const handleOnChangeFirstDay = (newFirstDay: Date | null) => {
    setFirstDay(newFirstDay)
  }
  const handleOnChangeLastDay = (newLastDay: Date | null) => {
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
          <FormControlLabel value={DayOrOvernight.DAY} control={<Radio {...register("dayOrOvernight")}/>} label="日帰り"/>
          <FormControlLabel value={DayOrOvernight.OVERNIGHT} control={<Radio {...register("dayOrOvernight")}/>} label="宿泊"/>
        </StyledRadioGroup>
      </FlexContainer>
      <FlexContainer>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          control={props.control}
          name="firstDay"
          render={(
            {
              field:{value,onChange}
            }
          )=>(
            <>
              <StyledDatePicker
                label="初日"
                value={value}
                inputFormat='yyyy/MM/dd'
                mask='____/__/__'
                renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps)=>
                  <TextField {...params} />
                }
                onChange={(newValue)=>{
                  props.setValue("firstDay",newValue as Date)
                }}
              />
            </>
          )}
        />
          {isOvernight() && (
            <Controller
              control={props.control}
              name="lastDay"
              render={(
                {
                  field:{value,onChange}
                }
              )=>(
                <>
                  <StyledDatePicker
                    label="最終日"
                    value={value}
                    // @ts-ignore
                    // onChange={handleOnChangeLastDay}
                    inputFormat='yyyy/MM/dd'
                    mask='____/__/__'
                    renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps)=>
                      <TextField {...params} />
                    }
                    onChange={(newValue)=>{
                      props.setValue("lastDay",newValue as Date)
                    }}
                  />
                </>
              )}
            />
          )}
        </LocalizationProvider>
      </FlexContainer>
    </>
  )
}