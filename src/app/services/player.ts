/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from 'src/app/services/api';
import splinterlands from 'splinterlands-js';

interface LoginRequest {
  username: string;
  key: string;
}

export const playerApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, LoginRequest>({
      queryFn: async (loginRequest) => {
        try {
          const result = await splinterlands.login(loginRequest.username, loginRequest.key);
          if (result.error) {
            return { error: result.error };
          }
          return { data: result };
        } catch (error) {
          if (error.message) {
            return { error: error.message };
          }
          return { error: 'Something went wrong' };
        }
      },
      invalidatesTags: [],
    }),
    resetPassword: build.mutation<any, string>({
      queryFn: async (email) => {
        try {
          const result = await splinterlands.resetPassword(email);
          if (result.error) {
            return { error: result.error };
          }
          return { data: result };
        } catch (error) {
          if (error.message) {
            return { error: error.message };
          }
          return { error: 'Something went wrong' };
        }
      },
    }),
  }),
});

export const { useLoginMutation, useResetPasswordMutation } = playerApi;
