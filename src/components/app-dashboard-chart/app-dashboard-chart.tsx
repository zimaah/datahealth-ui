import { Component, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'app-dashboard-chart',
  styleUrl: 'app-dashboard-chart.css'
})
export class Appappdashboardchart {

  render() {
    return (
      [
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Dashboard Patience Acquistion</ion-title>
          </ion-toolbar>
        </ion-header>,

      <ion-content class="ion-padding">

        <svc-pie-chart size={"large"} colors={['#b0ea8f', '#f4dd77', '#f7797b', '#a39293']}
        cols={[
            { title: 'Alert', type: 'string' },
            { title: 'Amount', type: 'number' }
        ]}

        rows={[
            ['Info', 33],
            ['Warning', 23],
            ['Critical', 13],
            ['Error', 6],
        ]}
 />
      </ion-content>,

      <ion-footer>
        <ion-toolbar color={"primary"}></ion-toolbar>
      </ion-footer>
      ]
    );
  }

}
