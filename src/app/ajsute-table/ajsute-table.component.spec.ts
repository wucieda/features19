import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjsuteTableComponent } from './ajsute-table.component';

describe('AjsuteTableComponent', () => {
  let component: AjsuteTableComponent;
  let fixture: ComponentFixture<AjsuteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjsuteTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjsuteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
