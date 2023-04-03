import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  // reducers: {},  // we don't use any reducers in this slice

  // action types created in the 'fetchUsers' thunk
  extraReducers(builder) {
    // fetchUsers.pending === 'users/fetch/pending'
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      // 'data' returned from the thunk is the action payload for the fulfilled action type
      state.data = action.payload; // state.data is the local (slice) state (from line 7)
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

// export the combined reducer
export const usersReducer = usersSlice.reducer;
