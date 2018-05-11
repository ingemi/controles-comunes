import {
  Component,
  OnInit,
  ViewEncapsulation }           from '@angular/core';
import { 
  FormBuilder, 
  Validators }                  from '@angular/forms';
import { 
  Base }                        from '../base';

@Component({
  selector                      : 'app-date',
  templateUrl                   : './date.component.html',
  styleUrls                     : ['./date.component.scss'],
  encapsulation                 : ViewEncapsulation.None
})

export class DateComponent extends Base implements OnInit {

  constructor(fBuilder: FormBuilder){
    super(fBuilder);
  }

  ngOnInit() {
    super.beforeInit();
    
    // this.validations.max = "2018-01-01";
    // this.validations.min = "2018-01-01";
    // delete this.validations.required;
    // delete this.disabled;

    let validatorsDictionary    = {
      "required"                : Validators.required
    };

    super.afterInit(validatorsDictionary);
  }
}
