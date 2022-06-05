import { DateOfTrip } from "./DateOfTrip";
import { PlaceOfBusiness} from "./PlaceOfBusiness";
import { Purpose } from "./Purpose"
import { pageTitles } from "../../Utility/Enums";
import { StyledForm, StyledPaper } from "../../Utility/globalStyles";
import { CheckBoxGroup } from "./CheckBoxGroup";
import { ServiceSections } from "./ServiceSections";
import { DistanceDrivenByPrivateCar } from "./DistanceDrivenByPrivateCar";
import { MiscellaneousExpense } from "./MiscellaneousExpense";
import { HotelChargeRadio } from "./HotelChargeRadio";
import { BurdenAmount } from "./BurdenAmount";
import { TotalExpense } from "./TotalExpense";

export const BusinessTripExpense = () => {
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
        </StyledForm>
      </StyledPaper>

    </>
  )
}