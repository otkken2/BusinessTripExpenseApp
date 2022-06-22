import { DateOfTrip } from "./DateOfTrip";
import { PlaceOfBusiness} from "./PlaceOfBusiness";
import { Purpose } from "./Purpose"
import { AllTheWayType, DayOrOvernight, pageTitles } from "../../Utility/Enums";
import { StyledButton, StyledForm, StyledPaper } from "../../Utility/globalStyles";
import { CheckBoxGroup } from "./CheckBoxGroup";
import { ServiceSections } from "./ServiceSections";
import { DistanceDrivenByPrivateCar } from "./DistanceDrivenByPrivateCar";
import { MiscellaneousExpense } from "./MiscellaneousExpense";
import { HotelCharge, HotelChargeRadio } from "./HotelChargeRadio";
import { BurdenAmount } from "./BurdenAmount";
import { TotalExpense } from "./TotalExpense";
import { useAtom } from "jotai";
import { 
  allTheWayTypeAtom, 
  dayOrOvernightAtom, 
  firstDayAtom, 
  isCheckedGoDirectlyAtom, 
  isCheckedReturnDirectlyAtom, 
  lastDayAtom,
  placeOfBusinessAtom,
  purposeAtom, 
  // serviceSectionCountAtom,
  meansOfTransportAtom,
  startPointAtom,
  endPointAtom,
  totalExpenseAtom,
  serviceSectionsAtom,
  // serviceSectionsAtom
} from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { RoundTripOrOneWay, ServiceSection } from "./ServiceSection";
import { useEffect } from "react";

export interface Inputs {
  dayOrOvernight: DayOrOvernight;
  meansOfTransport: string;
  startPoint: string;
  endPoint: string;
  firstDay: Date | null;
  lastDay: Date | null;
  placeOfBusiness: string;
  purpose: string;
  isCheckedGoDirectly: boolean;
  isCheckedReturnDirectly: boolean;
  allTheWayType: AllTheWayType;
  serviceSections: ServiceSection[];
  isRouteDuplicated: boolean;
  serviceSectionExpense: number;
  drivenByPrivateCar: boolean;
  distanceValue: number;
  numberOfTripDays: number;
  hotelChargeType: HotelCharge;
  actualHotelChargeValue: number;
  burdenAmount: number;
  totalExpense: number;
}

export const BusinessTripExpense = () => {
  const { register, handleSubmit,control,setValue,watch} = useForm<Inputs>({
    defaultValues: {
      firstDay: new Date(),
      distanceValue: 0,
      serviceSections: [
        {meansOfTransport: "", startPoint:"", endPoint: "",serviceSectionExpense: 0,roundTripOrOneWay: RoundTripOrOneWay.ONE_WAY},
      ],
      actualHotelChargeValue: 0,
      burdenAmount: 0,
      totalExpense: 0,
    }
  });
  const {fields, append} = useFieldArray({
    control,
    name: "serviceSections"
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert("登録されました！")
    console.log("onSubmit!",data);
  }

  const returnServiceSectionExpenseTotal = ()=>{
    let total: number = 0;
    const watchServiceSections = watch('serviceSections');
    watchServiceSections.map((serviceSection)=>{
      total += Number(serviceSection.serviceSectionExpense*(serviceSection.roundTripOrOneWay as number));
    })
    console.log(`利用区間全ての経費の合計は${total}円`);
    return total;
  }
  // returnServiceSectionExpenseTotal(); 　即時反映OK

  const returnDrivenByPrivateCarExpense = () => {
    const unitPrice = 15;
    const watchDistance = watch("distanceValue");
    console.log(`自家用車運転経費は${watchDistance*unitPrice}円`)
    return watchDistance*unitPrice;;
  }
  returnDrivenByPrivateCarExpense();　//即時反映OK

  const returnMiscellaneousExpense = () => {
    const unitPrice = 120;
    const watchNumberOfTripDays = watch("numberOfTripDays");
    console.log(`旅行雑費は${watchNumberOfTripDays*unitPrice}円`)
    return watchNumberOfTripDays*unitPrice;
  }
  // returnMiscellaneousExpense();　即時反映OK

  const returnHotelCharge = () => {
    if(watch("hotelChargeType") == HotelCharge.KOU){
      console.log(`ホテルの宿泊料金は${HotelCharge.KOU}円`)
      return HotelCharge.KOU;
    }
    if(watch("hotelChargeType") == HotelCharge.OTSU){
      console.log(`ホテルの宿泊料金は${HotelCharge.OTSU}円`)
      return HotelCharge.OTSU;
    }
    if(watch("hotelChargeType") === HotelCharge.ACTUAL_HOTEL_CHARGE){
      console.log(`ホテルの宿泊料金は${watch("actualHotelChargeValue")}円`)
      return Number(watch("actualHotelChargeValue"));
    }
    return 0;
  };
  // returnHotelCharge();　//即時反映OK
  
  const burdenAmount = watch("burdenAmount"); 
  // console.log(`別途負担額は${burdenAmount}円`);  //即時反映OK  

  // // DateOrTrip
  // const [firstDay] = useAtom(firstDayAtom);
  // const [lastDay] = useAtom(lastDayAtom);
  // const [dayOrOvernight] = useAtom(dayOrOvernightAtom);
  
  // // PlaceOfBusiness
  // const [placeOfBusiness] = useAtom(placeOfBusinessAtom);
  
  // // Purpose
  // const [purpose] = useAtom(purposeAtom);

  // // CheckBoxGroup
  // const [isCheckedGoDirectly] = useAtom(isCheckedGoDirectlyAtom);
  // const [isCheckedReturnDirectly] = useAtom(isCheckedReturnDirectlyAtom);
  // const [allTheWayType] = useAtom(allTheWayTypeAtom);
  
  // // ServiceSections
  // const [serviceSectionCount] = useAtom(serviceSectionCountAtom);

  // ServiceSection
  // const [meansOfTransport] = useAtom(meansOfTransportAtom);
  // const [startPoint] = useAtom(startPointAtom);
  // const [endPoint] = useAtom(endPointAtom);
  // const [serviceSections] = useAtom(serviceSectionsAtom)

  const [_,setTotalExpense] = useAtom(totalExpenseAtom);
  useEffect(()=>{
    let serviceSectionExpenseTotal = returnServiceSectionExpenseTotal();
    let distanceValue = returnDrivenByPrivateCarExpense();
    let miscellaneousExpense = returnMiscellaneousExpense();
    let hotelCharge = returnHotelCharge();
    console.log("useEffect done!")
    setValue("totalExpense",serviceSectionExpenseTotal + distanceValue + miscellaneousExpense + hotelCharge - burdenAmount)
  },[watch(["serviceSections","distanceValue","numberOfTripDays","hotelChargeType","burdenAmount"])])
  
  return (
    <>
      <h2>{pageTitles.BUSINESTRIP}</h2>
      <StyledPaper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <DateOfTrip register={register} control={control} setValue={setValue}/>
          <PlaceOfBusiness register={register} control={control} setValue={setValue}/>
          <Purpose register={register} control={control} setValue={setValue}/>
          <CheckBoxGroup register={register} control={control} setValue={setValue}/>
          <ServiceSections register={register} control={control} setValue={setValue} fields={fields} append={append}/>
          <DistanceDrivenByPrivateCar register={register} control={control} setValue={setValue} watch={watch}/>
          <MiscellaneousExpense register={register} control={control} setValue={setValue}/>
          <HotelChargeRadio register={register} control={control} setValue={setValue} watch={watch}/>
          <BurdenAmount register={register} control={control} setValue={setValue}/>
          <TotalExpense register={register} control={control} setValue={setValue} watch={watch}/>
          <StyledButton type="submit"  color="primary" variant="contained">この内容で登録する</StyledButton>
        </StyledForm>
      </StyledPaper>

    </>
  )
}