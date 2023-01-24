import { Component, OnInit } from '@angular/core';
import { User } from '../Entity/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList:User[]=[
  {id:1,username:'flen',email:'flen@gmail.com',password:'test',state:true},
  {id:2,username:'foulen',email:'foulen@gmail.com',password:'foulen',state:false},
  {id:3,username:'jhon',email:'jhon@gmail.com',password:'jhon',state:true}]
  buttonTitle:string="Activer"
  constructor() { }

  ngOnInit(): void {
  }
  updateState(id:number) {
    this.userList.map(u=> u.id == id && (u.state = !u.state ))
  }
  getButtonMessage(user:User):string{
    if(user.state == true) {return "Désactiver" } else return "Activer"
  }
}
