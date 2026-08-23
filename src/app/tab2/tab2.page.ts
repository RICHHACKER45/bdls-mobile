import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { documentOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { ResidentService, ServiceRequest } from '../services/resident';
import { StatusBadgeComponent } from '../components/status-badge/status-badge.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, StatusBadgeComponent] 
})
export class Tab2Page {
  residentService = inject(ResidentService);
  myRequests: ServiceRequest[] = [];

  constructor() {
    this.myRequests = this.residentService.getMyRequests();
    addIcons({ documentOutline, shieldCheckmarkOutline });
  }
}