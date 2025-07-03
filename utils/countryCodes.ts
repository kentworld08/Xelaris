// utils/countryCodes.ts

export interface CountryCode {
  name: string;
  code: string;
  iso: string;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
}

export const countryCodes: CountryCode[] = [
  {
    name: "Nigeria",
    code: "+234",
    iso: "NG",
    minLength: 7,
    maxLength: 11,
    regex: /^(70|80|81|90)\d{8}$/,
  },
  {
    name: "United States",
    code: "+1",
    iso: "US",
    minLength: 10,
    maxLength: 10,
    regex: /^\d{10}$/,
  },
  {
    name: "United Kingdom",
    code: "+44",
    iso: "GB",
    minLength: 9,
    maxLength: 10,
    regex: /^\d{9,10}$/,
  },
  {
    name: "Canada",
    code: "+1",
    iso: "CA",
    minLength: 10,
    maxLength: 10,
    regex: /^\d{10}$/,
  },
  {
    name: "Germany",
    code: "+49",
    iso: "DE",
    minLength: 9,
    maxLength: 11,
    regex: /^\d{9,11}$/,
  },
  {
    name: "Australia",
    code: "+61",
    iso: "AU",
    minLength: 9,
    maxLength: 9,
    regex: /^\d{9}$/,
  },
  // Add more countries as needed
];
