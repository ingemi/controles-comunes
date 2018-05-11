import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberComponent } from './number.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as baseTests from '../../commons/tests';

describe('NumberComponent', () => {
	let component: NumberComponent;
	let fixture: ComponentFixture<NumberComponent>;
	let debug: DebugElement;
	let el: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				NumberComponent
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
		fixture = TestBed.createComponent(NumberComponent);
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
				{name: 'required', condition: 'true', successValues: ['asd'], failValues: ['']},
				{name: 'maxLength', condition: '10', successValues: ['asd'], failValues: ['asdasddsasda']},
				{name: 'minLength', condition: '3', successValues: ['asdd'], failValues: ['as']},
				{name: 'pattern', condition: '[A-z]*', successValues: ['aacom'], failValues: ['a2@a.com']}
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
				{inputName: 'placeholder', value: 'pepe', selector: By.css('input'), selectorProperty: 'properties.placeholder'},
				{inputName: 'name', value: 'pepe', selector: By.css('input'), selectorProperty: 'properties.name'},
				{inputName: 'behavior.autocomplete', value: 'true', selector: By.css('input'), selectorProperty: 'properties.autocomplete'},
				{inputName: 'behavior.autocomplete', value: 'false', selector: By.css('input'), selectorProperty: 'properties.autocomplete'},
				{inputName: 'behavior.spellCheck', value: 'true', selector: By.css('input'), selectorProperty: 'properties.spellcheck'},
				{inputName: 'behavior.spellCheck', value: 'false', selector: By.css('input'), selectorProperty: 'properties.spellcheck'},
				{inputName: 'behavior.maxChars', value: '99', selector: By.css('input'), selectorProperty: 'attributes.maxlength'},
				{inputName: 'extraClass', value: 'pepe', selector: By.css('mat-form-field'), selectorProperty: 'classes'},
				{inputName: 'extraClass', value: 'pepe pepe3', selector: By.css('mat-form-field'), selectorProperty: 'classes'}
			]
		)
		.forEach(testData => {
			expect(testData.result).toBe(testData.expectedResult, testData.message);
		});
	});
});
