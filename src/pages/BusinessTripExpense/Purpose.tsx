import { Button, FormControl, MenuItem, OutlinedInput, Select, SelectChangeEvent }from "@mui/material";
import {StyledInputLabel} from "../../Utility/globalStyles"
import { Control, Controller, UseFormRegister,UseFormSetValue} from "react-hook-form";
import { baseURL, Inputs } from "./BusinessTripExpense";
import useHandleRegistMode from "../../hooks/useHandleRegistMode";
import axios from "axios";
import { useQuery } from "react-query";

interface Purpose{
  id: number,
  name: string
}

interface PurposeProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
}

export const Purpose = (props:PurposeProps) => {
  const [registNewValue,selectFromRegisteredValue,handleOnClickSwitchRegistMode] = useHandleRegistMode();

  const fetchPurposes = async () => {
    const response = await axios.get(`${baseURL}/purpose`);
    const purposes: Purpose[] = JSON.parse(JSON.stringify(response.data.purposes));
    return purposes;
  }

  const purposes = useQuery('purposes',fetchPurposes);
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
                        {purposes.data?.map((purpose)=> (
                          <MenuItem key={purpose.id} value={purpose.name}>{purpose.name}</MenuItem>
                        ))}
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