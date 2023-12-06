import { createSlice } from "@reduxjs/toolkit";
import { myMainInfo } from "../../const";

const initialState: myMainInfo = {
  step1: {
    teyinat: "",
    tesnifat: "",
    nomenklatur: "",
    konfidensial: false,
    mezmun: ""
  },
  step2: {
    emrinMezmunu: {},
    preambula: {},
    bendler: []
  },
  step3: {},
  step4: {
    imzalama: {}
  }
};
export const mainInfoSlice = createSlice({
  name: "mainInfo",
  initialState,
  reducers: {
    setStep1: (state: any, action: any) => {
      state.step1 = {
        ...state.step1,
        [action.payload.key]: action.payload.value
      };
      // localStorage.setItem("step1", JSON.stringify(state.step1));
    },
    setStep2_emrMezmun: (state: any, action: any) => {
      state.step2.emrinMezmunu = action.payload;
    },

    setStep2_bendler: (state: any, action: any) => {
      // state.step2={...state.step2, bendler:[...state.step2.bendler, action.payload]}
      state.step2.bendler = [...state.step2.bendler, action.payload];
      console.log(action.payload);
    },
    setStep2_edit: (state: any, action: any) => {
      state.step2.bendler = state.step2.bendler.map((item: any) => {
        if (item.id === action.payload.id) {
          return { ...item, bend: action.payload.newValue };
        } else return item;
      });
    },
    setStep2_remove: (state: any, action: any) => {
      state.step2.bendler = state.step2.bendler.filter(
        (item: any) => item.id !== action.payload
      );
      console.log(action.payload);
    },
    setStep4_imza: (state: any, action: any) => {
      state.step4.imzalama = action.payload;
    }
  }
});
export default mainInfoSlice.reducer;
export const {
  setStep1,
  setStep2_bendler,
  setStep2_remove,
  setStep2_edit,
  setStep4_imza,
  setStep2_emrMezmun
} = mainInfoSlice.actions;
