import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import * as thunks from './authOperations';
import * as handlers from './authHandlers';

const operationsArr = [
  thunks.registerUser,
  thunks.logInUser,
  thunks.logOutUser,
];

const setOperationStatus = status => operationsArr.map(el => el[status]);

const status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(thunks.registerUser.fulfilled, handlers.handleSignUpFulfilled)
      .addCase(thunks.logInUser.fulfilled, handlers.handleLogInFulfilled)
      .addCase(thunks.logOutUser.fulfilled, handlers.handleLogOutFulfilled)
      .addCase(thunks.refreshUser.pending, handlers.handleRefreshUserPending)
      .addCase(
        thunks.refreshUser.fulfilled,
        handlers.handleRefreshUserFulfilled
      )
      .addCase(thunks.refreshUser.rejected, handlers.handleRefreshUserRejected)
      .addMatcher(
        isAnyOf(...setOperationStatus(status.PENDING)),
        handlers.handlePending
      )
      .addMatcher(
        isAnyOf(...setOperationStatus(status.FULFILLED)),
        handlers.handleFulfilled
      )
      .addMatcher(
        isAnyOf(...setOperationStatus(status.REJECTED)),
        handlers.handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
