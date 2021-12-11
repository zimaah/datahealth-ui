import { Component, h } from '@stencil/core';
import { Forms } from '../../utils/forms/forms';
import { getInputJSX } from '../../utils/forms/utils';

@Component({
  tag: 'app-user',
  styleUrl: 'app-user.css',
})
export class Appuser {

  render() {
    const userForm = Forms["user"];
    console.log(userForm);

    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>User Setup</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        
        <fieldset>
          <legend>Create Your User</legend>
          <form>
            {
              Object.keys(userForm.fields).map((field) => {
                return getInputJSX(userForm, field);
              })
            }
          </form>
        </fieldset>

        <ion-button href="/first-setup/module" expand="block">
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
