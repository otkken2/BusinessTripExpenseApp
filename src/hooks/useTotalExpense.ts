import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Inputs } from "../pages/BusinessTripExpense/BusinessTripExpense";
import { useBurdenAmount } from "./useBurdenAmount";
import { useHotelCharge } from "./useHotelCharge";
import { useMiscellaneousExpense } from "./useMiscellaneousExpense";
import { usePrivateCar } from "./usePrivateCar";
import { useServiceSection } from "./useServiceSection";

export const useTotalExpense = 
  (watch:UseFormWatch<Inputs>,setValue:UseFormSetValue<Inputs>):[
    () => void,
  ] => {

  const [calculateServiceSectionExpenseTotal] = useServiceSection(watch);
  const [calculateUseOfPrivateCarExpense]  = usePrivateCar(watch);
  const [,calculateMiscellaneousExpense] = useMiscellaneousExpense(watch);
  const [,calculateHotelCharge] = useHotelCharge(watch);
  const [calculateBurdenAmount] = useBurdenAmount(setValue,watch);

  const calculateTotalExpense = () => {
    let serviceSectionExpenseTotal = calculateServiceSectionExpenseTotal();
    let useOfPrivateCarExpense = calculateUseOfPrivateCarExpense();
    let miscellaneousExpense = calculateMiscellaneousExpense();
    let hotelCharge = calculateHotelCharge();
    let burdenAmount = calculateBurdenAmount(serviceSectionExpenseTotal,useOfPrivateCarExpense,miscellaneousExpense,hotelCharge);
    setValue("totalExpense",serviceSectionExpenseTotal + useOfPrivateCarExpense + miscellaneousExpense + hotelCharge - burdenAmount)
  }

  return [calculateTotalExpense];

}