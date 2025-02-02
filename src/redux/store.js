import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";
import newsletterReducer from "./slices/emailSlice";
import sponsorReducer from "./slices/sponsorSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    newsletter: newsletterReducer,
    sponsors: sponsorReducer,
  },
});
