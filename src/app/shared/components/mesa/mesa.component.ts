import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mesa',
  standalone: true,
  imports: [FormsModule, AngularMaterialModule,  MatFormFieldModule, MatDatepickerModule, MatSelectModule, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './mesa.component.html',
  styleUrl: './mesa.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy  .OnPush,
})
export class MesaComponent {
  mostrarResultado = false;
  resultadoFinal = "";
  formMesa = {
    dni: "",
    nombre: "",
    apellido: "",
    cantidadPersonas: "",
    mesaId: "",
    fechaReservacion: null as Date | null
  
  }
  mesaList: Mesa = []
 //select 
  asientos = ['una Persona', 'Dos Personas', 'Tres Personas', 'Mas de Cuatro'];
  mesaId = ['A01','A02','A03','B01','B02','B03','C01','C02','C03'];

  constructor(private renderer: Renderer2){}

  listarCliente(): void{
    
    this.resultadoFinal = `El cliente ${this.formMesa.nombre} reservó una mesa`;
    this.mesaList.push({idMesa: this.mesaList.length+1,
    dni: this.formMesa.dni,
    nombre: this.formMesa.nombre,
    apellido: this.formMesa.apellido,
    cantidadPersonas: this.formMesa.cantidadPersonas,
    mesaId: this.formMesa.mesaId,
    fechaReservacion: this.formMesa.fechaReservacion
  });
  

  
    //reiniciar casillas
    this.formMesa = {
      dni: "",
      nombre: "",
      apellido: "",
      cantidadPersonas: "",
      mesaId:"",
      fechaReservacion: null
    };

      // Mostrar mensaje de confirmación y ocultarlo después de 5 segundos
      this.mostrarResultado = true;
      setTimeout(() => {
        this.mostrarResultado = false;
      }, 5000);
      
  }
  isFormValid(): boolean {
    return this.formMesa.dni !== "" && this.formMesa.nombre !== "" && this.formMesa.apellido !== "" &&
           this.formMesa.cantidadPersonas !== "" && this.formMesa.mesaId !== "" && this.formMesa.fechaReservacion !== null;
  }
  
//rastrea elementos por id
trackById(index: number, item: { idMesa: number }): number {
  return item.idMesa;
}

// Función para formatear la fecha
formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

// Función para obtener la hora actual
getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

//calendario
dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  // Only highligh dates inside the month view.
  if (view === 'month') {
    const date = cellDate.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  }

  return '';
};

}
type Mesa = Array<{idMesa: number; dni: string; nombre: string; apellido: string; cantidadPersonas: string; mesaId: string; fechaReservacion: Date | null;}>

