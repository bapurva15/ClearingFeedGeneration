import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser? : User;
  Users? : User[];
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    //this.service.showTransactions().subscribe(response=>{this.transactions=response});
  }

}
