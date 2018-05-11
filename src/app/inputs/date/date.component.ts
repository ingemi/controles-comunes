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
  selector                      : 'app-date',
  templateUrl                   : './date.component.html',
  styleUrls                     : ['./date.component.scss'],
  encapsulation                 : ViewEncapsulation.None
})

export class DateComponent extends BaseComponent<any> implements OnInit {

  constructor(@Optional() private _parentFormGroup: FormGroupDirective,private _formBuilder:FormBuilder){
    super(_parentFormGroup,_formBuilder);
  }
}
