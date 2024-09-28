import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  form: FormGroup;
  totalPagar: number = 0;
  nombrePersona: string = '';
  cantidadCompradores: number = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombrePersona: ['', Validators.required],
      cantidadBoletos: [0, [Validators.required, Validators.min(1)]],
      cantidadCompradores: [1, [Validators.required, Validators.min(1)]],
      TarjetaCineco: [false],
    });

    /* validación del número máximo de boletos */
    this.form.get('cantidadCompradores')?.valueChanges.subscribe((cantidadCompradores) => {
      const maxBoletosPermitidos = cantidadCompradores * 7;
      this.form.get('cantidadBoletos')?.setValidators([Validators.required, Validators.min(1), Validators.max(maxBoletosPermitidos)]);
      this.form.get('cantidadBoletos')?.updateValueAndValidity();
    });
  }


  calcularTotalBoletos(): void {
    if (this.form.valid) {
      const { nombrePersona, cantidadBoletos, cantidadCompradores, TarjetaCineco } = this.form.value;
      this.nombrePersona = nombrePersona;
      this.cantidadCompradores = cantidadCompradores;

      const precioBoleto = 12;
      let total = precioBoleto * cantidadBoletos;
      let descuento = 0;

      /* Descuento según la cantidad de boletos */
      if (cantidadBoletos > 5) {
        descuento = 0.15;
      } else if (cantidadBoletos >= 3) {
        descuento = 0.10;
      }

      total -= total * descuento;

      
      if (TarjetaCineco) {
        total -= total * 0.10;
      }

      this.totalPagar = total;
    }
  }
}
