import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from 'src/app/config';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
    prepareHeaders: (headers) => {
      const token = null;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
