import { createSlice } from "@reduxjs/toolkit";
export const mainInfoSlice = createSlice({
  name: "mainInfo",
  initialState: {
    step1:  {
          teyinat: "",
          tesnifat: "",
          nomenklatur: "",
          konfidensial: false,
          mezmun: ""
        },
    step2: {
      bendler:[]
    
    },
    step3: {},
    step4: {}
  },
  reducers: {
    setStep1: (state: any, action: any) => {
      state.step1 = {
        ...state.step1,
        [action.payload.key]: action.payload.value
      };
      // localStorage.setItem("step1", JSON.stringify(state.step1));
    },
    setStep2_bendler:(state:any,action:any)=>{
      // state.step2={...state.step2, bendler:[...state.step2.bendler, action.payload]}
      state.step2.bendler= [...state.step2.bendler, action.payload] 
    }
  }
});
export default mainInfoSlice.reducer;
export const { setStep1 ,setStep2_bendler } = mainInfoSlice.actions;
