/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from 'src/app/services/api';
import splinterlands from 'splinterlands-js';

export const collectionApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCollection: build.query<any, void>({
      queryFn: async () => {
        try {
          const result = await splinterlands.get_collection();
          const rawData = JSON.parse(JSON.stringify(result));
          return { data: rawData };
        } catch (error) {
          return error;
        }
      },
    }),
  }),
});

export const { useGetCollectionQuery } = collectionApi;
