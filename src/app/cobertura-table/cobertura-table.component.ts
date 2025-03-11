import { Component, Input } from '@angular/core';
import { Cobertura } from '../models/cobertura.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-cobertura-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './cobertura-table.component.html',
  styleUrl: './cobertura-table.component.scss'
})
export class CoberturaTableComponent {
  @Input() coberturas: Cobertura[] = [];

  filtroSubyacente: string = '';


  filtroId: number | null = null;


  inicializarCobertura(): Cobertura {
    return {
      id: 0,
      subyacente: '',
      nominalSub: 0,
      vencimiento: '',
      divisaSub: '',
      nominalPataPagada: 0,
      vencimientoCob: '',
      divisaPagada: '',
      porcentaje: '',
      tipo: ''
    };
  }


  get subyacentesUnicos(): string[] {
    return [...new Set(this.coberturas.map(c => c.subyacente))];
  }

  coberturasFiltradas(): Cobertura[] {
    return this.coberturas.filter(c =>
      (this.filtroSubyacente === '' || c.subyacente === this.filtroSubyacente) &&
      (this.filtroId === null || c.id === this.filtroId)
    );
  }

  calcularTotalNominalSub(): number {
    return this.coberturasFiltradas()
      .reduce((sum, c) => sum + c.nominalSub, 0);
  }

  calcularTotalNominalPataPagada(): number {
    return this.coberturasFiltradas()
      .reduce((sum, c) => sum + c.nominalPataPagada, 0);
  }


  //MODAL

  mostrarModal = false;


  nuevaCobertura: Cobertura = this.crearCoberturaVacia();

  abrirModal() {
    this.nuevaCobertura = this.crearCoberturaVacia();
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  crearCoberturaVacia(): Cobertura {
    return {
      id: 0,
      subyacente: '',
      nominalSub: 0,
      vencimiento: '',
      divisaSub: '',
      nominalPataPagada: 0,
      vencimientoCob: '',
      divisaPagada: '',
      porcentaje: '',
      tipo: ''
    };
  }

  agregarCobertura(form: NgForm) {
    if (form.valid) {
      this.coberturas.push({ ...this.nuevaCobertura });
      this.cerrarModal();
    }
  }

}
