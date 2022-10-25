// export const environment = {
//   production: true,
//   baseApiUrl: ''
// };


import config from '../../auth_config_prod.json';

const { domain, clientId, audience, baseApiUrl, errorPath } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  baseApiUrl: string;
  errorPath: string;
};

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    audience,
    redirectUri: window.location.origin,
    errorPath,
  },
  httpInterceptor: {
    allowedList: [`${baseApiUrl}/*`],
  },
};

