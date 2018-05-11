import {
  Component,
  OnInit,
  ViewEncapsulation, 
  ElementRef,Renderer2, ViewChild}           from '@angular/core';
import { 
  FormBuilder, 
  Validators }                  from '@angular/forms';
import { 
  Base }                        from '../base';

@Component({
  selector                      : 'app-number',
  templateUrl                   : './number.component.html',
  styleUrls                     : ['./number.component.scss'],
  encapsulation                 : ViewEncapsulation.None
})

export class NumberComponent extends Base implements OnInit {
  
  constructor(fBuilder: FormBuilder,private elementRef:ElementRef,private  renderer:Renderer2) { 
    super(fBuilder);
  }

  ngOnInit() {
    super.beforeInit();
    
    // this.validations.maxLength = 1;
    // this.validations.minLength = 1;
    // this.validations.max       = "15;
    // this.validations.min       = 1;
    // delete this.validations.required;
    // delete this.disabled;


    let validatorsDictionary    = {
        "pattern"               : Validators.pattern(this.validations.pattern),
        "maxLength"             : Validators.maxLength(this.validations.maxLength),
        "minLength"             : Validators.minLength(this.validations.minLength),
        "required"              : Validators.required
    };

    super.afterInit(validatorsDictionary);
  }
    
  
}