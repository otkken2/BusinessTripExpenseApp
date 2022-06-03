import { Input } from "../../components/input"
import { pageTitles } from "../../Utility/Enums";
import { StyledButton,StyledPaper, StyledForm} from "../../Utility/globalStyles";


export const RegistPurpose = () => {

  return (
    <>
      <h2>{pageTitles.REGIST_PURPOSE}</h2>
      <StyledPaper>
        <StyledForm>
          <Input label="用務内容" placeholder="例）書類提出" />
          <StyledButton color="primary" variant="contained">登録する</StyledButton>
        </StyledForm>
      </StyledPaper>
    </>
  );
}