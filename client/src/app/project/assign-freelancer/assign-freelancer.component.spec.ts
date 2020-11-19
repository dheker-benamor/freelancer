import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFreelancerComponent } from './assign-freelancer.component';

describe('AssignFreelancerComponent', () => {
  let component: AssignFreelancerComponent;
  let fixture: ComponentFixture<AssignFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
