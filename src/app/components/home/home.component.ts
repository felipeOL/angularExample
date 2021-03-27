import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../service/personas.service';
import { Persona } from '../../../assets/model/persona-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberOfPeople:number = 0;

  constructor(private personService:PersonasService) { }

  ngOnInit(): void {
    this.numberOfPeople = this.personService.getNumberOfPeople();
  }

}
