import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDocument, checkEmailInDb } from "../../firebase/firestoreFunctions";

export const checkTicketExist = createAsyncThunk(
  "checkTicketExist",
  async (email) => {
    const exist = await checkEmailInDb("tickets", email);
    return { email, exist };
  }
);

export const addTicket = createAsyncThunk("addTicket", async (email) => {
  const docId = await addDocument("tickets", {
    email,
    createdAt: new Date().toISOString(),
  });
  return { email, docId };
});

const ticketsSlice = createSlice({
  name: "tickets",
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
      .addCase(checkTicketExist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkTicketExist.fulfilled, (state, action) => {
        state.loading = false;
        state.exist = action.payload.exist;
      })
      .addCase(checkTicketExist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //addTicket
      .addCase(addTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.added = false;
      })
      .addCase(addTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.added = true;
      })
      .addCase(addTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetSuccess } = ticketsSlice.actions;
export default ticketsSlice.reducer;
