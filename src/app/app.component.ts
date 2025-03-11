import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './models/employee.mode';
import { Cobertura } from './models/cobertura.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'features19';

  employees: Employee[] = [
    { id: 1, name: 'Juan Pérez', department: 'Ventas', salary: 2500, age: 30 },
    { id: 2, name: 'María López', department: 'IT', salary: 3500, age: 25 },
    { id: 3, name: 'Carlos Sánchez', department: 'Marketing', salary: 3000, age: 40 },
    { id: 4, name: 'Ana García', department: 'Recursos Humanos', salary: 2700, age: 35 },
    { id: 5, name: 'David Herrera', department: 'IT', salary: 3800, age: 28 },
    { id: 6, name: 'Patricia Gómez', department: 'Ventas', salary: 2600, age: 29 },
    { id: 7, name: 'Jorge Ramírez', department: 'Contabilidad', salary: 2900, age: 33 },
    { id: 8, name: 'Sandra Ortega', department: 'IT', salary: 4000, age: 26 },
    { id: 9, name: 'Fernando Díaz', department: 'Marketing', salary: 3100, age: 37 },
    { id: 10, name: 'Mónica Fernández', department: 'Ventas', salary: 2700, age: 31 },
    { id: 11, name: 'Raúl Castro', department: 'Contabilidad', salary: 3200, age: 39 },
    { id: 12, name: 'Lucía Mendoza', department: 'IT', salary: 4200, age: 27 },
    { id: 13, name: 'Tomás Suárez', department: 'Marketing', salary: 3300, age: 32 },
    { id: 14, name: 'Elena Vargas', department: 'Ventas', salary: 2800, age: 34 },
    { id: 15, name: 'Gabriel Rojas', department: 'IT', salary: 4100, age: 29 }
  ];

  coberturas: Cobertura[] = [
    { id: 85, subyacente: 'USU6118PAD97', nominalSub: 20000000, vencimiento: '25/01/2013', divisaSub: 'USD', nominalPataPagada: 20000000, vencimientoCob: '25/01/2013', divisaPagada: 'USD', porcentaje: '100.00%', tipo: 'FX CFH' },
    { id: 86, subyacente: 'XS0235593048', nominalSub: 50000000, vencimiento: '25/01/2016', divisaSub: 'EUR', nominalPataPagada: 50000000, vencimientoCob: '25/01/2016', divisaPagada: 'EUR', porcentaje: '100.00%', tipo: 'FX CFH' },
    { id: 87, subyacente: 'XS0287338015', nominalSub: 30000000, vencimiento: '21/02/2017', divisaSub: 'USD', nominalPataPagada: 30000000, vencimientoCob: '21/02/2017', divisaPagada: 'USD', porcentaje: '100.00%', tipo: 'FX INT' },
    { id: 88, subyacente: 'ES0313242001', nominalSub: 74000000, vencimiento: '30/06/2015', divisaSub: 'EUR', nominalPataPagada: 74000000, vencimientoCob: '30/06/2015', divisaPagada: 'EUR', porcentaje: '100.00%', tipo: 'CFH' },
    { id: 89, subyacente: 'XS0287338015', nominalSub: 30000000, vencimiento: '21/02/2017', divisaSub: 'USD', nominalPataPagada: 30000000, vencimientoCob: '21/02/2017', divisaPagada: 'USD', porcentaje: '100.00%', tipo: 'FX INT' },
  ];
}
