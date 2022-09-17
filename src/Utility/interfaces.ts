import { Atom } from "jotai";
import React from "react";



export interface serviceSectionInterFace{
  meansOfTransport: Atom<string>;
  startPoint: Atom<string>;
  endPoint: Atom<string>;
}