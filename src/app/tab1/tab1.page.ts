import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonInput, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { informationCircleOutline, walletOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { ResidentService, DocumentType } from '../services/resident';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonInput, IonButton, IonIcon, FormsModule, CommonModule], 
})
export class Tab1Page {
  residentService = inject(ResidentService);
  
  documents: DocumentType[] = [];
  selectedDocId: number | null = null;
  purpose: string = '';
  selectedDoc: DocumentType | null = null;

  constructor() {
    this.documents = this.residentService.getDocuments();
    addIcons({ informationCircleOutline, walletOutline, shieldCheckmarkOutline });
  }

  onDocumentChange() {
    this.selectedDoc = this.documents.find(d => d.id == this.selectedDocId) || null;
  }

  submitRequest() {
    alert(`Request submitted for: ${this.selectedDoc?.name}\nPurpose: ${this.purpose}`);
    this.selectedDocId = null;
    this.selectedDoc = null;
    this.purpose = '';
  }
}