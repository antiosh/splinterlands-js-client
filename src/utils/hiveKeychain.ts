export interface RequestSignBufferResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  error: string;
  message: string;
  publicKey: string;
  request_id: number;
  result: string;
  success: boolean;
}

export interface RequestSignTxResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  error: string;
  message: string;
  publicKey: string;
  request_id: number;
  result: string;
  success: boolean;
}

export function requestSignBuffer(account: string, message: string, key: string) {
  return new Promise<RequestSignBufferResponse>((resolve, reject) => {
    if (!window.hive_keychain) reject(new Error('hive_keychain is not defined'));
    window.hive_keychain.requestSignBuffer(account, message, key, (response: RequestSignBufferResponse) => {
      if (!response.success) reject(new Error(response.message));
      resolve(response);
    });
  });
}

export function requestSignTx(account: string, tx: Record<string, unknown>, key: string) {
  return new Promise<RequestSignTxResponse>((resolve, reject) => {
    if (!window.hive_keychain) reject(new Error('hive_keychain is not defined'));
    window.hive_keychain.requestSignTx(account, tx, key, (response: RequestSignTxResponse) => {
      if (!response.success) reject(new Error(response.message));
      resolve(response);
    });
  });
}
