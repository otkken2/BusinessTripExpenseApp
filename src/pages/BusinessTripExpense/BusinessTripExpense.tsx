import { DateOfTrip } from "./DateOfTrip";
import { PlaceOfBusiness} from "./PlaceOfBusiness";
import { Purpose } from "./Purpose"
import { pageTitles } from "../../Utility/Enums";
import { StyledButton, StyledForm, StyledPaper } from "../../Utility/globalStyles";
import { CheckBoxGroup } from "./CheckBoxGroup";
import { ServiceSections } from "./ServiceSections";
import { DistanceDrivenByPrivateCar } from "./DistanceDrivenByPrivateCar";
import { MiscellaneousExpense } from "./MiscellaneousExpense";
import { HotelChargeRadio } from "./HotelChargeRadio";
import { BurdenAmount } from "./BurdenAmount";
import { TotalExpense } from "./TotalExpense";
import { useAtom } from "jotai";
import { allTheWayTypeAtom, dayOrOvernightAtom, firstDayAtom, isCheckedGoDirectlyAtom, isCheckedReturnDirectlyAtom, lastDayAtom,placeOfBusinessAtom,purposeAtom, serviceSectionCountAtom } from "../../Utility/Atoms/BusinessTripExpenseAtoms";


export const BusinessTripExpense = () => {
  // DateOrTrip
  const [firstDay] = useAtom(firstDayAtom);
  const [lastDay] = useAtom(lastDayAtom);
  const [dayOrOvernight] = useAtom(dayOrOvernightAtom);
  
  // PlaceOfBusiness
  const [placeOfBusiness] = useAtom(placeOfBusinessAtom);
  
  // Purpose
  const [purpose] = useAtom(purposeAtom);

  // CheckBoxGroup
  const [isCheckedGoDirectly] = useAtom(isCheckedGoDirectlyAtom);
  const [isCheckedReturnDirectly] = useAtom(isCheckedReturnDirectlyAtom);
  const [allTheWayType] = useAtom(allTheWayTypeAtom);
  
  // ServiceSections
  const [serviceSectionCount] = useAtom(serviceSectionCountAtom);

  const handleOnClickSubmit = () => {
    alert("登録ボタン押下！")
    console.log(firstDay);
    console.log(lastDay);
    console.log(dayOrOvernight);
    console.log(placeOfBusiness);
    console.log(purpose);
    console.log(`isCheckedGoDirectly:${isCheckedGoDirectly}`);
    console.log(`isCheckedReturnDirectly:${isCheckedReturnDirectly}`);
    console.log(allTheWayType);
    console.log(`seviceSectionCount:${serviceSectionCount}`);
  }
  
  return (
    <>
      <h2>{pageTitles.BUSINESTRIP}</h2>
      <StyledPaper>
        <StyledForm>
          <DateOfTrip/>
          <PlaceOfBusiness/>
          <Purpose/>
          <CheckBoxGroup/>
          <ServiceSections/>
          <DistanceDrivenByPrivateCar/>
          <MiscellaneousExpense/>
          <HotelChargeRadio/>
          <BurdenAmount/>
          <TotalExpense/>
          <StyledButton onClick={handleOnClickSubmit} color="primary" variant="contained">この内容で登録する</StyledButton>
        </StyledForm>
      </StyledPaper>

    </>
  )
}