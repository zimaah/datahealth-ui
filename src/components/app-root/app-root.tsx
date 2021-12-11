import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          
          <ion-route url="/first-setup/user" component="app-user" />

          <ion-route url="/first-setup/module" component="app-module" />

          <ion-route url="/first-setup/first-dashboard" component="app-first-dashboard" />

          <ion-route url="/first-setup/feedback" component="app-feedback" />

          <ion-route url="/dashboard" component="app-dashboard-chart" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
