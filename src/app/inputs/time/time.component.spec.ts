import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeComponent } from './time.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DebugElement } from '@angular/core';
import * as baseTests from '../../commons/tests';
import { By } from '@angular/platform-browser';


describe('Time Component', () => {
	let component: TimeComponent;
	let fixture: ComponentFixture<TimeComponent>;
	let debug: DebugElement;
	let el: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				TimeComponent
			],
			imports: [ BrowserAnimationsModule, MatSlideToggleModule, MatInputModule, ReactiveFormsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TimeComponent);
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
					{inputName: 'placeholder', value: 'pepe', selector: By.css('input'), selectorProperty: 'properties.placeholder'},
					{inputName: 'extraClass', value: 'pepe', selector: By.css('mat-form-field'), selectorProperty: 'classes'},
					{inputName: 'extraClass', value: 'pepe pepe3', selector: By.css('mat-form-field'), selectorProperty: 'classes'}
			]
		)
		.forEach(testData => {
			expect(testData.result).toBe(testData.expectedResult, testData.message);
		});
	});

});
