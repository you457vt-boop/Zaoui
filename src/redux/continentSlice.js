import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../data.json";

export const getContinents = createAsyncThunk(
  "continent/getContinents",
  async () => {
    return data.continents;
  }
);

const continentSlice = createSlice({
  name: "continent",

 
  initialState: {
    continents: []
  },

  
  reducers: {
    
    addPays: (state, action) => {
      const continent = state.continents.find(
        c => c.Code === action.payload.code
      );

      if (continent) {
        continent.pays.push(action.payload.pays);
      }
    },

    // Modifier un continent
    updateContinent: (state, action) => {
      const continent = state.continents.find(
        c => c.Code === action.payload.code
      );

      if (continent) {
        continent.Population = action.payload.population;
      }
    },

    // Modifier un pays
    updatePays: (state, action) => {
      const continent = state.continents.find(
        c => c.Code === action.payload.code
      );

      if (continent) {
        const pays = continent.pays.find(
          p => p.Name === action.payload.nom
        );

        if (pays) {
          pays.Population = action.payload.population;
        }
      }
    }
  },

  // 4. Récupérer les données async
  extraReducers: (builder) => {
    builder.addCase(
      getContinents.fulfilled,
      (state, action) => {
        state.continents = action.payload;
      }
    );
  }
});

export const {
  addPays,
  updateContinent,
  updatePays
} = continentSlice.actions;

export default continentSlice.reducer;