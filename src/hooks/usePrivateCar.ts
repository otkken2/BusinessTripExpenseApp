import { UseFormWatch } from "react-hook-form";
import { Inputs } from "../pages/BusinessTripExpense/BusinessTripExpense";

export const usePrivateCar = (watch:UseFormWatch<Inputs>):[()=>number]=> {
  
  const calculateUseOfPrivateCarExpense = () => {
    const unitPrice = 15;
    const distance = watch("distanceOfDrivenByPrivateCar");
    
    return distance*unitPrice;;
  }

  return [calculateUseOfPrivateCarExpense];
}