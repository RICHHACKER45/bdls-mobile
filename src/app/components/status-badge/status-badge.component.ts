import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// In Ionic 8 Standalone components, we import specific elements (like IonBadge) instead of the entire IonicModule
import { IonBadge } from '@ionic/angular';

@Component({
  selector: 'app-status-badge', // We will use <app-status-badge> in our HTML
  template: `
    <!-- Property Binding: We bind the [color] attribute to the result of getBadgeColor() -->
    <!-- Interpolation: We use {{ status }} to display the text inside the badge -->
    <ion-badge [color]="getBadgeColor()">
      {{ status }}
    </ion-badge>
  `,
  standalone: true, // Modern Angular feature meaning it doesn't need an ngModule
  imports: [CommonModule, IonBadge]
})
export class StatusBadgeComponent {
  // @Input() allows parent components (like Tab2) to pass data into this component.
  @Input() status!: string;

  // This function evaluates the 'status' and returns the corresponding Ionic UI color.
  // It ensures UI consistency across the app.
  getBadgeColor(): string {
    switch (this.status) {
      case 'Pending': return 'warning'; // Yellow
      case 'Processing': return 'primary'; // Blue
      case 'Ready': return 'success'; // Green
      case 'Received': return 'medium'; // Gray
      default: return 'light';
    }
  }
}
