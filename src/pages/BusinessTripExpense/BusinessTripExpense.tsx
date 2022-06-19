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
  serviceSectionCountAtom,
  meansOfTransportAtom,
  startPointAtom,
  endPointAtom,
  // serviceSectionsAtom
} from "../../Utility/Atoms/BusinessTripExpenseAtoms";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { ServiceSection } from "./ServiceSection";

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
  actualHotelChargeValue: number | string;
  burdenAmount: number;
  totalExpense: number;
}

export const BusinessTripExpense = () => {
  const { register, handleSubmit,control,setValue} = useForm<Inputs>({
    defaultValues: {
      serviceSections: [
        {meansOfTransport: "", startPoint:"", endPoint: ""},
      ]
    }
  });
  const {fields, append} = useFieldArray({
    control,
    name: "serviceSections"
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert("HOge!!!!!")
    console.log("onSubmit!",data);
    // reset();
  }

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
          <DistanceDrivenByPrivateCar register={register} control={control} setValue={setValue}/>
          <MiscellaneousExpense register={register} control={control} setValue={setValue}/>
          <HotelChargeRadio register={register} control={control} setValue={setValue}/>
          <BurdenAmount register={register} control={control}/>
          <TotalExpense register={register} control={control}/>
          <StyledButton type="submit"  color="primary" variant="contained">この内容で登録する</StyledButton>
        </StyledForm>
      </StyledPaper>

    </>
  )
}