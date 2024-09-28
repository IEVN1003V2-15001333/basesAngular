import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent implements OnInit {
  formulario: FormGroup;

  colors: string[] = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
  colorCodes: { [key: string]: string } = {
    'Negro': 'black',
    'Café': '#8B4513',
    'Rojo': 'red',
    'Naranja': 'orange',
    'Amarillo': 'yellow',
    'Verde': 'green',
    'Azul': 'blue',
    'Violeta': 'violet',
    'Gris': 'gray',
    'Blanco': 'white'
  };

  valor: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;
  resultado: boolean = false;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      banda1: new FormControl('', Validators.required),
      banda2: new FormControl('', Validators.required),
      banda3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required),
    });
  }

  calcular() {
    if (this.formulario.valid) {
      const { banda1, banda2, banda3, tolerancia } = this.formulario.value;
      const valorColor1 = this.colors.indexOf(banda1);
      const valorColor2 = this.colors.indexOf(banda2);
      const multiplicador = Math.pow(10, this.colors.indexOf(banda3));

      this.valor = (valorColor1 * 10 + valorColor2) * multiplicador;
      const toleranceFactor = tolerancia === 'oro' ? 0.05 : 0.10;

      this.valorMaximo = parseFloat((this.valor * (1 + toleranceFactor)).toFixed(2));
      this.valorMinimo = parseFloat((this.valor * (1 - toleranceFactor)).toFixed(2));

      this.resultado = true;
    }
  }

  constructor() {
  
    this.formulario = new FormGroup({
      banda1: new FormControl('', Validators.required),
      banda2: new FormControl('', Validators.required),
      banda3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required),
    });
  }

  getColorCode(color: string): string {
    return this.colorCodes[color] || 'transparent';
  }

  getToleranceColor(): string {
    const tolerancia = this.formulario.get('tolerancia')?.value;
    return tolerancia === 'oro' ? 'gold' : 'silver';
  }
}