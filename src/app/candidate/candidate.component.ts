import { Component } from '@angular/core';
import { UserMockService } from '../services/user-mock.service';
import { User } from '../models/user';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent {

  public candidates:User[] | undefined;

  constructor(private userService:UserMockService){
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe({
      next:(d)=>this.candidates=d,
      error:(er)=>console.log(er)
    })
  }




}
