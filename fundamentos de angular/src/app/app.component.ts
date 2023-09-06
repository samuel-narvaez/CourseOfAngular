import { Component } from '@angular/core';
import { Product } from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  widthImg = 10;
  name = 'Samuel';
  age = 28;
  img = 'https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=200';
  btnDisabled = true;
  person = {
    name: 'samuel',
    age: 28,
    avatar: 'https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=100'
  }

  names: String[] = ['nico', 'juli', 'santi']
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/img/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/img/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/img/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/img/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/img/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/img/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = ''
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }

  onRegister() {
    console.log(this.register);
  }
}
