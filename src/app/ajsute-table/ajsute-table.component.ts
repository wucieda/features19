import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Definir la interfaz EmployeeLine
interface EmployeeLine {
  attribute: string;
  value: number;
  isEditing: boolean;
}


@Component({
  selector: 'app-ajsute-table',
  imports: [FormsModule, CommonModule],
  templateUrl: './ajsute-table.component.html',
  styleUrl: './ajsute-table.component.scss'
})
export class AjsuteTableComponent {
  employeeData: EmployeeLine[] = []; // Datos de la tabla
  employeeDataJson: { [key: string]: number } = {}; // Objeto JSON para guardar los datos

  attributes = ['talla', 'peso'];

  // Añadir una nueva línea
  addLine(): void {
    const availableAttributes = this.getAvailableAttributes(this.employeeData.length);
    const newAttribute = availableAttributes[0] || 'talla'; // Por defecto, "talla"
    this.employeeData.push({ attribute: newAttribute, value: 0, isEditing: false });
    this.updateJson(); // Actualizar el JSON al añadir una nueva línea
  }

  // Eliminar una línea
  removeLine(index: number): void {
    this.employeeData.splice(index, 1);
    this.updateJson(); // Actualizar el JSON al eliminar una línea
  }

  enableEdit(index: number): void {
    this.employeeData[index].isEditing = true;
  }
  
  disableEdit(index: number, event: Event): void {
    const newValue = (event.target as HTMLElement).innerText.trim();
    this.employeeData[index].value = +newValue; // Convertir a número
    this.employeeData[index].isEditing = false;
    this.updateJson(); // Actualizar el JSON
  }

  // Obtener los atributos disponibles
  getAvailableAttributes(index: number): string[] {
    const usedAttributes = this.employeeData
      .filter((item, i) => i !== index)
      .map((item) => item.attribute);
    return this.attributes.filter((attr) => !usedAttributes.includes(attr));
  }

  // Verificar si un atributo debe estar deshabilitado
  isAttributeDisabled(attribute: string, index: number): boolean {
    const usedAttributes = this.employeeData
      .filter((item, i) => i !== index)
      .map((item) => item.attribute);
    return usedAttributes.includes(attribute);
  }

  isAddButtonDisabled(): boolean {
    const existingAttributes = this.employeeData.map((item) => item.attribute);
    return existingAttributes.includes('talla') && existingAttributes.includes('peso');
  }

  // Actualizar el objeto JSON
  updateJson(): void {
    this.employeeDataJson = {}; // Reiniciar el objeto JSON
    this.employeeData.forEach((item) => {
      this.employeeDataJson[item.attribute] = item.value;
    });
    console.log('Datos guardados en JSON:', this.employeeDataJson); // Mostrar el JSON en consola
  }
}
