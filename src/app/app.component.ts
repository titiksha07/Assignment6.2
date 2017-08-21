import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){

  }
  title: string;
  firstName: string;
  lastName: string;
  ngOnInit(){

 this.firstName = 'Titiksha';
 this.lastName = 'Banerjee';
  }
    login()
    {
     this.title= this.firstName;
      
    }
  

}
