import { Component } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
  countries: Country[] = [];

  addRow() {
    const newIndex = this.countries.length + 1;
    this.countries.push({ name: `New Country ${newIndex}`, flag: 'default_flag.png', area: 0, population: 0 });
  }
}
