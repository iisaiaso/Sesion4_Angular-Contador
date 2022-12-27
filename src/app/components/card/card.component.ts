import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  number = 0
  incrementar() {
    this.number += 1
  }
  decremento() {
    if (this.number == 0) alert("Debe Incrementar los numeros")
    else this.number -= 1
  }
}
