export interface myUserInterface {
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

export interface myStep1 {
  teyinat: string;
  tesnifat: string;
  konfidensial: boolean;
  nomenklatur: string;
  mezmun: string;
}
export interface myMainInfo {
  step1: myStep1;
  step2: any;
  step3: any;
  step4: any;
}
