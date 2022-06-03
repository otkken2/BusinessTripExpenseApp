import { FormControl, MenuItem, Select, SelectChangeEvent, styled }from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import {StyledInputLabel} from "../../Utility/globalStyles"

export const Purpose = () => {
  const [purpose,setPurpose] = useState<string>("")
  const handleOnChangePurpose = (event: SelectChangeEvent<string>) => {
    setPurpose(event.target.value);
  }
  return (
  <>
    <FormControl>
      <StyledInputLabel id="purpose">用務内容</StyledInputLabel>
      <Select
        label="purpose"
        id="purpose"
        labelId="purpose"
        value={purpose}
        onChange={handleOnChangePurpose}
        placeholder="用務地を選択"
      >
        {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
        <MenuItem value="書類提出">書類提出</MenuItem>
        <MenuItem value="打ち合わせ">打ち合わせ</MenuItem>
        <MenuItem value="視察">視察</MenuItem>
      </Select>
      <Link to="/registPurpose">新しい用務内容を登録する</Link>
    </FormControl>
  </>)
}