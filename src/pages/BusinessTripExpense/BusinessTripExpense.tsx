import OutlinedInput from "@mui/material/OutlinedInput"
import {Checkbox, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, styled, TextField} from "@mui/material";
import { InputAdornment } from "@material-ui/core";
import DateRangeIcon from '@mui/icons-material/DateRange';
import {format, add} from 'date-fns';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ChangeEvent, useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DateOfTrip } from "./DateOfTrip";
import { PlaceOfBusiness} from "./PlaceOfBusiness";
import { Purpose } from "./Purpose"
import { pageTitles } from "../../Utility/Enums";




export const BusinessTripExpense = () => {

  return (
    <>
      <h2>{pageTitles.BUSINESTRIP}</h2>
      <FormControl>
        <DateOfTrip/>
        <PlaceOfBusiness/>
        <Purpose/>
      </FormControl>

    </>
  )
}