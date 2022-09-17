import { Checkbox, FormControlLabel, FormGroup, MenuItem, Radio, RadioGroup, Select } from "@mui/material"
import { useAtom } from "jotai";
import { ChangeEvent, useState } from "react";
import { Control, Controller, useForm, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { allTheWayTypeAtom, isCheckedGoDirectlyAtom, isCheckedReturnDirectlyAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { StyledInputLabel } from "../../Utility/globalStyles";
import { Inputs } from "./BusinessTripExpense";

export const enum AllTheWayType{
  ON_FOOT_ALL = "全行程徒歩",
  USE_OF_PUBLIC_CAR_ALL = "全行程公用車利用",
  USE_OF_PRIVATE_CAR_ALL = "全行程自家用車同乗",
}

interface CheckBoxGroupProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}


export const CheckBoxGroup = (props:CheckBoxGroupProps) => {
  const [isCheckedGoDirectly,        setIsCheckedGoDirectly]         = useAtom(isCheckedGoDirectlyAtom);
  const [isCheckedReturnDirectly,    setIsCheckedReturnDirectly]     = useAtom(isCheckedReturnDirectlyAtom);

  const [allTheWayType,setAllTheWayType] = useAtom(allTheWayTypeAtom);
  const handleOnChangeAllTheWayType = (event: ChangeEvent<HTMLInputElement>) => {
    setAllTheWayType((event.target as HTMLInputElement).value as unknown as AllTheWayType);
  }

  const handleOnChangeGoDirectlyCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedGoDirectly(!isCheckedGoDirectly);
  }
  const handleOnChangeReturnDirectlyCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedReturnDirectly(!isCheckedReturnDirectly);
  }

  return (
    <>
      <Controller
        control={props.control}
        name="isCheckedGoDirectly"
        render={()=>(
          <FormControlLabel 
            control={
              <Checkbox 
                checked={isCheckedGoDirectly} 
                {...props.register("isCheckedGoDirectly")} 
                onChange={handleOnChangeGoDirectlyCheckBox}
              />
            } 
            label="直行"
          />
        )}
      />
      <Controller
        control={props.control}
        name="isCheckedReturnDirectly"
        render={()=>(
          <FormControlLabel 
            control={
              <Checkbox 
                checked={isCheckedReturnDirectly}   
                {...props.register("isCheckedReturnDirectly")}  
                onChange={handleOnChangeReturnDirectlyCheckBox}
              />
            }     
            label="直帰"
          />
          
        )}
      />
      <StyledInputLabel>徒歩・自家用車・公用車のどれかで全行程を終えた方はこちらを選択</StyledInputLabel>
      <Controller
        control={props.control}
        name="allTheWayType"
        render={()=>
        (
          <Select
            onChange={(event)=>{
              props.setValue("allTheWayType",event.target.value as AllTheWayType);
            }}
            sx={{marginBottom:"15px"}}
          >
            <MenuItem value="">未選択</MenuItem>
            <MenuItem value={AllTheWayType.ON_FOOT_ALL}>{AllTheWayType.ON_FOOT_ALL}</MenuItem>
            <MenuItem value={AllTheWayType.USE_OF_PRIVATE_CAR_ALL}>{AllTheWayType.USE_OF_PRIVATE_CAR_ALL}</MenuItem>
            <MenuItem value={AllTheWayType.USE_OF_PUBLIC_CAR_ALL}>{AllTheWayType.USE_OF_PUBLIC_CAR_ALL}</MenuItem>
          </Select>
        )}
      />
    </>
  )
}