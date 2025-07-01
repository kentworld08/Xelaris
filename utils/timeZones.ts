// utils/timeZones.ts

export interface TimeZoneOption {
  value: string;
  label: string;
}

export const timeZones: TimeZoneOption[] = [
  { value: "Africa/Algiers", label: "Africa/Algiers (CET)" },
  { value: "Africa/Cairo", label: "Africa/Cairo (EET)" },
  { value: "Africa/Casablanca", label: "Africa/Casablanca (WET)" },
  { value: "Africa/Johannesburg", label: "Africa/Johannesburg (SAST)" },
];

// Function to try and get the user's local timezone
export const getUserLocalTimeZone = (): string => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (error) {
    console.error("Could not determine local time zone:", error);
    return "UTC"; // Fallback to UTC if unable to determine
  }
};
