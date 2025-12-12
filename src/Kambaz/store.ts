import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import quizzesReducer from "./Courses/Quizzes/reducer";

const store = configureStore({
  reducer: {
    accountReducer,
    quizzesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
