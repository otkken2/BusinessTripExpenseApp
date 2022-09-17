import { UseFormWatch } from "react-hook-form";
import { Inputs } from "../pages/BusinessTripExpense/BusinessTripExpense";
import { AllTheWayType } from "../pages/BusinessTripExpense/CheckBoxGroup";

export const useAllTheWayType = (watch:UseFormWatch<Inputs>):[(watch:UseFormWatch<Inputs>)=> boolean ] => {
  
  const hasUsedServiceSections = (watch:UseFormWatch<Inputs>) => {
    return watch("allTheWayType") !== (undefined || null);
  }
  return [hasUsedServiceSections];
}