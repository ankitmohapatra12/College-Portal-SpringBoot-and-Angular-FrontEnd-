import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPersonalDataeditComponent } from './account-personal-dataedit.component';

describe('AccountPersonalDataeditComponent', () => {
  let component: AccountPersonalDataeditComponent;
  let fixture: ComponentFixture<AccountPersonalDataeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPersonalDataeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountPersonalDataeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
