import { modalController } from "@ionic/core";

export async function presentModal(componentTagName: string, componentProps?: any) {
  console.log(componentProps);
  const modal = await modalController.create({
    component: componentTagName,
    componentProps: componentProps
  });
  await modal.present();
}