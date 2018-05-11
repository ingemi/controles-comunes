import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DoubleSelectComponent } from './double-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as baseTests from '../../commons/tests';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OriginacionService } from '../../services/originacion.service';
import { HttpService } from '../../core/services/http.service';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoreConfigService } from '../../core/services/core-config.service';
import { CacheService } from '../../core/services/cache.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, Observer } from 'rxjs';
import { OriginacionServiceMock } from '../../commons/mocks';

let WASREDIRECTED = false;

function getInputs (validator?: any, value?: any) {
	return {
		multiple: true,
		placeholder: [
			'Provincia',
			'Localidad'
		],
		model: [
			value,
			value
		],
		name: [
			'provinciaDomParticular',
			'localidadDomParticular'
		],
		items: [
			[{
				'label': 'BUENOS AIRES',
				'value': 'BUENOS AIRES'
			}],
			[{
				'label': 'BUENOS AIRES',
				'value': 'BUENOS AIRES'
			}]
		],
		validations: (validator) ?
			{
				[validator.controlName]: {
					[validator.name]: validator.controlName
				}
		} : ''
	};
}

function setComponent (component: any, inputs: any, value?: any, controlName?: string): any {
	Object.keys(inputs).forEach(property => {
		component[property] = inputs[property];
	});
	component.ngOnInit();
	if (value) {
		component.form.controls[controlName].setValue(value);
	}
}

class RouterMock {
	public navigate (routes: any[]) {
		WASREDIRECTED = true;
	}
}

describe('DoubleSelect', () => {
	let component: DoubleSelectComponent;
	let fixture: ComponentFixture<DoubleSelectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				DoubleSelectComponent
			],
			imports: [
				MatFormFieldModule,
				MatSelectModule,
				ReactiveFormsModule,
				HttpClientModule,
				HttpClientTestingModule,
				BrowserAnimationsModule
			],
			providers: [
				{ provide: OriginacionService, useClass: OriginacionServiceMock },
				HttpService,
				CoreConfigService,
				CacheService,
				{ provide: Router, useClass: RouterMock }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DoubleSelectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		WASREDIRECTED = false;
	});

	it('should create this component', () => {
		expect(component).toBeTruthy();
	});

	[
		{name: 'required', condition: 'true', successValues: ['BUENOS AIRES'], failValues: [''], controlName: 'inputCtrlFirst'},
		{name: 'required', condition: 'true', successValues: ['BUENOS AIRES'], failValues: [''], controlName: 'inputCtrlSecond'}
	]
	.forEach(validator => {
		validator.successValues.forEach(successValue => {
			it(`Test para comprobar que el validador "${validator.name}" con la condicion "${validator.condition}" se setee bien y que al recibir el valor "${successValue}" de como resultado hasError igual a false`, () => {
				component.onSelectChange = () => {};
				setComponent(component, getInputs(validator, successValue), successValue, validator.controlName);
				fixture.detectChanges();
				expect(component.form.controls[validator.controlName].hasError(validator.name.toString().toLowerCase())).toBeFalsy();
			});
		});
		validator.failValues.forEach(failValue => {
			it(`Test para comprobar que el validador "${validator.name}" con la condicion "${validator.condition}" se setee bien y que al recibir el valor "${failValue}" de como resultado hasError igual a false`, () => {
				component.onSelectChange = () => {};
				setComponent(component, getInputs(validator, failValue), failValue, validator.controlName);
				fixture.detectChanges();
				expect(component.form.controls[validator.controlName].hasError(validator.name.toString().toLowerCase())).toBeTruthy();
			});
			it(`Test para comprobar que el validador "${validator.name}" que muestre el mensaje`, () => {
				component.onSelectChange = () => {};
				setComponent(component, getInputs(validator, failValue), failValue, validator.controlName);
				fixture.detectChanges();
				expect(baseTests.isCorrectTheMessage(validator.name.toLowerCase(), component, validator.controlName)).toBeTruthy();
			});
		});
	});

	it ('Test del metodo onSelectChange prueba el camino en donde la propiedad items no cambia', () => {
		setComponent(component,  getInputs());
		component.onSelectChange('', 1);
		expect(component.items[1][0].label).toBe('BUENOS AIRES');
	});

	it ('Test del metodo onSelectChange prueba el camino en donde la propiedad items cambia', () => {
		setComponent(component, getInputs());
		component.first = false;
		component.onSelectChange('success test', 0);
		expect(component.items[1][0].label).toBe('pepe');
	});

	it ('Test del onSelectChange prueba el camino donde se lo deriva al call', () => {
		setComponent(component, getInputs());
		component.first = false;
		component.onSelectChange('error test', 0);
		expect(WASREDIRECTED).toBeTruthy();
	});

	it ('Test del onSelectChange prueba el camino donde no me trae data del back', () => {
		setComponent(component, getInputs());
		component.first = false;
		component.onSelectChange('no data', 0);
		expect(component.items[1][0].label).toBe('BUENOS AIRES');
	});

	it('Test para comprobar que se apliquen las extra class', () => {
		const inputs = getInputs();
		inputs['extraClass'] = 'extra class';
		setComponent(component, inputs);
		fixture.detectChanges();
		expect(baseTests.getResult(fixture, 'extraClass', By.css('mat-form-field'), 'classes', 'extra class')).toBeTruthy();
	});

	it('Test para comprobar que se apliquen el placeholder', () => {
		const inputs = getInputs();
		setComponent(component, inputs);
		fixture.detectChanges();
		expect(fixture.componentInstance.placeholder[0]).toBe('Provincia');
		expect(fixture.componentInstance.placeholder[1]).toBe('Localidad');
	});
});
