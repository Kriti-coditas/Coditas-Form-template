import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formTemplate } from '../form-template/form-template.model'
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
  profileForm!: FormGroup;
  profileData!: formTemplate[];
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      profession: ['', Validators.required],
      programmingLangFromework: ['', Validators.required],
      versionControlName: [''],
      databaseName: [''],
      cloudTechnologiesName: [''],
      operatingSystemName: [''],
      projectNameOne: [''],
      roleInProjectOne: [''],
      projOneDuration: ['', Validators.required],
      projectNameTwo: [''],
      roleInProjectTwo: [''],
      projTwoDuration: ['', Validators.required],
      lastQualificationName: ['', Validators.required],
      nameOfInstitution: ['', Validators.required],
      yearOfPassing: ['', Validators.required],
      certifierName: [''],
      achievementDescr: [''],
      profileSummary: [''],
    });
  }
  onAddMoreProject() {
    this.displayPreviewSection = false;
    this.addMoreProjects = true;
  }
  checkRequiredFields() {
    this.displayPreviewSection = false;
    if (this.profileForm.value.fullName !== undefined && this.profileForm.value.profession !== undefined && this.profileForm.value.profileSummary !== undefined) {
      this.previewBtnDisabled = false;
      this.printBtnDisabled = false;
      this.errorMessage = "";
    } else {
      this.previewBtnDisabled = true;
      this.printBtnDisabled=true;
      this.errorMessage = "Please fill all the Mandatory fields to Print"
    }
  }
  onPrint() {
    window.print();
    this.displayPreviewSection = false;
    this.onFormEdit = true;
  }
  onPreview() {
    // console.log("you clicked preview");
    this.displayPreviewSection = true;
    this.onFormEdit = false;
    const fullName = this.profileForm.value.fullName;
    const profession = this.profileForm.value.profession;
    const programmingLangFromework = this.profileForm.value.programmingLangFromework;
    const versionControlName = this.profileForm.value.versionControlName;
    const databaseName = this.profileForm.value.databaseName;
    const cloudTechnologiesName = this.profileForm.value.cloudTechnologiesName;
    const operatingSystemName = this.profileForm.value.operatingSystemName;
    const projectNameOne = this.profileForm.value.projectNameOne;
    const roleInProjectOne = this.profileForm.value.roleInProjectOne;
    const projOneDuration = this.profileForm.value.projOneDuration;
    const projectNameTwo = this.profileForm.value.projectNameTwo;
    const roleInProjectTwo = this.profileForm.value.roleInProjectTwo;
    const projTwoDuration = this.profileForm.value.projTwoDuration;
    const lastQualificationName = this.profileForm.value.lastQualificationName;
    const nameOfInstitution = this.profileForm.value.nameOfInstitution;
    const yearOfPassing = this.profileForm.value.yearOfPassing;
    const certifierName = this.profileForm.value.certifierName;
    const achievementDescr = this.profileForm.value.achievementDescr;
    const profileSummary = this.profileForm.value.profileSummary;
    const newprofileData = new formTemplate(fullName, profession, programmingLangFromework, versionControlName, databaseName, cloudTechnologiesName,
      operatingSystemName, projectNameOne, roleInProjectOne, projOneDuration, projectNameTwo, roleInProjectTwo, projTwoDuration,
      lastQualificationName, nameOfInstitution, yearOfPassing, certifierName, achievementDescr, profileSummary);
    this.profileDataService.addProfileData(newprofileData);
    this.profileData = this.profileDataService.getProfileData()
    //  console.log("ProfileDataService",this.profileData);
    // var toPrint = document.getElementById('www')
    // console.log("to print",toPrint);
    // var popupWin=window.open('www', '_blank', 'width=800,height=800,location=no,left=600px');
    // console.log("to print",popupWin);
    //  if(popupWin!=null && toPrint!=null){
    //  popupWin.document.write(toPrint.innerHTML);
    // popupWin.document.close();
    //  }
    // }else{
    //   this.errorMessage="Fill the required field to Preview"
    //   this.previewBtnDisabled=true;
    // }
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

