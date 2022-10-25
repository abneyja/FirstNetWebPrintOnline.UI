import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRequestListComponent } from './print-request-list.component';

describe('PrintRequestListComponent', () => {
  let component: PrintRequestListComponent;
  let fixture: ComponentFixture<PrintRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
