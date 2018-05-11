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
    new FormClassControl( 
      { controlName: 'nasssssme' }, 
      { labelText: 'Campo de nombre5' }, 
      { extraClass: '' } ,
      { placeholder: 'Campo 1' }, 
      { validators: [ 
                        new BaseValidator( { validator: Validators.required }, { message: 'Es requerido' }),     
                    ]
      }),
      new FormClassControl( 
        { controlName: 'name2' }, 
        { labelText: 'Campo2' }, 
        { extraClass: '' } ,
        { placeholder: 'Campo 2' }, 
        { validators: [ 
                        new BaseValidator( { validator: Validators.required }, { message: 'Es requerido' }),    
                        new BaseValidator( { validator: Validators.maxLength(5) },{ message: 'El maximo permitido son 5 caracteres' }),     
                      ]
        }),
  ]
  
  this.form = this.createGroup(formConfig);
  this.config = this.createConfig(formConfig);
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
      })
    });
    return configs;
  }

  submit(form): void {  
    if(form.valid) 
      console.log("valido");
    else {
      
    }
  }

      
  
}



