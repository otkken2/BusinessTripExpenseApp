import { UseFormWatch } from "react-hook-form";
import { Inputs } from "../pages/BusinessTripExpense/BusinessTripExpense";

export const useServiceSection = (watch:UseFormWatch<Inputs>):[()=>number] => {
  
  const calculateServiceSectionExpenseTotal = ()=>{
    let total: number = 0;
    const watchServiceSections = watch('serviceSections');
    watchServiceSections.map((serviceSection)=>{
      return total += Number(serviceSection.serviceSectionExpense*(serviceSection.oneWayOrRoundTrip as number));
    })
    return total;
  }
  
  return [calculateServiceSectionExpenseTotal];
}