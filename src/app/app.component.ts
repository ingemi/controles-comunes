import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { BaseValidator, ageRangeValidator, FormBaseControl, InputBaseControl, InputNumber } from './inputs/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  form: FormGroup
  config: any = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {



    let InputTexto1 = new InputBaseControl();
    InputTexto1.pSetName('Control1');
    InputTexto1.pSetValidador(new BaseValidator( { validator: Validators.required }, { message: 'Es requerido' }, { key: 'required'} ));
    InputTexto1.pSetPlaceholder('Input control 1');
    
    
    let InputTexto2 = new InputBaseControl();
    InputTexto2.pSetName('Control2');
    InputTexto2.pSetValidador(new BaseValidator( { validator: Validators.required }, { message: 'Es requerido' }, { key: 'required'} ));
    InputTexto2.pSetValidador(    new BaseValidator( { validator: Validators.maxLength(5) },{ message: 'El maximo permitido son 5 caracteres' }, { key: 'maxlength'}));
    InputTexto2.pSetPlaceholder('Input control 2');


    let InputNumber1 = new InputNumber();
    InputNumber1.pSetName('Control3');
    InputNumber1.pSetPlaceholder('Input Number');
    InputNumber1.pSetStep(10);
    InputNumber1.pSetValidador(new BaseValidator( { validator: Validators.required }, { message: 'Es requerido' }, { key: 'required'}));
    InputNumber1.pSetValidador(new BaseValidator( { validator: Validators.min(2) }, { message: 'El valor minimo es 2' }, { key: 'min'}));
    InputNumber1.pSetValidador(new BaseValidator( { validator: Validators.max(30) }, { message: 'El valor maximo es 30' }, { key: 'max'}));

    let formConfig1 = [InputTexto1, InputTexto2, InputNumber1];

    this.form = this.createGroup(formConfig1);
    this.config = this.createConfig(formConfig1);













    
    let formConfig = 
    [
      new FormBaseControl( 
        { controlName: 'nasssssme' }, 
        { labelText: 'Campo de nombre5' }, 
        { extraClass: '' } ,
        { placeholder: 'Campo 1' }, 
        { validators: [ 
                          new BaseValidator( { validator: Validators.required }, { message: 'Es requerido' }, { key: 'required'} ),     
                      ]
        },
        ),
        new FormBaseControl( 
          { controlName: 'name2' }, 
          { labelText: 'Campo2' }, 
          { extraClass: '' } ,
          { placeholder: 'Campo 2' }, 
          { validators: [ 
                          new BaseValidator( { validator: Validators.required }, { message: 'Es requerido' }, { key: 'required'}),    
                          new BaseValidator( { validator: Validators.maxLength(5) },{ message: 'El maximo permitido son 5 caracteres' }, { key: 'maxlength'}),     
                        ]
          },
        ),
          new FormBaseControl( 
            { controlName: 'name3' }, 
            { labelText: 'Campo Input Type Number' }, 
            { extraClass: '' } ,
            { placeholder: 'Campo Input Type Number' }, 
            { validators: [ 
                            new BaseValidator( { validator: Validators.required }, { message: 'Es requerido' }, { key: 'required'}),    
                            new BaseValidator( { validator: Validators.min(2) }, { message: 'El valor minimo es 2' }, { key: 'min'}),
                            new BaseValidator( { validator: Validators.max(30) }, { message: 'El valor maximo es 30' }, { key: 'max'})
                          ]
            },
            { step: 10 }
            ),
    ]
    
  // this.form = this.createGroup(formConfig);
  // this.config = this.createConfig(formConfig);
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
        className: element.className,
        step: element.step
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



