import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioComponent } from './radio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as baseTests from '../../commons/tests';

describe('RadioComponent', () => {
	let component: RadioComponent;
	let fixture: ComponentFixture<RadioComponent>;
	let debug: DebugElement;
	let el: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				RadioComponent
			],
			imports: [
				BrowserAnimationsModule,
				MatRadioModule,
				ReactiveFormsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RadioComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
		debug = fixture.debugElement.query(By.all());

		el = debug.nativeElement;
	});

	it('should create this component', () => {
		expect(component).toBeTruthy();
	});

	////
	// Tests for the validations input
	it('Tests para las validaciones', () => {
		baseTests.testingForValidation(
			component,
			[
				{name: 'required', condition: 'true', successValues: ['asd'], failValues: ['']}
			]
		).forEach(testData => {
			expect(testData.result).toBe(testData.expectedResult, testData.message);
		});
	});

	////
	// Tests for the input properties
	it('Tests para las propiedades', () => {
		baseTests.testingForProperties(
			component,
			fixture,
			[
				{inputName: 'name', value: 'pepepepe', selector: By.css('mat-radio-group'), selectorProperty: 'attributes.ng-reflect-name'},
				{inputName: 'extraClass', value: 'pepe', selector: By.css('section'), selectorProperty: 'classes'},
				{inputName: 'extraClass', value: 'pepe pepe3', selector: By.css('section'), selectorProperty: 'classes'},
				{
					inputName: 'items',
					value:	[{
						value: '23',
						label: 'marsopa'
					}, {
						value: '32',
						label: 'mariposa'
					}],
					selector: By.css('mat-form-field'),
					selectorProperty: 'classes'
				}
			]
		)
		.forEach(testData => {
			expect(testData.result).toBe(testData.expectedResult, testData.message);
		});
	});
});
