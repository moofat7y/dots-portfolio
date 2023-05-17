import { configureStore } from "@reduxjs/toolkit";
import popRed from "./features/populer/popSlice";
import logoRed from "./features/logo/logoSlice";
import socialRed from "./features/social/socialSlice";
import brandRed from "./features/brand/brandSlice";
const store = configureStore({
  reducer: {
    populer: popRed,
    logo: logoRed,
    social: socialRed,
    brand: brandRed,
  },
});

export default store;
