import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  candidateName!: string;
  candidateDesignation!: string;
  profileSummaryInPara: string = "[Candidate’s name] is a passionate [primary skill] and a [secondary skill] enthusiast having gained experience in both '[primary domain]' and [secondary domain] overall span of [number] years. He has pursued his [name of degree/diploma] in [subject of specialization] and is currently working as a [designation] at Coditas.";
  errorMessage: string = "";
  addMoreProjects: Boolean = false;
  countProjects: number = 1;
  profileForm!: FormGroup;
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
      // projects:[''],
      //projects: this.formBuilder.array([]),
    });
  }
  onAddMoreProject() {
    // this.countProjects+=1;
    this.addMoreProjects = true;
    console.log("add more projects");
  }
  checkRequiredFields() {
    // console.log("Inside checkRequiredFields");
    if (this.candidateName !== "" || this.candidateDesignation !== "" || !this.profileSummaryInPara) {
      this.errorMessage = "Please fill all the Mandatory fields to Print"
    } else {
      this.errorMessage = "";
    }
  }
  onPrint() {
    window.print();
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

