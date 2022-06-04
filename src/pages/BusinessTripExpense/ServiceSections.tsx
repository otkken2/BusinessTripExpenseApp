import { Button } from "@mui/material";
import { useState } from "react";
import { ServiceSection } from "./ServiceSection";

export const ServiceSections = () => {
  const [serviceSectionCount, setServiceSectionCount] = useState<number>(1);
  const handleOnClickCreatNewServiceSection = () => {
  setServiceSectionCount((prevServiceSectionCount)=>{
    return prevServiceSectionCount + 1;
  })
}
  const serviceSectionsArray: JSX.Element[] = [];
  for (let i = 1; i <= serviceSectionCount; i++){
    serviceSectionsArray.push(<ServiceSection key={i} number={i}/>);
  }
  return (
    <>
      {serviceSectionsArray.map((serviceSection)=> {
        return serviceSection;
      })}
      <Button onClick={handleOnClickCreatNewServiceSection}>➕利用区間を追加する</Button>
    </>
  )
}