import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    // actions
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
