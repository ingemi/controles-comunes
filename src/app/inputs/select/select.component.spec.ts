// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { SelectComponent } from './select.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { DebugElement } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import * as baseTests from '../../commons/tests';

// describe('SelectComponent', () => {
// 	let component: SelectComponent;
// 	let fixture: ComponentFixture<SelectComponent>;
// 	let debug: DebugElement;
// 	let el: HTMLElement;

// 	beforeEach(async(() => {
// 		TestBed.configureTestingModule({
// 			declarations: [
// 				SelectComponent
// 			],
// 			imports: [
// 				BrowserAnimationsModule,
// 				MatSelectModule,
// 				MatFormFieldModule,
// 				ReactiveFormsModule
// 			]
// 		})
// 			.compileComponents();
// 	}));

// 	beforeEach(() => {
// 		fixture = TestBed.createComponent(SelectComponent);
// 		component = fixture.componentInstance;

// 		fixture.detectChanges();
// 		debug = fixture.debugElement.query(By.all());

// 		el = debug.nativeElement;
// 	});

// 	it('should create this component', () => {
// 		expect(component).toBeTruthy();
// 	});

// 	////
// 	// Tests for the validations input
// 	it('Tests para las validaciones', () => {
// 		baseTests.testingForValidation(
// 			component,
// 			[
// 				{name: 'required', condition: 'true', successValues: ['asd'], failValues: ['']}
// 			]
// 		).forEach(testData => {
// 			expect(testData.result).toBe(testData.expectedResult, testData.message);
// 		});
// 	});

// 	////
// 	// Tests for the input properties
// 	it('Tests para las propiedades', () => {
// 		baseTests.testingForProperties(
// 			component,
// 			fixture,
// 			[
// 				{inputName: 'placeholder', value: 'argento pepe', selector: By.css('mat-select'), selectorProperty: 'nativeElement.textContent'},
// 				{inputName: 'extraClass', value: 'pepe', selector: By.css('mat-form-field'), selectorProperty: 'classes'},
// 				{inputName: 'extraClass', value: 'pepe pepe3', selector: By.css('mat-form-field'), selectorProperty: 'classes'},
// 				{
// 					inputName: 'items',
// 					value:	[{
// 						value: '23',
// 						label: 'marsopa'
// 					}, {
// 						value: '32',
// 						label: 'mariposa'
// 					}],
// 					selector: By.css('mat-form-field'),
// 					selectorProperty: 'classes'
// 				}
// 			]
// 		)
// 		.forEach(testData => {
// 			expect(testData.result).toBe(testData.expectedResult, testData.message);
// 		});
// 	});
// });
