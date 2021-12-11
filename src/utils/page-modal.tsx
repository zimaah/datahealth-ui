import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-modal'
})
export class PageModal {
  render() {
    return [
        <ion-header translucent>
            <ion-toolbar>
                <ion-title>Installation Wizard</ion-title>
            </ion-toolbar>
        </ion-header>,
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-label>Are you ready to masterize your blockchain infra management?</ion-label>
                    <ion-button slot="end" href={"/installation-wizard"}>
                        <ion-icon name="rocket" slot="end"></ion-icon>
                        Yes!
                    </ion-button>
                </ion-item>
            </ion-list>
        </ion-content>
    ];
  }
}