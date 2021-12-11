import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'page-help'
})
export class PageHelp {

    @Prop() headline: string;
    @Prop() messages: any[] = [];

    componentWillLoad(){
        console.log(this.messages);
        this.messages.map((message: any) => {
            console.log(message);
        })
    }

    dismiss(){
        document.getElementsByTagName("ion-modal")[0].dismiss();
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color={"secondary"}>
                    <ion-buttons slot="start">
                        <ion-button onClick={() => { this.dismiss() }}>
                            <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                    <ion-title>{this.headline}</ion-title>
                </ion-toolbar>
            </ion-header>,
            <ion-content>
                {
                    this.messages && this.messages.map((message: any) => {
                        return (
                            <svc-surface label={message.label} style={{margin: "40px 20px 40px 20px", padding: "15px"}}>
                                <p style={{fontSize: "15px", color: "rgba(0,0,0,0.6)"}}>
                                    {message.message}
                                </p>
                            </svc-surface>
                        )
                    })
                }
            </ion-content>
        ];
    }
}