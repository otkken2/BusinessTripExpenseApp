import { Input } from "../../components/input"
import { StyledButton,StyledPaper, StyledForm} from "../../Utility/globalStyles";

export const RegistPlaceOfBusiness = () => {

  return (
    <>
      <h2>新規用務地を登録</h2>
      <StyledPaper>
        <StyledForm>
          <Input label="用務地" placeholder="例）教育委員会" />
          <StyledButton color="primary" variant="contained">登録する</StyledButton>
        </StyledForm>
      </StyledPaper>
    </>
  );
}