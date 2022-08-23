import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import pageReducer from "./Slice"


const middleware = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer: {
        page: pageReducer,
    },   

    middleware: middleware
});








// import { configureStore } from "@reduxjs/toolkit";
// import { countSlice } from "./Slice";


// // export const middleware = getDefaultMiddleware({
// //     serializableCheck: false
// // })

// export const store = configureStore({
//     reducer: {
//         page: countSlice
//     },
    
// });

