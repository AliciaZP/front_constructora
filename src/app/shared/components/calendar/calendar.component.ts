import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  currentDate: Date = new Date();
  currentMonth: Date = new Date();
  daysOfWeek: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  monthsofYears: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  weeksInMonth: Date[][] = [];

  ngOnInit() {
    this.currentDate = new Date();
    this.currentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    this.generateWeeks();
  }

  generateWeeks() {
    const weeks: Date[][] = [];
    const startDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);

    startDate.setDate(startDate.getDate() - startDate.getDay());

    const endDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    let currentDay = startDate;

    while (currentDay <= endDate) {
      const week: Date[] = [];

      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDay));
        currentDay.setDate(currentDay.getDate() + 1);
      }

      weeks.push(week);
    }

    this.weeksInMonth = weeks;
  }

  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.generateWeeks();
  }
  previousMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.generateWeeks();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  hasEvent(date: Date): boolean {
    // Implementa tu lógica para verificar si hay eventos en el día dado
    // Por ejemplo, puedes tener un arreglo de eventos y verificar si la fecha está en ese arreglo
    return false;
  }


}