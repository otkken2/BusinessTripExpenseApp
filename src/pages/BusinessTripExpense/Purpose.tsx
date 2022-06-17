import { FormControl, MenuItem, Select, SelectChangeEvent }from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {StyledInputLabel} from "../../Utility/globalStyles"
import {useAtom} from "jotai";
import { purposeAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { Control, Controller, UseFormRegister,UseFormSetValue} from "react-hook-form";
import { Inputs } from "./BusinessTripExpense";

interface PurposeProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}

export const Purpose = (props:PurposeProps) => {
  return (
  <>
    <FormControl>
      <StyledInputLabel id="purpose">用務内容</StyledInputLabel>
      <Controller
        control={props.control}
        name="purpose"
        render={({field})=>(
          <>
            <Select {...field}>
              {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
              <MenuItem value="書類提出">書類提出</MenuItem>
              <MenuItem value="打ち合わせ">打ち合わせ</MenuItem>
              <MenuItem value="視察">視察</MenuItem>
            </Select>
          </>
        )}
      />
      <Link to="/registPurpose" style={{textDecoration:"none"}}>新しい用務内容を登録する</Link>
    </FormControl>
  </>)
}