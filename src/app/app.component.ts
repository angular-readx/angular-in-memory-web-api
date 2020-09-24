import { Component, OnInit } from '@angular/core';
import { DataService } from './data/data.service';
import { UserData } from './data/user.data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'In memory';
  users: UserData[]=[];

  constructor(private dataservice: DataService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users=data;
    });
  }

 
  ngOnInit(){
    this.getUsers();
  }
}
