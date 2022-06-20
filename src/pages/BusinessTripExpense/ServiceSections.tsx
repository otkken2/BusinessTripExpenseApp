import { Button } from "@mui/material";
import { Control, FieldArrayWithId, UseFieldArrayAppend, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Inputs } from "./BusinessTripExpense";

import { ServiceSection } from "./ServiceSection";

interface ServiceSectionsProps{
  register:UseFormRegister<Inputs>
  control:Control<Inputs,any>
  setValue:UseFormSetValue<Inputs>
  fields: FieldArrayWithId<Inputs, "serviceSections", "id">[]
  append: UseFieldArrayAppend<Inputs, "serviceSections">
}

export const ServiceSections = (props: ServiceSectionsProps) => {
  const handleOnAppendServiceSection = () => {
    console.log("hoge")
    props.append({meansOfTransport: "",startPoint:"",endPoint:"",serviceSectionExpense:0})
  }

  return (
    <>
      {props.fields.map((field,index)=> (
          <ServiceSection {...props.register("serviceSections")} key={index} number={index} register={props.register} control={props.control} setValue={props.setValue}/>
      ))}
      <Button onClick={handleOnAppendServiceSection}>➕利用区間を追加する</Button>
    </>
  )
}