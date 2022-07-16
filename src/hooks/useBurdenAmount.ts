import { SetStateAction, useAtom } from "jotai";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Inputs } from "../pages/BusinessTripExpense/BusinessTripExpense";
import { fareAtom, fullAmountAtom, otherAtom } from "../Utility/Atoms/BusinessTripExpenseAtoms";

export const useBurdenAmount = (setValue:UseFormSetValue<Inputs>,watch:UseFormWatch<Inputs>):[
    (serviceSectionExpenseTotal: number, useOfPrivateCarExpense: number, miscellaneousExpense: number, hotelCharge: number) => number,
    boolean,(update:SetStateAction<boolean>)=>void,
    boolean,(update:SetStateAction<boolean>)=>void,
    boolean,(update:SetStateAction<boolean>)=>void,
  ] => {
  const [isTypeFullAmount,setIsTypeFullAmount] = useAtom(fullAmountAtom);
  const [isTypeFare,setIsTypeFare] = useAtom(fareAtom);
  const [isTypeOther,setIsTypeOther] = useAtom(otherAtom);

  const calculateBurdenAmount = 
    (
      serviceSectionExpenseTotal:number,
      useOfPrivateCarExpense:number,
      miscellaneousExpense:number,
      hotelCharge:number
    ) => 
    {
      if(isTypeFullAmount){
        setValue("burdenAmount",serviceSectionExpenseTotal + useOfPrivateCarExpense + miscellaneousExpense + hotelCharge);
        return watch("burdenAmount") as number;
      }
      if(isTypeFare){
        setValue("burdenAmount",serviceSectionExpenseTotal);
        return watch("burdenAmount") as number;
      }
      if(isTypeOther){
        return watch("burdenAmount") as number;
      }
      return 0;
    }


  return[
          calculateBurdenAmount,

          isTypeFullAmount,setIsTypeFullAmount,
          isTypeFare      ,setIsTypeFare,
          isTypeOther     ,setIsTypeOther
  ];
}