import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedDriveComponent } from './applied-drive.component';

describe('AppliedDriveComponent', () => {
  let component: AppliedDriveComponent;
  let fixture: ComponentFixture<AppliedDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppliedDriveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppliedDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
