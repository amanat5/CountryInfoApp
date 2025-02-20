import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;


const API_URL = `${API_BASE_URL}/api/countries`;

export const fetchCountries = createAsyncThunk("countries/fetch", async (name) => {
    const response = await axios.get(`${API_URL}?name=${name}`);
    return response.data;
});

export const fetchCountryDetails = createAsyncThunk("country/fetchDetails", async (code) => {
    const response = await axios.get(`${API_URL}/${code}`);
    return response.data;
});

const countrySlice = createSlice({
    name: "countries",
    initialState: { list: [], country: {}, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.list = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchCountryDetails.fulfilled, (state, action) => {
                state.country = action.payload;
            });
    }
});

export default countrySlice.reducer;
