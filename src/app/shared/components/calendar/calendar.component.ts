import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  // Propiedades del componente
  currentDate: Date = new Date(); // Fecha actual
  currentMonth: Date = new Date(); // Mes actual
  daysOfWeek: string[] = ['D', 'L', 'M', 'M', 'J', 'V', 'S']; // Días de la semana
  weeksInMonth: Date[][] = []; // Semanas del mes
  monthsOfYear: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']; // Meses del año
  currentMonthString: string = this.monthsOfYear[this.currentMonth.getMonth()]; // Numero del mes actual

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.currentDate = new Date();
    this.currentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    this.generateWeeks(); // Genera las semanas del mes actual
  }

  // Método para generar las semanas del mes
  generateWeeks() {
    const weeks: Date[][] = [];
    const startDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);

    // Ajusta la fecha de inicio para incluir días de la semana anteriores al primer día del mes
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const endDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    let currentDay = startDate;

    // Itera sobre las semanas del mes
    while (currentDay <= endDate) {
      const week: Date[] = [];

      // Itera sobre los días de la semana
      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDay));
        currentDay.setDate(currentDay.getDate() + 1);
      }

      weeks.push(week);
    }

    this.weeksInMonth = weeks; // Asigna las semanas al arreglo del componente
  }

  // Método para ir al siguiente mes
  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.currentMonthString = this.monthsOfYear[this.currentMonth.getMonth()]

    this.generateWeeks(); // Genera las semanas del nuevo mes
  }

  // Método para ir al mes anterior
  previousMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.currentMonthString = this.monthsOfYear[this.currentMonth.getMonth()]
    this.generateWeeks(); // Genera las semanas del nuevo mes
  }

  // Método para verificar si una fecha es hoy
  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  // Método para verificar si hay eventos en una fecha (aún no implementado)
  hasEvent(date: Date): boolean {
    // Implementa tu lógica para verificar si hay eventos en el día dado
    // Por ejemplo, puedes tener un arreglo de eventos y verificar si la fecha está en ese arreglo
    return false;
  }
}
