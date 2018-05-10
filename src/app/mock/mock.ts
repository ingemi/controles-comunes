import { BaseValidator, ageRangeValidator, FormClassControl } from '../inputs/utils';
import { FormBuilder, FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
export const mockDatos = [{
    controlName: 'controlNumero1',
    options: {
		textLabel: 'Campo numero 1',
		placeholder: '',
		class: 'form-group'
	},
	validators: [
        new BaseValidator(Validators.required, "Es requerido"),
    ]
}]