import { Button, FormControl, MenuItem, OutlinedInput, Select, SelectChangeEvent }from "@mui/material";
import {StyledInputLabel} from "../../Utility/globalStyles"
import { Control, Controller, UseFormRegister,UseFormSetValue} from "react-hook-form";
import { Inputs } from "./BusinessTripExpense";
import useHandleRegistMode from "../../hooks/useHandleRegistMode";

interface PurposeProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}

export const Purpose = (props:PurposeProps) => {
  const {registNewValue,selectFromRegisteredValue,handleOnClickSwitchRegistMode} = useHandleRegistMode();

  return (
  <>
    <FormControl>
      <StyledInputLabel id="purpose">用務内容</StyledInputLabel>
        <>
          <Controller
            control={props.control}
            name="purpose"
            render={({field})=>(
              <>
                {selectFromRegisteredValue && 
                  (
                    <Select 
                      {...field}
                      defaultValue=""
                      >
                      <MenuItem value="書類提出">書類提出</MenuItem>
                      <MenuItem value="打ち合わせ">打ち合わせ</MenuItem>
                      <MenuItem value="視察">視察</MenuItem>
                    </Select>
                  )
                }
                {registNewValue && 
                  (
                    <OutlinedInput
                      placeholder="用務内容名を入力"
                      onChange={(newValue)=>{
                        props.setValue("purpose",newValue.target.value as unknown as string);
                      }}
                    />
                  )
                }
              </>
            )}
          />
          <Button onClick={handleOnClickSwitchRegistMode}>
            {selectFromRegisteredValue && "新しい用務内容を登録する"}
            {registNewValue && "登録済みの用務内容から選択する"}
          </Button>
        </>
    </FormControl>
  </>)
}