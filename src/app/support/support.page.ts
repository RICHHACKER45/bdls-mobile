import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { helpCircleOutline, shieldCheckmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-support',
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar style="--background: #ffffff; border-bottom: 1px solid #e5e5e5;">
        <div style="display: flex; align-items: center; gap: 10px; padding-left: 16px;">
          <div style="background: #dc2626; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <ion-icon name="shield-checkmark-outline" style="color: white; font-size: 18px;"></ion-icon>
          </div>
          <ion-title style="color: #000000; font-weight: 900; font-size: 22px; padding-left: 0; letter-spacing: -0.5px;">BDLS</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content style="--background: #ffffff; color: #000000;">
      <div style="text-align: center; padding-top: 60px; color: #a3a3a3;">
        <ion-icon name="help-circle-outline" style="font-size: 64px; opacity: 0.3; color: #000000;"></ion-icon>
        <p style="font-weight: 600; font-size: 18px; color: #000000; margin-top: 16px;">Tulong / Suporta</p>
        <p style="font-size: 14px; margin-top: 4px;">Display only page (WIP)</p>
      </div>
    </ion-content>
  `,
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon],
})
export class SupportPage {
  constructor() {
    addIcons({ helpCircleOutline, shieldCheckmarkOutline });
  }
}