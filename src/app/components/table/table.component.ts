import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../service/personas.service';
import { Persona } from '../../../assets/model/persona-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  people:Persona[] = [];
  isEdit:boolean = false;

  constructor(private personService:PersonasService) { }

  ngOnInit(): void {
    this.listPeople();
  }

  listPeople(){
    this.people = this.personService.getPeople();
  }

  delete(person:Persona){
    this.people = this.personService.deletePerson(person);
  }

  edit(person:Persona){

  }
}
