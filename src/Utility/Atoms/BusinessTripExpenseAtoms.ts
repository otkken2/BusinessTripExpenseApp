import { atom } from "jotai";
import { DayOrOvernight, AllTheWayType } from "../Enums";

// DateOfTrip.tsx
export const firstDayAtom = atom<Date | null>(null);
export const lastDayAtom = atom<Date | null>(null);
export const dayOrOvernightAtom = atom(DayOrOvernight.DAY);

// PlaceOfBusiness.tsx
export const placeOfBusinessAtom = atom<string>("");

// Purpose.tsx
export const purposeAtom = atom<string>("");

// CheckBoxGroup.tsx
export const isCheckedGoDirectlyAtom = atom<boolean>(false);
export const isCheckedReturnDirectlyAtom = atom<boolean>(false);
export const allTheWayTypeAtom = atom<AllTheWayType | null>(null);

// ServiceSections.tsx
export const serviceSectionCountAtom = atom<number>(1);

// ServiceSection.tsx
export const meansOrTransportAtom = atom<string>("");
export const startPointAtom = atom<string>("");
export const endPointAtom = atom<string>("");