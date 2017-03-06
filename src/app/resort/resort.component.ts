import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.css']
})
export class ResortComponent implements OnInit {
  public resorts: Resort[];

  @Input()
  public countryFilter:string;

  @Output()
  public clickResort: EventEmitter<Resort> = new EventEmitter<Resort>();

  constructor() { 
    this.resorts=[
      {
        name:"Dostoevsky",
        photo:"assets/images/dostoevsky.jpg",
        mainPhoto: "assets/images/dostoevsky_main.jpg",
        phone: "+7 (812) 331-32-00",
        description: "Отель Достоевский**** расположен в уникальной историко – архитектурной зоне Санкт – Петербурга.",
        country:"ru",
        temperature:-8,
        water:0,
        followers: 543,
        following: 952
      },
       {
        name:"Helka",
        photo:"assets/images/helka.jpg",
        mainPhoto: "assets/images/helka_main.jpg",
        phone: "+9 (762) 868-09-09",
        description: "Pohjoinen Rautatiekatu 23, Южный округ, 00100 Хельсинки",
        country:"fi",
        temperature:-3,
        water:0,
        followers: 1047,
        following: 305
      },
       {
        name:"Marriott",
        photo:"assets/images/marriott.jpg",
        mainPhoto: "assets/images/marriott_main.jpg",
        phone: "+7-862-2455350",
        description: "Отель в Красной Поляне",
        country:"ru",
        temperature:+10,
        water:+10,
        followers: 234,
        following: 127
      }
    ]
  }

  ngOnInit() {
    this.selectResort(0);
  }

  public selectResort(index:number){
    let resort = this.resorts[index];
    this.clickResort.next(resort);
  }

}
