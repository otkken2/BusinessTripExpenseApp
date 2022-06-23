import { useState } from "react";
import { RegistMode } from "../Utility/Enums"

const useHandleRegistMode = () => {
  const [registMode,setRegistMode] = useState<RegistMode>(RegistMode.REGIST_NEW_VALUE);
  const registNewValue: boolean = (registMode === RegistMode.REGIST_NEW_VALUE);
  const selectFromRegisteredValue: boolean = (registMode === RegistMode.SELECT_FROM_REGISTERED_VALUE);

  const handleOnClickSwitchRegistMode = () => {
    if(registNewValue){
      setRegistMode(RegistMode.SELECT_FROM_REGISTERED_VALUE);
    }
    if(selectFromRegisteredValue){
      setRegistMode(RegistMode.REGIST_NEW_VALUE);
    }
  }
  return {registNewValue,selectFromRegisteredValue,handleOnClickSwitchRegistMode};
}

export default useHandleRegistMode;