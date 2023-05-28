import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'redux/helpers';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: 'Auth',
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        data: user,
        invalidatesTags: ['Auth'],
      }),
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        data: user,
        invalidatesTags: ['Auth'],
      }),
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
        invalidatesTags: ['Auth'],
      }),
    }),
    refreshUser: builder.mutation({
      query: () => ({
        url: '/users/current',
      }),
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = authApi;

// export const authApi = createApi({
//   reducerPath: 'auth',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   tagTypes: 'Auth',
//   endpoints: builder => ({
//     signUpUser: builder.mutation({
//       query: user => ({
//         url: '/users/signup',
//         method: 'POST',
//         data: user,
//         invalidatesTags: ['Auth'],
//       }),
//     }),
//     logInUser: builder.mutation({
//       query: user => ({
//         url: '/users/login',
//         method: 'POST',
//         data: user,
//         invalidatesTags: ['Auth'],
//       }),
//     }),
//     logOutUser: builder.mutation({
//       query: () => ({
//         url: '/users/logout',
//         method: 'POST',
//         invalidatesTags: ['Auth'],
//       }),
//     }),
//   }),
// });

// export const {
//   useSignUpUserMutation,
//   useLogInUserMutation,
//   useLogOutUserMutation,
// } = authApi;
