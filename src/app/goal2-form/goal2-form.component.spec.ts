import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal2FormComponent } from './goal2-form.component';

describe('Goal2FormComponent', () => {
  let component: Goal2FormComponent;
  let fixture: ComponentFixture<Goal2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal2FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Goal2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
