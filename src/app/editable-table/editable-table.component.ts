import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Definimos un enum para las acciones
export enum Action {
  NONE = 'NONE',
  UPDATE_INSERT = 'UPDATE_INSERT',
  DELETE = 'DELETE'
}

// Definimos la interfaz MantenanceRow
export interface MantenanceRow {
  rowId: string;
  action: Action;
  values: any[]; // Usamos any[] para representar un array de objetos de cualquier tipo
}

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class EditableTableComponent implements OnInit {

  Action = Action;
  datasets: MantenanceRow[][] = [
    // Dataset 1: 2 columnas
    [
      { rowId: '1', action: Action.NONE, values: ["Alice", 25] },
      { rowId: '2', action: Action.NONE, values: ["Bob", 30] }
    ],

    // Dataset 2: 3 columnas
    [
      { rowId: '1', action: Action.NONE, values: ["Laptop", 1200, 10] },
      { rowId: '2', action: Action.NONE, values: ["Mouse", 25, 50] }
    ],

    // Dataset 3: 4 columnas
    [
      { rowId: '1', action: Action.NONE, values: ["USA", "Washington", 331, "North America"] },
      { rowId: '2', action: Action.NONE, values: ["France", "Paris", 67, "Europe"] }
    ],

    // Dataset 4: 5 columnas
    [
      { rowId: '1', action: Action.NONE, values: ["John Doe", "IT", "Developer", 5000, 3] },
      { rowId: '2', action: Action.NONE, values: ["Jane Smith", "HR", "Manager", 6000, 5] }
    ],

    // Dataset 5: 7 columnas
    [
      { rowId: '1', action: Action.NONE, values: ["Tesla Model S", 2022, 79999, "390 miles", "100 kWh", 5] },
      { rowId: '2', action: Action.NONE, values: ["Ford Mustang", 2021, 55000, "300 miles", "80 kWh", 4] },
      { rowId: '3', action: Action.NONE, values: ["Chevrolet Bolt", 2023, 60000, "250 miles", "60 kWh", 5] },
      { rowId: '4', action: Action.NONE, values: ["Nissan Leaf", 2020, 50000, "350 miles", "70 kWh", 5] },
      { rowId: '5', action: Action.NONE, values: ["Audi e-tron", 2022, 75000, "400 miles", "90 kWh", 6] },
      { rowId: '6', action: Action.NONE, values: ["Tesla Model 3", 2021, 45000, "260 miles", "50 kWh", 5] },
      { rowId: '7', action: Action.NONE, values: ["Ford F-150 Lightning", 2023, 70000, "320 miles", "110 kWh", 5] },
      { rowId: '8', action: Action.NONE, values: ["Hyundai Kona Electric", 2022, 48000, "258 miles", "64 kWh", 5] },
      { rowId: '9', action: Action.NONE, values: ["Kia Niro EV", 2021, 47000, "239 miles", "64 kWh", 5] },
      { rowId: '10', action: Action.NONE, values: ["Volkswagen ID.4", 2023, 55000, "275 miles", "82 kWh", 5] },
      { rowId: '11', action: Action.NONE, values: ["Rivian R1T", 2022, 73000, "314 miles", "105 kWh", 5] },
      { rowId: '12', action: Action.NONE, values: ["Lucid Air", 2023, 80000, "406 miles", "112 kWh", 5] },
      { rowId: '13', action: Action.NONE, values: ["Porsche Taycan", 2022, 85000, "227 miles", "93 kWh", 4] },
      { rowId: '14', action: Action.NONE, values: ["BMW i4", 2023, 56000, "300 miles", "83 kWh", 5] },
      { rowId: '15', action: Action.NONE, values: ["Mercedes-Benz EQS", 2022, 105000, "350 miles", "108 kWh", 5] },
      { rowId: '16', action: Action.NONE, values: ["Tesla Model X", 2021, 90000, "360 miles", "100 kWh", 7] },
      { rowId: '17', action: Action.NONE, values: ["Tesla Model Y", 2023, 60000, "330 miles", "75 kWh", 5] },
      { rowId: '18', action: Action.NONE, values: ["Polestar 2", 2022, 50000, "270 miles", "78 kWh", 5] },
      { rowId: '19', action: Action.NONE, values: ["Ford Escape Hybrid", 2021, 35000, "200 miles", "50 kWh", 5] },
      { rowId: '20', action: Action.NONE, values: ["Toyota RAV4 Prime", 2023, 45000, "302 miles", "60 kWh", 5] },
      { rowId: '21', action: Action.NONE, values: ["Chevrolet Equinox EV", 2022, 40000, "250 miles", "65 kWh", 5] },
      { rowId: '22', action: Action.NONE, values: ["GMC Hummer EV", 2023, 110000, "350 miles", "120 kWh", 5] },
      { rowId: '23', action: Action.NONE, values: ["Cadillac Lyriq", 2022, 62000, "300 miles", "100 kWh", 5] },
      { rowId: '24', action: Action.NONE, values: ["Volvo XC40 Recharge", 2021, 55000, "208 miles", "78 kWh", 5] },
      { rowId: '25', action: Action.NONE, values: ["Jaguar I-PACE", 2023, 70000, "234 miles", "90 kWh", 5] },
      { rowId: '26', action: Action.NONE, values: ["Mini Cooper SE", 2022, 35000, "110 miles", "32 kWh", 4] },
      { rowId: '27', action: Action.NONE, values: ["Mazda MX-30", 2021, 34000, "100 miles", "35 kWh", 4] },
      { rowId: '28', action: Action.NONE, values: ["Fiat 500e", 2023, 33000, "150 miles", "42 kWh", 4] },
      { rowId: '29', action: Action.NONE, values: ["Hyundai Ioniq 5", 2022, 48000, "303 miles", "77 kWh", 5] },
      { rowId: '30', action: Action.NONE, values: ["Kia EV6", 2023, 50000, "310 miles", "77 kWh", 5] },
      { rowId: '31', action: Action.NONE, values: ["Genesis GV60", 2022, 60000, "248 miles", "77 kWh", 5] },
      { rowId: '32', action: Action.NONE, values: ["Rivian R1S", 2023, 78000, "316 miles", "105 kWh", 7] },
      { rowId: '33', action: Action.NONE, values: ["Tesla Cybertruck", 2024, 70000, "500 miles", "150 kWh", 6] },
      { rowId: '34', action: Action.NONE, values: ["Ford Bronco EV", 2023, 55000, "300 miles", "90 kWh", 5] },
      { rowId: '35', action: Action.NONE, values: ["Chevrolet Silverado EV", 2024, 75000, "400 miles", "120 kWh", 5] },
      { rowId: '36', action: Action.NONE, values: ["GMC Sierra EV", 2023, 80000, "400 miles", "120 kWh", 5] },
      { rowId: '37', action: Action.NONE, values: ["Toyota bZ4X", 2022, 45000, "250 miles", "71 kWh", 5] },
      { rowId: '38', action: Action.NONE, values: ["Subaru Solterra", 2023, 47000, "220 miles", "71 kWh", 5] },
      { rowId: '39', action: Action.NONE, values: ["VinFast VF8", 2023, 50000, "260 miles", "87 kWh", 5] },
      { rowId: '40', action: Action.NONE, values: ["VinFast VF9", 2024, 70000, "300 miles", "106 kWh", 7] },
      { rowId: '41', action: Action.NONE, values: ["Fisker Ocean", 2023, 40000, "250 miles", "75 kWh", 5] },
      { rowId: '42', action: Action.NONE, values: ["Canoo Pickup", 2024, 50000, "200 miles", "80 kWh", 4] },
      { rowId: '43', action: Action.NONE, values: ["Lordstown Endurance", 2023, 55000, "250 miles", "100 kWh", 5] },
      { rowId: '44', action: Action.NONE, values: ["Bollinger B2", 2024, 125000, "200 miles", "120 kWh", 4] },
      { rowId: '45', action: Action.NONE, values: ["Nikola Badger", 2023, 90000, "300 miles", "125 kWh", 5] },
      { rowId: '46', action: Action.NONE, values: ["Hummer EV SUV", 2024, 110000, "350 miles", "120 kWh", 5] },
      { rowId: '47', action: Action.NONE, values: ["Aston Martin Rapide E", 2023, 250000, "200 miles", "100 kWh", 4] },
      { rowId: '48', action: Action.NONE, values: ["Lotus Evija", 2024, 2000000, "250 miles", "200 kWh", 2] },
      { rowId: '49', action: Action.NONE, values: ["Pininfarina Battista", 2023, 2200000, "300 miles", "120 kWh", 2] },
      { rowId: '50', action: Action.NONE, values: ["Rimac Nevera", 2024, 2400000, "340 miles", "120 kWh", 2] }
    ]
  ];

  data: MantenanceRow[] = [];
  columns: string[] = [];
  notification: string | null = null;
  notificationType: string = '';
  selectedDatasetIndex: number = 0; // Para rastrear el dataset seleccionado
  sortColumn: string | null = null; // Columna actualmente ordenada
  sortDirection: 'asc' | 'desc' = 'asc'; // Dirección del ordenamiento
  filterText: string = ''; // Texto de filtrado

  ngOnInit() {
    this.loadDataset(this.selectedDatasetIndex);
  }

  loadDataset(index: number) {
    this.selectedDatasetIndex = index;
    this.data = JSON.parse(JSON.stringify(this.datasets[index])).map((row: MantenanceRow) => ({
      ...row,
      action: row.action
    }));

    this.columns = this.data[0]?.values.map((_, index) => `Column ${index + 1}`) || [];
  }

  addRow() {
    const newRow: MantenanceRow = { rowId: Date.now().toString(), action: Action.NONE, values: Array(this.columns.length).fill('') };
    this.data.push(newRow);
  }

  markModified(row: MantenanceRow) {
    if (row.action !== Action.NONE) {
      row.action = Action.UPDATE_INSERT;
    }
  }

  markForDeletion(row: MantenanceRow) {
    row.action = Action.DELETE;
  }

  saveChanges() {
    const toCreate = this.data.filter(row => row.action === Action.NONE);
    const toModify = this.data.filter(row => row.action === Action.UPDATE_INSERT);
    const toDelete = this.data.filter(row => row.action === Action.DELETE);

    console.log('Creating:', toCreate);
    console.log('Modifying:', toModify);
    console.log('Deleting:', toDelete);

    this.data = this.data.filter(row => row.action !== Action.DELETE).map(row => ({ ...row, action: Action.NONE }));
    this.showNotification("Changes saved successfully!", 'success');
  }

  resetChanges() {
    this.loadDataset(this.selectedDatasetIndex);
    this.showNotification("Changes have been reset.", 'info');
  }

  showNotification(message: string, type: 'success' | 'error' | 'info') {
    this.notification = message;
    this.notificationType = type;
    setTimeout(() => {
      this.notification = null;
      this.notificationType = '';
    }, 3000);
  }

  // Ordenamiento por columna
  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.data.sort((a, b) => {
      const index = this.columns.indexOf(column);
      const valueA = a.values[index];
      const valueB = b.values[index];

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Filtrado por columna
  applyFilter() {
    this.data = JSON.parse(JSON.stringify(this.datasets[this.selectedDatasetIndex])).map((row: MantenanceRow) => ({
      ...row,
      action: row.action
    }));

    if (this.filterText) {
      this.data = this.data.filter(row =>
        row.values.some(value =>
          value.toString().toLowerCase().includes(this.filterText.toLowerCase())
        )
      );
    }
  }
}