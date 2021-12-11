import { Component, h } from '@stencil/core';
import { Forms } from '../../utils/forms/forms';
import { getInputJSX } from '../../utils/forms/utils';

@Component({
  tag: 'app-module',
  styleUrl: 'app-module.css',
})
export class AppModule {

  render() {
    const userForm = Forms["module"];

    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Module Setup</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">

        <svc-surface>
          <p>
            
          </p>
          <p>
            
          </p>
          <ul>
            <li>
              Module is an "aggregator of dashboards".
            </li>
            <li>
              Users have access to modules.
            </li>
            <li>
              Modules, by their turn, have access to specific dashboards (data + charts)
            </li>
          </ul>
        </svc-surface>
        
        <fieldset>
          <legend>Add Your First Module</legend>
          <form>
            {
              userForm && Object.keys(userForm.fields).map((field) => {
                return getInputJSX(userForm, field);
              })
            }
          </form>
        </fieldset>

        <ion-button href="/first-setup/first-dashboard" expand="block">
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
