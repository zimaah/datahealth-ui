import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-view-dashboard',
  styleUrl: 'app-view-dashboard.css',
  shadow: true,
})
export class AppViewDashboard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
