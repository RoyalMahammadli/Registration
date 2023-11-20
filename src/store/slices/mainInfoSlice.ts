import { createSlice } from "@reduxjs/toolkit";
export const mainInfoSlice = createSlice({
  name: "mainInfo",
  initialState: {
    step1: {
      teyinat: "",
      tesnifat: "",
      konfidensial:false,
      mezmun:''
    },
    step2: {},
    step3: {},
    step4: {}
  },
  reducers: {
    setStep1: (state: any, action: any) => {
      state.step1={...state.step1, [action.payload.key]:action.payload.value}
    }
  }
});
export default mainInfoSlice.reducer;
export const {setStep1} = mainInfoSlice.actions;
