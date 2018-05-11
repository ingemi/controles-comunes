import {
  Component,
  OnInit,
  ViewEncapsulation, 
  Optional}           from '@angular/core';
import { 
  FormBuilder, 
  Validators, 
  FormGroupDirective}                  from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector                      : 'nrj-radio',
  templateUrl                   : './radio.component.html',
  styleUrls                     : ['./radio.component.scss'],
  encapsulation                 : ViewEncapsulation.None
})

export class RadioComponent extends BaseComponent<boolean> implements OnInit {

  constructor(@Optional() private _parentFormGroup: FormGroupDirective,private _formBuilder:FormBuilder){
    super(_parentFormGroup,_formBuilder);
  }

  focus(){
    if(!this.focusElement) this.focusElement['focus']();
  }
}