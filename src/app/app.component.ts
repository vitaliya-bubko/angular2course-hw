import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public select:Resort;

  @Output()
  public selectedCountry:string;

  constructor(){}

  selectResort($event){
    this.select=$event;
  }

  public selectCountry(val:string){
    this.selectedCountry = val;
    console.log(val);
  }
}
