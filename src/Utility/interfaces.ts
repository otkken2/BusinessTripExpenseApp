import { Atom } from "jotai";
import React from "react";

export interface InputProps{
  label: string
  placeholder: string,
}

export interface serviceSectionInterFace{
  meansOfTransport: Atom<string>;
  startPoint: Atom<string>;
  endPoint: Atom<string>;
}

export interface Point{
  id: number,
  name: string
}