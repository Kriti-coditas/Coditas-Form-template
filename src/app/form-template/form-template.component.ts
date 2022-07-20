import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  onPrint()
  {
    console.log("print button clicked");
    // var printOutContent = document.getElementById('printIt')?.innerHTML
    window.print();
  }

}
