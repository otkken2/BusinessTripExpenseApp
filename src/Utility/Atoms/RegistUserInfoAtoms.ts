import {atom} from 'jotai';
import {Authority} from "../Enums";

export const userNameAtom = atom<string>("");
export const postalCodeAtom = atom<string>("");
export const prefectureAtom = atom<string>("");
export const municipalitiesAtom = atom<string>("");
export const chomeAndTownAndStreetAddressAtom = atom<string>("");
export const buildingNameAndRoomNumberAtom = atom<string>("");

export const staffNumberAtom = atom<string>("");
export const schoolAtom = atom<string>("");
export const jobTitleAtom = atom<string>("");
export const authorityAtom = atom<string>(Authority.MEMBER);