import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputSectionComponent } from './user-input-section.component';

describe('UserInputSectionComponent', () => {
  let component: UserInputSectionComponent;
  let fixture: ComponentFixture<UserInputSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
