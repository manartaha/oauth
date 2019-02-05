import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './shared/auth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-demo-oauth';

  constructor(private oauthService: OAuthService) {

    this.ConfigureImplicitFlowAuthentication();
  }

  ngOnInit() {
    // this.oauthService.initImplicitFlow();
  }

  private ConfigureImplicitFlowAuthentication() {

    this.oauthService.configure(authConfig);

    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    this.oauthService.loadDiscoveryDocument().then((doc) => {
      this.oauthService.tryLogin()
            .catch(err => {
              console.error(err);
            })
            .then(() => {
              if (!this.oauthService.hasValidAccessToken()) {
                this.oauthService.initImplicitFlow();
              }
            });
    });
  }

}
