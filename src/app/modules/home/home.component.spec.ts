/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                MatButtonModule,
                MatCheckboxModule,
                MatProgressBarModule,

                HomeComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize the form with courses', () => {
        expect(component.coursesFormArray.length).toBe(component.courses.length);
        expect(component.coursesFormArray.at(0).get('name')?.value).toBe('Matemática Aplicada à Computação');
        expect(component.coursesFormArray.at(0).get('completed')?.value).toBe(true);
    });

    it('should check all courses when checkAll is called', () => {
        component._initForm();
        component.uncheckAll(); // Uncheck all to start
        component.checkAll(); // Check all
        const allChecked = component.coursesFormArray.controls.every(control => control.get('completed')?.value === true);
        expect(allChecked).toBeTrue();
    });

    it('should uncheck all courses when uncheckAll is called', () => {
        component._initForm();
        component.checkAll(); // Check all to start
        component.uncheckAll(); // Uncheck all
        const allUnchecked = component.coursesFormArray.controls.every(control => control.get('completed')?.value === false);
        expect(allUnchecked).toBeTrue();
    });

    it('should clean up subscriptions on ngOnDestroy', () => {
        spyOn(component['_unsubscribeAll'], 'next').and.callThrough();
        spyOn(component['_unsubscribeAll'], 'complete').and.callThrough();
        
        component.ngOnDestroy();
        
        expect(component['_unsubscribeAll'].next).toHaveBeenCalled();
        expect(component['_unsubscribeAll'].complete).toHaveBeenCalled();
    });
});
