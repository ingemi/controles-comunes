import { Component, OnInit, ElementRef, Optional } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends BaseComponent<any> implements OnInit {

  constructor(@Optional() private _parentFormGroup: FormGroupDirective,private _formBuilder:FormBuilder){
    super(_parentFormGroup,_formBuilder);
  }
  focus(){
    if(!this.focusElement) this.focusElement['focus']();
  }
}

