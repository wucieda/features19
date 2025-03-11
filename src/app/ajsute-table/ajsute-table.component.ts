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

  // Habilitar la edición de una línea
  enableEdit(index: number): void {
    this.employeeData[index].isEditing = true;
  }

  // Deshabilitar la edición de una línea
  disableEdit(index: number): void {
    this.employeeData[index].isEditing = false;
    this.updateJson(); // Actualizar el JSON al editar un valor
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

  // Actualizar el objeto JSON
  updateJson(): void {
    this.employeeDataJson = {}; // Reiniciar el objeto JSON
    this.employeeData.forEach((item) => {
      this.employeeDataJson[item.attribute] = item.value;
    });
    console.log('Datos guardados en JSON:', this.employeeDataJson); // Mostrar el JSON en consola
  }
}
