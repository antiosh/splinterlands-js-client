import { api } from 'src/app/services/api';

export const playerApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Record<string, unknown>, void>({
      queryFn: () => {
        // use login function from splinterlands-js
        // need to npm install a branch of splinterlands-js
        // will need to add correct params to queryFn
        // use try/catch
        // if successful, return result like { data: result }
        // if unsuccessful (caught), return error message like { data: error.message }
        return { data: {} };
      },
    }),
  }),
});

export const { useLoginMutation } = playerApi;
