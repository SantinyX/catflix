import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: "Home",
    value2: {}
};

export const countSlice = createSlice({

    name: "page",
    initialState,
    reducers: {
        goToHome: (state) => {
            state.value = "Home"
        },
        goToDetails: (state) => {
            state.value = "Detail"
        },
        getMovieDetail: (state, action) => {
            state.value2 = action.payload
        }
    },
});

export const { goToHome, goToDetails, getMovieDetail } = countSlice.actions;

export default countSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit"


// const initialState = {
//     value: "Home",
//     value2: {}
// }

// export const countSlice = createSlice({
//     name: "page",
//     initialState,

//     reducers: {
//         goToHome: (state) => {
//             state.value = "Home"
//         },
//         goToDetails: (state) => {
//             state.value = "Details"
//         },
//         getMovieDetails: (state, action) => {
//             state.value2 = action.payload
//         }
//     },
// });

// export const {goToHome, goToDetails, getMovieDetails} = countSlice.actions;

// export default countSlice.reducer;