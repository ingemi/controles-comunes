import { Component, OnInit, ElementRef, Optional } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent extends BaseComponent<number> implements OnInit {

  constructor(@Optional() private _parentFormGroup: FormGroupDirective,private _formBuilder:FormBuilder){
    super(_parentFormGroup,_formBuilder);
  }

  focus(){
    if(!this.focusElement) this.focusElement['focus']();
  }
}
