import { Injectable } from '@angular/core';
import { formTemplate } from './model/form-template.model'
import { formProjectTemplate } from './model/formProject-template';
@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  private profileData: formTemplate[] = [];
  private projectData: formProjectTemplate[] = [];
  constructor() { }
  addProfileData(data: formTemplate) {
    this.profileData.push(data);
  }
  getProfileData() {
    return this.profileData.slice();
  }
  addProjectData(projectData: formProjectTemplate) {
    this.projectData.push(projectData);
  }
  getProjectData() {
    console.log("this is all project data so far in service", this.projectData.slice());
    return this.projectData.slice();
  }
}
