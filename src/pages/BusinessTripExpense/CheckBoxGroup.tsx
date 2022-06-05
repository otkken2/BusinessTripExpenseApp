import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { useState } from "react";

export const CheckBoxGroup = () => {
  const [isCheckedGoDirectly,        setIsCheckedGoDirectly]         = useState<boolean>(false);
  const [isCheckedReturnDirectly,    setIsCheckedReturnDirectly]     = useState<boolean>(false);
  const [isCheckedOnFootAll,         setIsCheckedOnFootAll]          = useState<boolean>(false);
  const [isCheckedUseOfPublicCarAll, setIsCheckedUseOfPublicCarAll]  = useState<boolean>(false);
  const [isCheckedUseOfPrivateCarAll,setIsCheckedUseOfPrivateCarAll] = useState<boolean>(false);

  const handleOnChangeGoDirectlyCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedGoDirectly(!isCheckedGoDirectly);
  }
  const handleOnChangeReturnDirectlyCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedReturnDirectly(!isCheckedReturnDirectly);
  }
  const handleOnChangeOnFootAllCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedOnFootAll(!isCheckedOnFootAll);
  }
  const handleOnChangeUseOfPublicCarAllCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedUseOfPublicCarAll(!isCheckedUseOfPublicCarAll);
  }
  const handleOnChangeUseOfPrivateCarAllCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedUseOfPrivateCarAll(!isCheckedUseOfPrivateCarAll);
  }

  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={isCheckedGoDirectly}         onChange={handleOnChangeGoDirectlyCheckBox}/>}         label="直行"/>
        <FormControlLabel control={<Checkbox checked={isCheckedReturnDirectly}     onChange={handleOnChangeReturnDirectlyCheckBox}/>}     label="直帰"/>
        <FormControlLabel control={<Checkbox checked={isCheckedOnFootAll}          onChange={handleOnChangeOnFootAllCheckBox}/>}          label="全行程徒歩"/>
        <FormControlLabel control={<Checkbox checked={isCheckedUseOfPublicCarAll}  onChange={handleOnChangeUseOfPublicCarAllCheckBox}/>}  label="全行程公用車利用"/>
        <FormControlLabel control={<Checkbox checked={isCheckedUseOfPrivateCarAll} onChange={handleOnChangeUseOfPrivateCarAllCheckBox}/>} label="全行程自家用車利用"/>
      </FormGroup>
    </>
  )
}