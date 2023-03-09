import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledetailsadminComponent } from './profiledetailsadmin.component';

describe('ProfiledetailsadminComponent', () => {
  let component: ProfiledetailsadminComponent;
  let fixture: ComponentFixture<ProfiledetailsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiledetailsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiledetailsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
