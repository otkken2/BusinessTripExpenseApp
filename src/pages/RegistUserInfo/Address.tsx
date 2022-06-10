import { ChangeEvent, useEffect } from "react";
import { useAtom } from "jotai";
import { usePostalJp } from 'use-postal-jp';
import { municipalitiesAtom, postalCodeAtom, prefectureAtom, userNameAtom,chomeAndTownAndStreetAddressAtom,buildingNameAndRoomNumberAtom } from "../../Utility/Atoms/RegistUserInfoAtoms";
import { MenuItem, OutlinedInput, Paper, Select, SelectChangeEvent, styled } from "@mui/material";
import { StyledButton, StyledInputLabel } from "../../Utility/globalStyles";

const StyledOutlinedInput = styled(OutlinedInput)({
  width: "200px",
})

const Container = styled('div')({
  display: "flex",
  flexDirection: "column",
  padding: "15px",
})

export const Address = () => {
  // 郵便番号
  const [postalCode,setPostalCode] = useAtom(postalCodeAtom);
  const handleOnChangePostalCode = (event:ChangeEvent<HTMLInputElement>) => {
    setPostalCode(event.target.value);
  }

  let [address, loading, error] = usePostalJp(postalCode,postalCode.length >= 7);
    
  
  // 都道府県
  const [prefecture, setPrefecture] = useAtom(prefectureAtom);
  const handleOnChangePrefecture = (event:SelectChangeEvent<string>) => {
    setPrefecture(event.target.value);
  }
  
  // 市区郡
  const [municipalities,setMunicipalities] = useAtom(municipalitiesAtom);
  const handelOnChangeMunicipalities = (event:ChangeEvent<HTMLInputElement>) => {
    setMunicipalities((event.target as HTMLInputElement).value)
  }
  //丁目・町・番地 
  const [chomeAndTownAndStreetAddress,setChomeAndTownAndStreetAddress] = useAtom(chomeAndTownAndStreetAddressAtom)
  const handleOnChangeChomeAndTownAndStreetAddress = (event:ChangeEvent<HTMLInputElement>) => {
    setChomeAndTownAndStreetAddress((event.target as HTMLInputElement).value);
  }
  // 建物名・部屋番号
  const [buildingNameAndRoomNumber,setBuildingNameAndRoomNumber] = useAtom(buildingNameAndRoomNumberAtom);
  const handelOnChangeBuildingNameAndRoomNumber = (event:ChangeEvent<HTMLInputElement>) => {
    setBuildingNameAndRoomNumber(event.target.value)
  }

  const isAddressesEmpty = ()=>{
    return (
      (prefecture === "") &&
      (municipalities === "") && 
      (chomeAndTownAndStreetAddress === "") &&
      (buildingNameAndRoomNumber === "")
      )
  }

  const setPostalInfoToStates = () => {
    if(!loading){
      address && setPrefecture(address.prefecture);
      address && setMunicipalities(address.address1);
      address && setChomeAndTownAndStreetAddress(address.address2);
      address && setBuildingNameAndRoomNumber(address.address3);
    }
  }

  useEffect(()=>{
    if(isAddressesEmpty()){
      setPostalInfoToStates();
    }
    if(postalCode === ""){
      setPrefecture("");
      setMunicipalities("");
      setChomeAndTownAndStreetAddress("");
      setBuildingNameAndRoomNumber("");
      address = null;
    }

  },[postalCode,setPostalInfoToStates]);

  return (
    <>
      <StyledInputLabel>住所</StyledInputLabel>
      <Paper>
        <Container>
          <StyledInputLabel>郵便番号</StyledInputLabel>
          <StyledOutlinedInput
            type="text"
            value={postalCode}
            onChange={handleOnChangePostalCode}
          />
          <StyledButton variant="contained" sx={{marginTop:"10px"}}>住所を自動入力</StyledButton>
          {
            !loading && (
              <>
                <StyledInputLabel>都道府県</StyledInputLabel>
                <Select
                  value={prefecture}
                  onChange={handleOnChangePrefecture}
                >
                {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
                  <MenuItem value="神奈川県">神奈川県</MenuItem>
                  <MenuItem value="東京都">東京都</MenuItem>
                  <MenuItem value="埼玉県">埼玉県</MenuItem>
                  <MenuItem value="千葉県">千葉県</MenuItem>
                </Select>
                <StyledInputLabel>市区郡</StyledInputLabel>
                <OutlinedInput 
                  type="text"
                  value={municipalities}
                  onChange={handelOnChangeMunicipalities}
                />
                <StyledInputLabel>町・丁目・番地</StyledInputLabel>
                <OutlinedInput
                  type="text"
                  value={chomeAndTownAndStreetAddress}
                  onChange={handleOnChangeChomeAndTownAndStreetAddress}
                />
                <StyledInputLabel>建物名・部屋番号</StyledInputLabel>
                <OutlinedInput
                  type="text"
                  value={buildingNameAndRoomNumber}
                  onChange={handelOnChangeBuildingNameAndRoomNumber}
                />
              </>
            )
          }
        </Container>
      </Paper>
    </>
  )
}