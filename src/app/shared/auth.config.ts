import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'http://localhost:8080/authorization/oauth/authorize',

  // Login Url of the Identity Provider
  loginUrl: 'http://localhost:8080/authorization/oauth/authorize',

  // Login Url of the Identity Provider
  // logoutUrl: 'https://demo.identityserver.com/identity/connect/endsession',


  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/login',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'clientapp',
  responseType: 'id_token token',
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. Also provide user sepecific
  scope: 'read write CLIENT ALM',
}
