import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Base } from '../base';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent extends Base implements OnInit {

  constructor(fBuilder: FormBuilder,private elementRef:ElementRef) { 
    super(fBuilder);
  }

  ngOnInit() {
    super.beforeInit();
    
    // this.validations.max = "";
    // this.validations.min = "";
    // delete this.validations.required;
    // delete this.disabled;

    let validatorsDictionary    = {
        "required"              : Validators.required
    };

    super.afterInit(validatorsDictionary);
  }
}
