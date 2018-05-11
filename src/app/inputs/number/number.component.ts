import {
  Component,
  OnInit,
  ViewEncapsulation, 
  ElementRef,Renderer2, ViewChild, Optional}           from '@angular/core';
import { 
  FormBuilder, 
  Validators, 
  FormGroupDirective}                  from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector                      : 'app-number',
  templateUrl                   : './number.component.html',
  styleUrls                     : ['./number.component.scss'],
  encapsulation                 : ViewEncapsulation.None
})

export class NumberComponent extends BaseComponent<number> implements OnInit {
  
  constructor(@Optional() private _parentFormGroup: FormGroupDirective,private _formBuilder:FormBuilder){
    super(_parentFormGroup,_formBuilder);
  }

  focus(){
    if(!this.focusElement) this.focusElement['focus']();
  }
}