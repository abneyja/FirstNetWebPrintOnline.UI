import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrintRequestComponent } from './add-print-request.component';

describe('AddPrintRequestComponent', () => {
  let component: AddPrintRequestComponent;
  let fixture: ComponentFixture<AddPrintRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrintRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPrintRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
