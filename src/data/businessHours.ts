// Keep in sync with openingHoursSpecification in public/index.html and the
// hours in public/llms.txt.
export interface BusinessHours {
  days: string;
  hours: string;
}

const businessHours: BusinessHours[] = [
  { days: "Monday – Friday", hours: "10 a.m. – 6:30 p.m." },
  { days: "Saturday", hours: "11 a.m. – 5 p.m." },
  { days: "Sunday", hours: "Closed" },
];

export default businessHours;
