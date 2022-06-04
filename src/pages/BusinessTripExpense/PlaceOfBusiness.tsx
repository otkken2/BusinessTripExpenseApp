import { FormControl, MenuItem, Select, SelectChangeEvent }from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {StyledInputLabel} from "../../Utility/globalStyles"

export const PlaceOfBusiness = () => {
  const [placeOfBusiness,setPlaceOfBusiness] = useState<string>("")
  const handleOnChangePlaceOfBusiness = (event: SelectChangeEvent<string>) => {
    setPlaceOfBusiness(event.target.value);
  }
  return (
  <>
    <FormControl>
      <StyledInputLabel id="place-of-business">用務地</StyledInputLabel>
      <Select
        value={placeOfBusiness}
        onChange={handleOnChangePlaceOfBusiness}
        placeholder="用務地を選択"
      >
        {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
        <MenuItem value="教育委員会">教育委員会</MenuItem>
        <MenuItem value="市役所">市役所</MenuItem>
        <MenuItem value="座間高校">座間高校</MenuItem>
        <MenuItem value="西中学校">西中学校</MenuItem>
      </Select>
      <Link to="/registPlaceOfBusiness">新しい用務地を登録する</Link>
    </FormControl>
  </>)
}