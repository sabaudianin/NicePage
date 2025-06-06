import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDocument, checkEmailInDb } from "../../firebase/firestoreFunctions";

export const checkEmailExist = createAsyncThunk("checkEmail", async (email) => {
  const exist = await checkEmailInDb("newsletter", email);
  return { email, exist };
});

export const addEmail = createAsyncThunk("addEmail", async (email) => {
  const docId = await addDocument("newsletter", {
    email,
    createdAt: new Date().toISOString(),
  });
  return { email, docId };
});

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState: {
    loading: false,
    error: null,
    exist: false,
    added: false,
  },
  reducers: {
    resetSuccess: (state) => {
      state.added = false;
    },
  },
  extraReducers: (builder) => {
    //checkEmail
    builder
      .addCase(checkEmailExist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkEmailExist.fulfilled, (state, action) => {
        state.loading = false;
        state.exist = action.payload.exist;
      })
      .addCase(checkEmailExist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //addEmail
      .addCase(addEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.added = false;
      })
      .addCase(addEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.added = true;
      })
      .addCase(addEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetSuccess } = newsletterSlice.actions;
export default newsletterSlice.reducer;
