import { Button, MenuItem, OutlinedInput, Select } from "@mui/material";
import axios from "axios";
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { useQuery } from "react-query";
import useHandleRegistMode from "../../../hooks/useHandleRegistMode";
import { StyledInputLabel } from "../../../Utility/globalStyles";
import { baseURL, Inputs } from "../BusinessTripExpense";
import { MeansOfTransportInterface } from "../../BusinessTripExpense/ServiceSection";

interface MeansOfTransportProps{
  number: number
  register: UseFormRegister<Inputs>
  setValue: UseFormSetValue<Inputs>
  control: Control<Inputs,any>
}
export const MeansOfTransport = (props: MeansOfTransportProps) => {
  const {registNewValue,selectFromRegisteredValue,handleOnClickSwitchRegistMode} = useHandleRegistMode();

  const fetchMeansOfTransport = async () => {
    const response = await axios.get(`${baseURL}/meansOfTransport`);
    const meansOfTransport: MeansOfTransportInterface[] = JSON.parse(JSON.stringify(response.data.meansOfTransport));
    return meansOfTransport;
  }
  const meansOfTransport = useQuery('meansOfTransport',fetchMeansOfTransport);
  console.log(meansOfTransport.data);

  return ( 
    <>
      <StyledInputLabel>交通機関</StyledInputLabel>
      <Controller
        control={props.control}
        {...props.register(`serviceSections.${props.number}.meansOfTransport`)}
        render={({field})=>(
          <>
            {selectFromRegisteredValue && 
              (
                <Select {...field}>            
                  { !meansOfTransport.isLoading &&
                    meansOfTransport.data?.map((meansOfTransport)=>(
                      <MenuItem key={meansOfTransport.id} value={meansOfTransport.name}>{meansOfTransport.name}</MenuItem>
                    ))
                  }
                </Select>
              )
            }
            {registNewValue && 
              (
                <OutlinedInput
                placeholder="例）JR山手線"
                onChange={(newValue)=>{
                  props.setValue(`serviceSections.${props.number}.meansOfTransport`,newValue.target.value as string);
                }}
                />
                )
              }
          </>
        )}
      />
      <Button onClick={handleOnClickSwitchRegistMode}>
        {selectFromRegisteredValue && "新しい交通機関を登録する"}
        {registNewValue && "登録済みの交通機関から選択する"}
      </Button>
    </>
  )
}