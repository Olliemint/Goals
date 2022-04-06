import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal2detailComponent } from './goal2detail.component';

describe('Goal2detailComponent', () => {
  let component: Goal2detailComponent;
  let fixture: ComponentFixture<Goal2detailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal2detailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Goal2detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
