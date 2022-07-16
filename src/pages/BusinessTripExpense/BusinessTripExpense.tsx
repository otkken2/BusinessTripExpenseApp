import { DateOfTrip } from "./DateOfTrip";
import { PlaceOfBusiness} from "./PlaceOfBusiness";
import { Purpose } from "./Purpose"
import { DayOrOvernight, pageTitles } from "../../Utility/Enums";
import { StyledButton, StyledForm, StyledPaper } from "../../Utility/globalStyles";
import { CheckBoxGroup } from "./CheckBoxGroup";
import { ServiceSections } from "./ServiceSections";
import { DistanceDrivenByPrivateCar } from "./DistanceDrivenByPrivateCar";
import { MiscellaneousExpense } from "./MiscellaneousExpense";
import { HotelCharge, HotelChargeRadio } from "./HotelChargeRadio";
import { BurdenAmount, BurdenAmountType } from "./BurdenAmount";
import { TotalExpense } from "./TotalExpense";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { OneWayOrRoundTrip, ServiceSection } from "./ServiceSection";
import { useEffect } from "react";
import { AllTheWayType } from "./CheckBoxGroup";
import axios from "axios";
import { useTotalExpense } from "../../hooks/useTotalExpense";

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
  isRouteOverLap: boolean;
  serviceSectionExpense: number;
  drivenByPrivateCar: boolean;
  distanceOfDrivenByPrivateCar: number;
  numberOfTripDays: number;
  hotelChargeType: HotelCharge;
  actualHotelChargeValue: number;
  burdenAmountType: BurdenAmountType;
  burdenAmount: number;
  totalExpense: number;
}

export const baseURL = "http://0.0.0.0:8000/api/businessTripExpense";

export const BusinessTripExpense = () => {
  const { register, handleSubmit,control,setValue,watch} = useForm<Inputs>({
    defaultValues: {
      firstDay: new Date(),
      distanceOfDrivenByPrivateCar: 0,
      serviceSections: [
        {meansOfTransport: "", startPoint:"", endPoint: "",serviceSectionExpense: 0,oneWayOrRoundTrip: OneWayOrRoundTrip.ONE_WAY,isRouteOverLap: false},
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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    alert("登録されました！")
    console.log("onSubmit!",data);

    await axios.post(baseURL,{
      trip: data,
    })

    await axios.post(`${baseURL}/placesOfBusiness`,{
      name : data.placeOfBusiness,
    });
    await axios.post(`${baseURL}/purpose`,{
      name : data.purpose,
    })

    // data.serviceSections.map((serviceSection) => {
    //   axios.post(`${baseURL}/serviseSection`,{
    //     meansOfTransport : serviceSection.meansOfTransport,
    //     startPointName : serviceSection.startPoint,
    //     endPointName : serviceSection.endPoint,
    //     expense : serviceSection.serviceSectionExpense,
    //     oneWayOrRoundTrip : serviceSection.oneWayOrRoundTrip,
    //     isRouteOverLap : serviceSection.isRouteOverLap,
    //   })
    // })
  }

  const [calculateTotalExpense] = useTotalExpense(watch,setValue);
  useEffect(()=>{
    calculateTotalExpense();
  },
  [
    watch(
      ["serviceSections",
       "distanceOfDrivenByPrivateCar",
       "numberOfTripDays",
       "hotelChargeType",
       "burdenAmount",
       "burdenAmountType"
      ]
    ),
    calculateTotalExpense
  ])
  
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
          <MiscellaneousExpense register={register} control={control} setValue={setValue} watch={watch}/>
          <HotelChargeRadio register={register} control={control} setValue={setValue} watch={watch}/>
          <BurdenAmount register={register} control={control} setValue={setValue} watch={watch}/>
          <TotalExpense register={register} control={control} setValue={setValue} watch={watch}/>
          <StyledButton type="submit"  color="primary" variant="contained">この内容で登録する</StyledButton>
        </StyledForm>
      </StyledPaper>

    </>
  )
}