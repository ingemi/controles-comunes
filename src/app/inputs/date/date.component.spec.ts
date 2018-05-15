import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateComponent } from './date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';
// import * as baseTests from '../../commons/tests';

describe('DateComponent', () => {
	let component: DateComponent;
	let fixture: ComponentFixture<DateComponent>;
	let debug: DebugElement;
	let el: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				DateComponent
			],
			imports: [
				BrowserAnimationsModule,
				MatInputModule,
				ReactiveFormsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DateComponent);
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
	// it('Tests para las validaciones', () => {
	// 	baseTests.testingForValidation(
	// 		component,
	// 		[
	// 			{name: 'required', condition: 'true', successValues: ['asd'], failValues: ['']}
	// 		]
	// 	).forEach(testData => {
	// 		expect(testData.result).toBe(testData.expectedResult, testData.message);
	// 	});
	// });

	////
	// Tests for the input properties
	// it('Tests para las propiedades', () => {
	// 	baseTests.testingForProperties(
	// 		component,
	// 		fixture,
	// 		[
	// 			{inputName: 'placeholder', value: 'datePlaceholder', selector: By.css('input'), selectorProperty: 'attributes.ng-reflect-placeholder'},
	// 			{inputName: 'name', value: 'dateName', selector: By.css('input'), selectorProperty: 'properties.name'},
	// 			{inputName: 'extraClass', value: 'pepe', selector: By.css('mat-form-field'), selectorProperty: 'classes'},
	// 			{inputName: 'extraClass', value: 'pepe pepe3', selector: By.css('mat-form-field'), selectorProperty: 'classes'}
	// 		]
	// 	)
	// 	.forEach(testData => {
	// 		expect(testData.result).toBe(testData.expectedResult, testData.message);
	// 	});
	// });
});
