import { Injectable } from '@angular/core';
import { formTemplate } from '../app/form-template/form-template.model'
@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  private profileData: formTemplate[] = [];
  constructor() { }
  addProfileData(data: formTemplate) {
    this.profileData.push(data);
  }
  getProfileData() {
    return this.profileData.slice();
  }
}
