import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form:FormGroup

  constructor(private formBuilder:FormBuilder){    
  }

  ngOnInit(){
    this.form = this.formBuilder.group(
      {'test-text':new FormControl("",[Validators.required,Validators.minLength(5)])}
    )
  }
}
