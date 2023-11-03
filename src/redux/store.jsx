
import {configureStore} from '@reduxjs/toolkit'
import loginReducer from "./reducers/loginReducer";
// import loginReducer from "./reducers/loginReducer";
// import personInfoReducer from "./reducers/personInfoReducer";

// const rootReducer = combineReducers({
//   login: loginReducer,
// });

export const store=configureStore({reducer:loginReducer})






