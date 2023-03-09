import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogAcademicDetailsComponent } from './user-dialog-academic-details.component';

describe('UserDialogAcademicDetailsComponent', () => {
  let component: UserDialogAcademicDetailsComponent;
  let fixture: ComponentFixture<UserDialogAcademicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDialogAcademicDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDialogAcademicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
