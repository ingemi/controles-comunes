import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup
  validators:any;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      { 'nombre': new FormControl("") }
    )
    this.validators = {
      'nombre':[Validators.required, Validators.minLength(5)]
    }
  }

  ngOnInit() {

  }
}
