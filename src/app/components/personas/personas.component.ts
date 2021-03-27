import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/assets/model/persona-model';
import { PersonasService } from '../../service/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  person:Persona;
  form: FormGroup;
  id:number = 0;

  constructor(private personaService:PersonasService) {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  add(){
    this.person = new Persona();
    this.person.id = this.id;
    this.person.nombre = this.form.get('name').value;
    this.person.apellido = this.form.get('lastname').value;
    this.personaService.addPerson(this.person);
    this.id+=1;
  }

}
