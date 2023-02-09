import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  nomUser:string='';
  emailUser:string='';
  typeCarte:string='';
  numCarte:string='';
  dateExp:Date = new Date();
  codeCarte:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
