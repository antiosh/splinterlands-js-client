/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from 'src/app/services/api';
import splinterlands from 'splinterlands-js';

export const marketApi = api.injectEndpoints({
  endpoints: (build) => ({
    loadMarket: build.query<any, void>({
      queryFn: async () => {
        try {
          const result = await splinterlands.load_market();
          return { data: result };
        } catch (error) {
          return error;
        }
      },
    }),
  }),
});

export const { useLoadMarketQuery } = marketApi;
