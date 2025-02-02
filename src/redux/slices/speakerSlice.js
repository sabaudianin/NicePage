import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDocument, checkEmailInDb } from "../../firebase/firestoreFunctions";

export const checkSpeakerEmailExist = createAsyncThunk(
  "speakers/checkEmail",
  async (email) => {
    const exist = await checkEmailInDb("speakers", email);
    return { email, exist };
  }
);

export const addSpeaker = createAsyncThunk(
  "speakers/addSpeaker",
  async (data) => {
    const docId = await addDocument("speakers", {
      email: data.email,
      fullName: data.name,
      aboutYourself: data.aboutYourself,
      experience: data.experience,
      createdAt: new Date().toISOString(),
    });
    return { ...data, docId };
  }
);

const speakerSlice = createSlice({
  name: "speakers",
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
    builder
      .addCase(checkSpeakerEmailExist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkSpeakerEmailExist.fulfilled, (state, action) => {
        state.loading = false;
        state.exist = action.payload.exist;
      })
      .addCase(checkSpeakerEmailExist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addSpeaker.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.added = false;
      })
      .addCase(addSpeaker.fulfilled, (state, action) => {
        state.loading = false;
        state.added = true;
      })
      .addCase(addSpeaker.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetSuccess } = speakerSlice.actions;
export default speakerSlice.reducer;
