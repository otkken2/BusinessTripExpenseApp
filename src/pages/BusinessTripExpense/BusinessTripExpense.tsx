import { DateOfTrip } from "./DateOfTrip";
import { PlaceOfBusiness} from "./PlaceOfBusiness";
import { Purpose } from "./Purpose"
import { pageTitles } from "../../Utility/Enums";
import { StyledForm, StyledPaper } from "../../Utility/globalStyles";
import { CheckBoxGroup } from "./CheckBoxGroup";




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
        </StyledForm>
      </StyledPaper>

    </>
  )
}