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

export const BusinessTripExpense = () => {
  const handleOnClickSubmit = () => {
    alert("登録ボタン押下！")
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