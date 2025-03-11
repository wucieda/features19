import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturaTableComponent } from './cobertura-table.component';

describe('CoberturaTableComponent', () => {
  let component: CoberturaTableComponent;
  let fixture: ComponentFixture<CoberturaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoberturaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoberturaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
