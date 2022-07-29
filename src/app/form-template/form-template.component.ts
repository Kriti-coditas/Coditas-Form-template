import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { formTemplate } from '../model/form-template.model'
import { formProjectTemplate } from '../model/formProject-template'
import { ProfileDataService } from '../profile-data.service'

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private profileDataService: ProfileDataService) { }
  candidateName!: string;
  candidateDesignation!: string;
  profileSummaryInPara: string = "[Candidate’s name] is a passionate [primary skill] and a [secondary skill] enthusiast having gained experience in both '[primary domain]' and [secondary domain] overall span of [number] years. He has pursued his [name of degree/diploma] in [subject of specialization] and is currently working as a [designation] at Coditas.";
  errorMessage: string = "";
  addMoreProjects: Boolean = false;
  countProjects: number = 1;
  showOnPreviewData: boolean = false
  displayPreviewSection: boolean = false;
  previewBtnDisabled = true;
  printBtnDisabled = true;
  onFormEdit: boolean = true;
  moreThanOneProject: boolean = false;
  profileForm!: FormGroup;
  profileData!: formTemplate[];
  projectData!: formProjectTemplate[];
  projectsDetail!: FormArray;
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      profession: ['', Validators.required],
      programmingLangFromework: ['', Validators.required],
      versionControlName: [''],
      databaseName: [''],
      cloudTechnologiesName: [''],
      operatingSystemName: [''],
      projects: this.formBuilder.array([this.createprojects()]),
      lastQualificationName: ['', Validators.required],
      nameOfInstitution: ['', Validators.required],
      yearOfPassing: ['', Validators.required],
      certifierName: [''],
      achievementDescr: [''],
      profileSummary: [''],
    });
    this.projectsDetail = this.profileForm.get('projects') as FormArray;
  }

  createprojects(): FormGroup {
    return this.formBuilder.group({
      projectName: [''],
      roleInProject: [''],
      projectDuration: [''],
    });
  }

  get projectsFormGroup() {
    return this.profileForm.get('projects') as FormArray
  }
  getProjectsDataForPreview() {
    const projectNameOne = this.profileForm.value.projects[0].projectName;
    const roleInProjectOne = this.profileForm.value.projects[0].roleInProject;
    const projOneDuration = this.profileForm.value.projects[0].projectDuration;
    const projectData = new formProjectTemplate(projectNameOne, roleInProjectOne, projOneDuration);
    this.profileDataService.addProjectData(projectData);
    if (this.countProjects > 1) {
      for (let i = 1; i < this.projectsDetail.length; i++) {
        this.profileDataService.addProjectData(this.projectsDetail.value[i]);
      }
    }
    this.projectData = this.profileDataService.getProjectData();
    console.log("this.projectData", this.projectData);
  }
  onAddMoreProject() {
    this.moreThanOneProject = true;
    this.addMoreProjects = true;
    this.displayPreviewSection = false;
    this.projectsDetail.push(this.createprojects());
    this.countProjects = this.countProjects + 1;
  }
  removeProject(index: number) {
    this.projectsDetail.removeAt(index);
  }
  getProjectsFormGroup(index: number): FormGroup {
    this.projectsDetail = this.profileForm.get('projects') as FormArray;
    const formGroup = this.projectsDetail.controls[index] as FormGroup;
    return formGroup;
  }

  checkRequiredFields() {
    this.displayPreviewSection = false;
    if (this.profileForm.value.fullName !== undefined && this.profileForm.value.profession !== undefined && this.profileForm.value.profileSummary !== undefined) {
      this.previewBtnDisabled = false;
      this.printBtnDisabled = false;
      this.errorMessage = "";
    } else {
      this.previewBtnDisabled = true;
      this.printBtnDisabled = true;
      this.errorMessage = "Please fill all the Mandatory fields to Print"
    }
  }
  onPrint() {
    window.print();
    this.displayPreviewSection = false;
    this.onFormEdit = true;
  }
  getProfileDataForPreview() {
    this.displayPreviewSection = true;
    this.onFormEdit = false;
    const fullName = this.profileForm.value.fullName;
    const profession = this.profileForm.value.profession;
    const programmingLangFromework = this.profileForm.value.programmingLangFromework;
    const versionControlName = this.profileForm.value.versionControlName;
    const databaseName = this.profileForm.value.databaseName;
    const cloudTechnologiesName = this.profileForm.value.cloudTechnologiesName;
    const operatingSystemName = this.profileForm.value.operatingSystemName;
    const lastQualificationName = this.profileForm.value.lastQualificationName;
    const nameOfInstitution = this.profileForm.value.nameOfInstitution;
    const yearOfPassing = this.profileForm.value.yearOfPassing;
    const certifierName = this.profileForm.value.certifierName;
    const achievementDescr = this.profileForm.value.achievementDescr;
    const profileSummary = this.profileForm.value.profileSummary;
    const newprofileData = new formTemplate(fullName, profession, programmingLangFromework, versionControlName, databaseName, cloudTechnologiesName,
      operatingSystemName, this.profileDataService.getProjectData(),
      lastQualificationName, nameOfInstitution, yearOfPassing, certifierName, achievementDescr, profileSummary);
    this.profileDataService.addProfileData(newprofileData);
    this.profileData = this.profileDataService.getProfileData();
  }

  onPreview() {
    // console.log("you clicked preview");
    this.getProjectsDataForPreview();
    this.getProfileDataForPreview();
  }
  onReset() {
    this.errorMessage = "";
    this.addMoreProjects = false;
    var onResetProfileSummary = document.getElementById('profileSummary');
    const el = document.querySelector('button');
    if (onResetProfileSummary != null) {
      onResetProfileSummary.innerHTML = this.profileSummaryInPara;
    }
  }
}

