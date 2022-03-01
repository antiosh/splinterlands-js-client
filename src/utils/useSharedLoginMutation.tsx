import { useLoginMutation } from 'src/app/services/player';

export default function useSharedLoginMutation() {
  return useLoginMutation({
    fixedCacheKey: 'shared-login-data',
  });
}
