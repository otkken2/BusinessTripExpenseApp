import { MenuItem, OutlinedInput, Paper, Select, SelectChangeEvent, styled } from "@mui/material"
import { ChangeEvent, useState } from "react";
import { StyledButton, StyledForm, StyledInputLabel, StyledPaper } from "../../Utility/globalStyles"

const Container = styled('div')({
  display: "flex",
  flexDirection: "column",
  padding: "15px",
})

const StyledOutlinedInput = styled(OutlinedInput)({
  width: "200px",
})

const enum Authority{
  ADMIN = "admin",
  MEMBER = "member",
}

export const RegistUserInfo = () => {
  // 氏名
  const [userName,setUserName] = useState<string>("");
  const handleOnChangeUserName = (event:ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  // 郵便番号
  const [postalCode,setPostalCode] = useState<number | undefined>(undefined);
  const handleOnChangePostalCode = (event:ChangeEvent<HTMLInputElement>) => {
    setPostalCode((event.target as HTMLInputElement).value as unknown as number);
  }

  // 都道府県
  const [prefecture, setPrefecture] = useState<string | undefined>(undefined);
  const handleOnChangePrefecture = (event:SelectChangeEvent<string>) => {
    setPrefecture(event.target.value);
  }

  // 市区郡
  const [municipalities,setMunicipalities] = useState<string>("");
  const handelOnChangeMunicipalities = (event:ChangeEvent<HTMLInputElement>) => {
    setMunicipalities((event.target as HTMLInputElement).value)
  }
  //丁目・町・番地 
  const [chomeAndTownAndStreetAddress,setChomeAndTownAndStreetAddress] = useState<string>("")
  const handleOnChangeChomeAndTownAndStreetAddress = (event:ChangeEvent<HTMLInputElement>) => {
    setChomeAndTownAndStreetAddress((event.target as HTMLInputElement).value);
  }
  // 建物名・部屋番号
  const [buildingNameAndRoomNumber,setBuildingNameAndRoomNumber] = useState<string>("");
  const handelOnChangeBuildingNameAndRoomNumber = (event:ChangeEvent<HTMLInputElement>) => {
    setBuildingNameAndRoomNumber(event.target.value)
  }

  // 職員番号
  const [staffNumber,setStaffNumber] = useState<string>("");
  const handleOnChangeStaffNumber = (event:ChangeEvent<HTMLInputElement>) => {
    setStaffNumber(event.target.value);
  }
  // 所属学校
  const [school,setSchool] = useState<string>("");
  const handleOnChangeSchool = (event:SelectChangeEvent<string>) => {
    setSchool(event.target.value);
  }

  // 職名
  const [jobTitle, setJobTitle] = useState<string>("");
  const handleOnChangeJobTitle = (event: SelectChangeEvent<string>) => {
    setJobTitle(event.target.value);
  }

  // 権限
  const [authority, setAuthority] = useState<string>(Authority.MEMBER);
  const handleOnChangeAuthority = (event:SelectChangeEvent<string>) => {
    setAuthority(event.target.value);
  }
  return (
    <>
      <h2>職員情報を登録</h2>
      <StyledPaper>
        <StyledForm>
          <StyledInputLabel>氏名</StyledInputLabel>
          <OutlinedInput 
            type="text"
            value={userName}
            onChange={handleOnChangeUserName}
          />

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
            </Container>
          </Paper>

          <StyledInputLabel>職員番号</StyledInputLabel>
          <OutlinedInput 
            type="text"
            value={staffNumber}
            onChange={handleOnChangeStaffNumber}
          />

          <StyledInputLabel>所属学校</StyledInputLabel>
          <Select
            value={school}
            onChange={handleOnChangeSchool}
            >
            {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
            <MenuItem value="座間小学校">座間小学校</MenuItem>
            <MenuItem value="入谷小学校">入谷小学校</MenuItem>
            <MenuItem value="西中学校">西中学校</MenuItem>
            <MenuItem value="座間高校">座間高校</MenuItem>
            <MenuItem value="大和高校">大和高校</MenuItem>
          </Select>

          <StyledInputLabel>職名</StyledInputLabel>
          <Select
            value={jobTitle}
            onChange={handleOnChangeJobTitle}
            >
            {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
            <MenuItem value="校長">校長</MenuItem>
            <MenuItem value="教頭">教頭</MenuItem>
            <MenuItem value="総括教諭">総括教諭</MenuItem>
            <MenuItem value="事務主事">事務主事</MenuItem>
            <MenuItem value="事務">事務</MenuItem>
          </Select>

          <StyledInputLabel>権限</StyledInputLabel>
          <Select
            value={authority}
            onChange={handleOnChangeAuthority}
            >
            {/* TODO 本当はDBから値を取得して埋め込む。map関数使う */}
            <MenuItem value={Authority.ADMIN}>管理者</MenuItem>
            <MenuItem value={Authority.MEMBER}>一般職員</MenuItem>
          </Select>

          <StyledButton variant="contained">この内容で登録する</StyledButton>
        </StyledForm>
      </StyledPaper>
    </>
  )
}