import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from "@mui/material"
import { ChangeEvent, useState } from "react";

const enum AllTheWayType{
  ON_FOOT_ALL = "onFootAll",
  USE_OF_PUBLIC_CAR_ALL = "useOfPublicCarAll",
  USE_OF_PRIVATE_CAR_ALL = "usePrivateCarAll",
}

export const CheckBoxGroup = () => {
  const [isCheckedGoDirectly,        setIsCheckedGoDirectly]         = useState<boolean>(false);
  const [isCheckedReturnDirectly,    setIsCheckedReturnDirectly]     = useState<boolean>(false);

  const [allTheWayType,setAllTheWayType] = useState<AllTheWayType | null>(null);
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
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={isCheckedGoDirectly}         onChange={handleOnChangeGoDirectlyCheckBox}/>}         label="直行"/>
        <FormControlLabel control={<Checkbox checked={isCheckedReturnDirectly}     onChange={handleOnChangeReturnDirectlyCheckBox}/>}     label="直帰"/>
      </FormGroup>
      <RadioGroup onChange={handleOnChangeAllTheWayType} value={allTheWayType}>
        <FormControlLabel value={AllTheWayType.ON_FOOT_ALL} control={<Radio />} label="全行程徒歩"/>
        <FormControlLabel value={AllTheWayType.USE_OF_PUBLIC_CAR_ALL} control={<Radio />} label="全行程公用車利用"/>
        <FormControlLabel value={AllTheWayType.USE_OF_PRIVATE_CAR_ALL} control={<Radio />} label="全行程自家用車利用"/>
      </RadioGroup>
    </>
  )
}