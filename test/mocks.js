export const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => mockedNavigate,
}));

jest.mock('./src/utils/hiveKeychain', () => ({
  requestSignBuffer: (account, message, key) => new Promise((resolve) => resolve('Success')),
  RequestSignTxResponse: (account, tx, key) => new Promise((resolve) => resolve('Success')),
}));

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });