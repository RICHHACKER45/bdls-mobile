import { Injectable } from '@angular/core';

// We define Interfaces to enforce a strict structure for our data.
// This prevents errors (like accidentally typing 'nam' instead of 'name').
export interface DocumentType {
  id: number;
  name: string;
  fee: number;
  requirements: string;
}

export interface ServiceRequest {
  id: string;
  documentName: string;
  purpose: string;
  status: 'Pending' | 'Processing' | 'Ready' | 'Received'; // Strict literal types
  date: string;
}

@Injectable({
  providedIn: 'root' // This makes the service available globally without adding it to a module.
})
export class ResidentService {

  // Function 1: Returns our static list of available documents.
  // This satisfies the "Static/sample data may be used" instruction.
  getDocuments(): DocumentType[] {
    return [
      { id: 1, name: 'Barangay Clearance', fee: 0, requirements: 'Valid ID, Latest CTC' },
      { id: 2, name: 'Certificate of Indigency', fee: 0, requirements: 'Valid ID' },
      { id: 3, name: 'First Time Jobseeker', fee: 0, requirements: 'Oath of Undertaking, Valid ID' }
    ];
  }

  // Function 2: Returns our static list of user's past requests.
  // We will loop through this data in Tab 2 using @for.
  getMyRequests(): ServiceRequest[] {
    return [
      { id: 'REQ-001', documentName: 'Barangay Clearance', purpose: 'Employment', status: 'Processing', date: '2026-08-23' },
      { id: 'REQ-002', documentName: 'Certificate of Indigency', purpose: 'Scholarship', status: 'Pending', date: '2026-08-22' },
      { id: 'REQ-003', documentName: 'First Time Jobseeker', purpose: 'Work Requirement', status: 'Ready', date: '2026-08-20' },
    ];
  }
}
