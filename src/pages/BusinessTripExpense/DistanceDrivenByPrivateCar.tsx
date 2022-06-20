import { Checkbox, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, styled } from "@mui/material"
import { useAtom } from "jotai";
import { ChangeEvent, useState } from "react";
import { Control, Controller, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { drivenByPrivateCarAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { Inputs } from "./BusinessTripExpense";

const FlexContainer = styled('div')({
  display: "flex",
  flexDirection: "row"
})

const StyledInputLabel = styled('label')({
  marginBottom: "5px",
  marginRight: "50px",
})

const StyledOutlinedInput = styled(OutlinedInput)({
  flexGrow: 2,
  height: "56px",
})
const StyledP = styled('p')({
  flexGrow: 1,
  padding: "15px",
  lineHeight: 1,
  margin: 0,
})

interface DistanceDrivenByPrivateCarProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
  watch:UseFormWatch<Inputs>
}
const unitPrice = 15;

export const DistanceDrivenByPrivateCar = (props: DistanceDrivenByPrivateCarProps) => {
  const [drivenByPrivateCar,setDrivenByPrivateCar] = useAtom(drivenByPrivateCarAtom);
  const handleOnChangeCheckBox = () => {
    // drivenByPrivateCar === false && setDistanceValue(0);
    setDrivenByPrivateCar(!drivenByPrivateCar);
  };

  return (
    <>
      <FormGroup>
        <Controller
          control={props.control}
          name="drivenByPrivateCar"
          render={()=>(
            <>
              <FormControlLabel control={<Checkbox {...props.register("drivenByPrivateCar")}checked={drivenByPrivateCar} onChange={handleOnChangeCheckBox}/>} label="自家用車運転"/>
            </>
         )}
        />
        <StyledInputLabel>運転距離</StyledInputLabel>
        <FlexContainer>
          <Controller
            control={props.control}
            name="distanceValue"
            render={()=>(
              <>
                <StyledOutlinedInput
                  {...props.register("distanceValue")}
                  disabled={!drivenByPrivateCar}
                  type="text"
                  onChange={(newValue)=>{
                    props.setValue("distanceValue",newValue.target.value as unknown as number)
                  }}
                  endAdornment={
                    <InputAdornment position="end">km</InputAdornment>
                  }
                />
              </>
            )}
          />
          <StyledP>{`✖️ ${unitPrice}円`}</StyledP>
        </FlexContainer>
      </FormGroup>

    </>
  )
}