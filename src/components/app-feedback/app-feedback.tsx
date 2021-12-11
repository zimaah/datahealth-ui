import { Component, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'app-feedback',
  styleUrl: 'app-feedback.css'
})
export class AppFeedback {

  render() {
    return (
      [
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Setup Finished!</ion-title>
          </ion-toolbar>
        </ion-header>,

      <ion-content class="ion-padding">

      <div style={{display: "flex",
    justifyContent: "center"}}>
        <img src={getAssetPath("../assets/success.gif")} />
      </div>

        <ion-button href="/dashboard" expand="block">
          TO THE DASHBOARD
          <ion-icon slot={"end"} name={"analytics"} />
        </ion-button>
      </ion-content>,

      <ion-footer>
        <ion-toolbar color={"primary"}></ion-toolbar>
      </ion-footer>
      ]
    );
  }

}
