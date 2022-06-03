import React from "react";

export const Resources = (props : any) => {
    const resources = props.meansOfTransports;
    return (
      <>
        {resources.map((resource:any)=>(
          <p key={resource.id}>{resource.id}:{resource.name}hoge</p>
        ))}
      </>
    );
  } 