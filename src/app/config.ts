interface AppConfig {
  API_URL: string;
}

const local: AppConfig = {
  API_URL: 'http://localhost:3000',
};

const staging: AppConfig = {
  API_URL: 'https://dev-api.spl-goals.com:3000',
};

const production: AppConfig = {
  API_URL: 'https://foo-api.goals-development.com/',
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
