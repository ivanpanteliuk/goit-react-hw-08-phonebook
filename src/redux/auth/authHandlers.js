export const handleSignUpFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogInFulfilled = (state, { payload }) => {
  state.user = payload;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

export const handleRefreshUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleRefreshUserRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};
