import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDocument, checkEmailInDb } from "../../firebase/firestoreFunctions";

// check email in collection "sponsors"
export const checkEmailExist = createAsyncThunk(
  "sponsors/checkEmail",
  async (email) => {
    const exist = await checkEmailInDb("sponsors", email);
    return { email, exist };
  }
);

// add sponsors data, object (email, name,info)
export const addData = createAsyncThunk("sponsors/addData", async (data) => {
  const docId = await addDocument("sponsors", {
    email: data.email,
    fullName: data.name,
    info: data.additionalInfo,
    createdAt: new Date().toISOString(),
  });
  return { ...data, docId };
});

const sponsorSlice = createSlice({
  name: "sponsors",
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
    // check email exist or not
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
      // add email to db
      .addCase(addData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.added = false;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.loading = false;
        state.added = true;
      })
      .addCase(addData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetSuccess } = sponsorSlice.actions;
export default sponsorSlice.reducer;
