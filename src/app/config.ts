interface AppConfig {
  API_URL: string;
  WS_URL: string;
  TX_BROADACST_URL: string;
}

const local: AppConfig = {
  API_URL: 'https://api2.splinterlands.com',
  WS_URL: 'wss://ws.steemmonsters.io',
  TX_BROADACST_URL: 'https://broadcast.splinterlands.io',
};

const staging: AppConfig = {
  API_URL: 'https://dev-api.spl-goals.com:3000',
  WS_URL: 'wss://ws.steemmonsters.io',
  TX_BROADACST_URL: 'https://broadcast.splinterlands.io',
};

const production: AppConfig = {
  API_URL: 'https://foo-api.goals-development.com/',
  WS_URL: 'wss://ws.steemmonsters.io',
  TX_BROADACST_URL: 'https://broadcast.splinterlands.io',
};

const config = {
  local,
  staging,
  production,
}[process.env.config ?? 'local'];

export async function loadConfig() {
  const configResponse = await fetch('/config.json');
  if (configResponse.status === 200) {
    const remoteConfig = await configResponse.json();
    Object.assign(config, remoteConfig);
  }
}

export default config as AppConfig;
