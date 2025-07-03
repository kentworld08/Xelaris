declare interface ButtonProps {
  title: string;
  width: string;
  maxWidth?: string;
  onclick?: () => void;
}

declare interface WhatWeTeachDataProps {
  title: string;
  age: string;
  prerequisite: string;
  status: string;
  class: string;
  buttonText: string;
}

declare interface StudentBuildingDataProps {
  index: string;
  name1: string;
  name2: string;
  bgColor: string;
  label1: string;
  label2: string;
  width: string;
  summary1: string;
  summary2: string;
  buttonTitle: string;
  route: string;
  imageUrl: string;
}
