import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { BaseValidator, ageRangeValidator, FormClassControl } from './inputs/utils';
import { mockDatos } from './mock/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  form: FormGroup
  config: any = [];

  // validators:any;

  constructor(private formBuilder: FormBuilder) {
   
  }

  ngOnInit() {

  
  var mock = mockDatos;
   
  let formConfig = 
  [
    new FormClassControl('nombre5', "Campo de nombre5", "" , "Nombre 5", [new BaseValidator(Validators.required, "Es requerido")]),
    new FormClassControl('nombre6', "Campo de nombre6", " " ,"Nombre 6", [new BaseValidator(Validators.minLength(5), ""), new BaseValidator(Validators.required, "")])
  ]
  
  this.form = this.createGroup(formConfig);
  this.config = this.createConfig(formConfig);

    // this.form = this.formBuilder.group(
    //   { 'nombre1': new FormControl(""),
    //     'nombre2': new FormControl(""),
    //     'nombre3': new FormControl(""),
    //     'nombre4': new FormControl("")
    //   }, 
    // );
    // this.validators = {
    //   'nombre1': [ new BaseValidator(Validators.required, "Es requerido")],
    //   'nombre2': [ new BaseValidator(Validators.minLength(5), ""), 
    //                new BaseValidator(Validators.required, "")],
    //   'nombre3': [ new BaseValidator(Validators.pattern("[A-Z33a-z]{3}"), "El valor no coincide con el patrón requerido")],
    //   'nombre4': [ new BaseValidator(ageRangeValidator(5,10), "")],
    // }
  }

  createGroup(array) {
    const group = this.formBuilder.group({ });
    array.forEach(element => {
      group.addControl(element.name, this.formBuilder.control(null))
    });
    return group;
  }

  createConfig(array) {
    let configs = [];
    array.forEach(element => {
      configs.push({
        name: element.name,
        validators: element.validator,
        label: element.label,
        placeholder: element.placeholder,
        className: element.className
        //Aca irian las options de los distintos inputs
      })
    });
    return configs;
  }

  submit(form): void {  
    if(form.valid) 
      console.log("valido");
    else {
      this.submit(this.form);
    }
  }
  
}



