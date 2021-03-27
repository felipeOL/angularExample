import { Injectable } from '@angular/core';
import { Persona } from '../../assets/model/persona-model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  people:Persona[] = [];

  constructor() { }

  getPeople(){
    return this.people;
  }

  editPerson(person:Persona){
    // por hacer..
  }

  addPerson(person:Persona){
    this.people.push(person);
  }

  deletePerson(person:Persona){
    return this.people = this.people.filter( objeto => objeto.id != person.id);
  }

  getNumberOfPeople(){
    return this.people.length;
  }

}
