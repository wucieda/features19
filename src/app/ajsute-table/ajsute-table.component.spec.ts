import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AjsuteTableComponent } from './ajsute-table.component';

describe('AjsuteTableComponent', () => {
  let component: AjsuteTableComponent;
  let fixture: ComponentFixture<AjsuteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AjsuteTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AjsuteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new line', () => {
    component.addLine();
    expect(component.employeeData.length).toBe(1);
    expect(component.employeeData[0].attribute).toBe('talla');
    expect(component.employeeData[0].value).toBe(0);
    expect(component.employeeData[0].isEditing).toBeFalse();
  });

  it('should remove a line', () => {
    component.addLine(); // Añadir una línea
    component.removeLine(0); // Eliminar la línea añadida
    expect(component.employeeData.length).toBe(0);
  });

  it('should enable edit mode', () => {
    component.addLine(); // Añadir una línea
    component.enableEdit(0); // Habilitar edición
    expect(component.employeeData[0].isEditing).toBeTrue();
  });

  it('should disable edit mode and update value', () => {
    component.addLine(); // Añadir una línea
    component.enableEdit(0); // Habilitar edición

    // Simular la edición de la celda
    const mockEvent = { target: { innerText: '100' } } as unknown as Event;
    component.disableEdit(0, mockEvent);

    expect(component.employeeData[0].isEditing).toBeFalse();
    expect(component.employeeData[0].value).toBe(100);
  });

  it('should get available attributes', () => {
    component.addLine(); // Añadir una línea con "talla"
    const availableAttributes = component.getAvailableAttributes(0);
    expect(availableAttributes).toEqual(['peso']);
  });

  it('should disable attribute if already used', () => {
    component.addLine(); // Añadir una línea con "talla"
    const isDisabled = component.isAttributeDisabled('talla', 0);
    expect(isDisabled).toBeFalse(); // No debería estar deshabilitado para la misma fila

    component.addLine(); // Añadir otra línea
    const isDisabledForNewLine = component.isAttributeDisabled('talla', 1);
    expect(isDisabledForNewLine).toBeTrue(); // Debería estar deshabilitado para la nueva fila
  });

  it('should disable add button when both attributes are used', () => {
    component.addLine(); // Añadir una línea con "talla"
    component.addLine(); // Añadir una línea con "peso"
    const isDisabled = component.isAddButtonDisabled();
    expect(isDisabled).toBeTrue();
  });

  it('should update JSON when data changes', () => {
    component.addLine(); // Añadir una línea con "talla"
    component.employeeData[0].value = 50; // Actualizar el valor
    component.updateJson();

    expect(component.employeeDataJson).toEqual({ talla: 50 });
  });
});