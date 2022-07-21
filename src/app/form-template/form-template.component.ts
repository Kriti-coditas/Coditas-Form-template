import { Component, OnInit } from '@angular/core';
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
  placeHolderForProfileSummary: string = "[Candidate’s name] is a passionate [primary skill] and a [secondary skill] enthusiast having gained experience in both '[primary domain]' and [secondary domain] overall span of [number] years. He has pursued his [name of degree/diploma] in [subject of specialization] and is currently working as a [designation] at Coditas.";
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
      projOneTotalDuration: this.formBuilder.group({
        projOneDurationFrom: ['', Validators.required],
        projOneDurationTo: ['', Validators.required],
      }),
      projectNameTwo: [''],
      roleInProjectTwo: [''],
      projTwoTotalDuration: this.formBuilder.group({
        projTwoDurationFrom: ['', Validators.required],
        projTwoDurationTo: ['', Validators.required],
      }),
      lastQualificationName: ['', Validators.required],
      nameOfInstitution: ['', Validators.required],
      yearOfPassing: ['', Validators.required],
      certifierName: [''],
      achievementDescr: [''],
      profileSummary: [this.placeHolderForProfileSummary]
    });
  }
  onPrint(profileForm: FormGroup) {
    // console.log("print button clicked",profileForm);
    // console.log("value of fullName",profileForm.value.fullName);
    // this.candidateName=profileForm.value.fullName;
    // this.candidateDesignation=profileForm.value.profession;
    window.print();
  }
}

