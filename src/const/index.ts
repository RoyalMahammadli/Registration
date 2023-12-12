export type myUserInterface= {
  [key: string]: string;
}

export const users: myUserInterface[] = [
  {
    name: "Hüseynov Nihad",
    vezife: "Idarə Rəisi",
    vergiOrqan: "Mərkəzi Aparat",
    seç: "seç",
    id: "1"
  },
  {
    name: "Mehdiyev Famil",
    vezife: "Rəis müavini",
    vergiOrqan: "Mərkəzi Aparat",
    seç: "seç",
    id: "2"
  },
  {
    name: "Ağayev Etibar",
    vezife: "Katib",
    vergiOrqan: "Mərkəzi Aparat",
    seç: "seç",
    id: "3"
  }
];

export type myStep1 = {
  teyinat: string;
  tesnifat: string;
  konfidensial: boolean;
  nomenklatur: string;
  mezmun: string;
};
export type myStep2 = {
  emrinMezmunu:string,
  preambula:string,
  bendler:string[],
  esas_metn:string
};
export type myStep4={
  imzalama:any
}
export type myMainInfo = {
  step1: myStep1;
  step2: myStep2;
  step3: any;
  step4: myStep4;
};
