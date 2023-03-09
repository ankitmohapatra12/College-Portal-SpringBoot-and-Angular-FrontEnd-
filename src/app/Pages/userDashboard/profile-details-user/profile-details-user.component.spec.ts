import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsUserComponent } from './profile-details-user.component';

describe('ProfileDetailsUserComponent', () => {
  let component: ProfileDetailsUserComponent;
  let fixture: ComponentFixture<ProfileDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
