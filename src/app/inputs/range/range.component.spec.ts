import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RangeComponent } from './range.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import * as baseTests from '../../commons/tests';
import { By } from '@angular/platform-browser';

describe('RangeComponent', () => {
	let component: RangeComponent;
	let fixture: ComponentFixture<RangeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports : [ ReactiveFormsModule, MatSliderModule, FormsModule, MatInputModule ],
			declarations: [ RangeComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RangeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
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
				{inputName: 'extraClass', value: 'pepe', selector: By.css('section'), selectorProperty: 'classes'},
				{inputName: 'extraClass', value: 'pepe pepe3', selector: By.css('section'), selectorProperty: 'classes'},

				{inputName: 'placeholder', value: 'placeholder-section', selector: By.css('.range-section-placeholder'), selectorProperty: 'nativeElement.innerText'},

				{inputName: 'innerClass', value: 'pepe', selector: By.css('mat-slider'), selectorProperty: 'attributes.ng-reflect-ng-class'},
				{inputName: 'innerClass', value: 'pepe pepe3', selector: By.css('mat-slider'), selectorProperty: 'attributes.ng-reflect-ng-class'},
				{inputName: 'step', value: '333', selector: By.css('mat-slider'), selectorProperty: 'attributes.ng-reflect-step'},
				{inputName: 'validations.max', value: '32', selector: By.css('mat-slider'), selectorProperty: 'max'},
				{inputName: 'validations.min', value: '23', selector: By.css('mat-slider'), selectorProperty: 'min'}
			]
		)
		.forEach(testData => {
			expect(testData.result).toBe(testData.expectedResult, testData.message);
		});
	});

	////
	// Test for the showModelDecorator method
	it('Test para el metodo showModelDecorator', () => {
		const input = {
			sufix: 'isimo',
			prefix: 'super'
		};
		baseTests.setComponent(component, input);
		expect(component.showModelDecorator('fe')).toBe('superfeisimo');
	});

	////
	// Test for the onSliderChange method
	it('Test para el metodo onSliderChange', () => {
		const input = {
			sufix: 'isimo',
			prefix: 'super'
		};
		baseTests.setComponent(component, input);
		component.onSliderChange({value: 'fe'});
		expect(fixture.componentInstance.decorated_model).toBe('superfeisimo');
	});
});
