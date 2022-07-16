import { UseFormWatch } from "react-hook-form";
import { Inputs } from "../pages/BusinessTripExpense/BusinessTripExpense";
import { HotelCharge } from "../pages/BusinessTripExpense/HotelChargeRadio";

export const useHotelCharge = (watch:UseFormWatch<Inputs>):[
  () => boolean,
  () => number,
] => {

  const isActual = () => {
    return watch("hotelChargeType") === HotelCharge.ACTUAL_HOTEL_CHARGE;
  }; 

  const calculateHotelCharge = () => {
    if(watch("hotelChargeType") === HotelCharge.KOU){
      // console.log(`ホテルの宿泊料金は${HotelCharge.KOU}円`)
      return HotelCharge.KOU;
    }
    if(watch("hotelChargeType") === HotelCharge.OTSU){
      // console.log(`ホテルの宿泊料金は${HotelCharge.OTSU}円`)
      return HotelCharge.OTSU;
    }
    if(watch("hotelChargeType") === HotelCharge.ACTUAL_HOTEL_CHARGE){
      // console.log(`ホテルの宿泊料金は${watch("actualHotelChargeValue")}円`)
      return Number(watch("actualHotelChargeValue"));
    }
    return 0;
  };

  return [isActual,calculateHotelCharge];
} 