import { atom } from "jotai";
import { ServiceSection } from "../../pages/BusinessTripExpense/ServiceSection";
import { DayOrOvernight } from "../Enums";
import { Point } from "../../pages/BusinessTripExpense/ServiceSection/Points";
import { AllTheWayType } from "../../pages/BusinessTripExpense/CheckBoxGroup";

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
// export const serviceSectionCountAtom = atom<number>(1);
export const serviceSectionsAtom = atom<ServiceSection[]>([])

// ServiceSection.tsx
export const meansOfTransportAtom = atom<string>("");
export const startPointAtom = atom<string>("");
export const endPointAtom = atom<string>("");
export const PointsAtom = atom<Point[]>([]);

// TotalExpense.tsx
export const totalExpenseAtom = atom<number>(0);

// DistanceDrivenByPrivateCar.tsx
export const drivenByPrivateCarAtom = atom<boolean>(false);

// HotelChargeRadio.tsx
export const actualHotelChargeValueAtom = atom<number>(0);

// BurdenAmount.tsx
export const fullAmountAtom = atom<boolean>(false);
export const fareAtom = atom<boolean>(false);
export const otherAtom = atom<boolean>(false);