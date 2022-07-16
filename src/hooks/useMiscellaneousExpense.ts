import { UseFormWatch } from "react-hook-form";
import { Inputs } from "../pages/BusinessTripExpense/BusinessTripExpense";

export const useMiscellaneousExpense = (watch:UseFormWatch<Inputs>):[
  unitPrice: number,calculateMiscellaneousExpense:()=> number
] => {

  const unitPrice = 120;
  const calculateMiscellaneousExpense = () => {
    const watchNumberOfTripDays = watch("numberOfTripDays");
    return watchNumberOfTripDays*unitPrice;
  }

  return [unitPrice,calculateMiscellaneousExpense];
}