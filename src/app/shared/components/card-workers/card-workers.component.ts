import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-card-workers',
  templateUrl: './card-workers.component.html',
  styleUrls: ['./card-workers.component.css']
})
export class CardWorkersComponent {

  @Input() workers: User;

  constructor() {
    this.workers = {
      id: '',
      name: 'Soraya',
      surname: 'Ramos',
      dni: '',
      phone: '',
      email: '',
      password: '',
      role: 'Administrador',
      active: false,
      job: '',
      city: '',
      image: 'https://media.istockphoto.com/id/1331101143/photo/smiling-confident-mature-businessman-looking-at-camera-standing-in-office.jpg?s=612x612&w=0&k=20&c=M6Xv9Zt1RYkKkf0XVuIKpNvhnHgXPX_WWCemPdChfTE='
    }
  }
}
