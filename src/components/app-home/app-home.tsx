import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Choose Language</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-select value={1}>
          <ion-select-option value={1}>🇺🇸 English</ion-select-option>
          <ion-select-option value={2}>🇧🇷 Brazilian-Portuguese</ion-select-option>
          <ion-select-option value={3}>🇲🇽 Spanish</ion-select-option>
        </ion-select>

        <ion-button href="/first-setup/user" expand="block">
          Next
          <ion-icon slot={"end"} name={"arrow-forward-circle"} />
        </ion-button>
      </ion-content>,

      <ion-footer>
        <ion-toolbar color={"primary"}></ion-toolbar>
      </ion-footer>
    ];
  }
}
