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
          const rawData = JSON.parse(JSON.stringify(result)); // ensure only serializable data is in result
          return { data: rawData };
        } catch (error) {
          return error;
        }
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useLoginMutation } = playerApi;
