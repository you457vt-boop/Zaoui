import {configureStore} from "@reduxjs/toolkit";
import continentReducer from "./continentSlice";1
const store = configureStore({
  reducer: {
    continents: continentReducer
  }
}); 
export default store;