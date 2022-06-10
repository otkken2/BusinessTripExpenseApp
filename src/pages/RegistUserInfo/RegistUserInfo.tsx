import { MenuItem, OutlinedInput, Paper, Select, SelectChangeEvent, styled } from "@mui/material"
import { ChangeEvent, useState } from "react";
import { StyledButton, StyledForm, StyledInputLabel, StyledPaper } from "../../Utility/globalStyles"
import { useAtom } from "jotai";
import {Authority} from "../../Utility/Enums";
import { Address } from "./Address";
import { municipalitiesAtom, postalCodeAtom, prefectureAtom, userNameAtom,chomeAndTownAndStreetAddressAtom,buildingNameAndRoomNumberAtom, staffNumberAtom, schoolAtom, jobTitleAtom, authorityAtom } from "../../Utility/Atoms/RegistUserInfoAtoms";

export const RegistUserInfo = () => {
  // 氏名
  const [userName,setUserName] = useAtom(userNameAtom);
  const handleOnChangeUserName = (event:ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  // 郵便番号
  const [postalCode] = useAtom(postalCodeAtom);    
  
  // 都道府県
  const [prefecture] = useAtom(prefectureAtom);
  
  // 市区郡
  const [municipalities] = useAtom(municipalitiesAtom);

  //丁目・町・番地 
  const [chomeAndTownAndStreetAddress] = useAtom(chomeAndTownAndStreetAddressAtom)
  
  // 建物名・部屋番号
  const [buildingNameAndRoomNumber] = useAtom(buildingNameAndRoomNumberAtom);

  
  // 職員番号
  const [staffNumber,setStaffNumber] = useAtom(staffNumberAtom);
  const handleOnChangeStaffNumber = (event:ChangeEvent<HTMLInputElement>) => {
    setStaffNumber(event.target.value);
  }
  // 所属学校
  const [school,setSchool] = useAtom(schoolAtom);
  const handleOnChangeSchool = (event:SelectChangeEvent<string>) => {
    setSchool(event.target.value);
  }
  
  // 職名
  const [jobTitle, setJobTitle] = useAtom(jobTitleAtom);
  const handleOnChangeJobTitle = (event: SelectChangeEvent<string>) => {
    setJobTitle(event.target.value);
  }
  
  // 権限
  const [authority, setAuthority] = useAtom(authorityAtom);
  const handleOnChangeAuthority = (event:SelectChangeEvent<string>) => {
    setAuthority(event.target.value);
  }

  const handleOnClickSubmit = () => {
    console.log(userName);
    console.log(postalCode);
    console.log(prefecture);
    console.log(municipalities);
    console.log(chomeAndTownAndStreetAddress);
    console.log(buildingNameAndRoomNumber);
    console.log(school)
    console.log(staffNumber);
    console.log(jobTitle);
    console.log(authority);
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

          <Address/>

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

          <StyledButton onClick={handleOnClickSubmit} variant="contained">この内容で登録する</StyledButton>
        </StyledForm>
      </StyledPaper>
    </>
  )
}