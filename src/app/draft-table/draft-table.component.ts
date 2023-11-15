import { Component ,Input,OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-draft-table',
  templateUrl: './draft-table.component.html',
  styleUrls: ['./draft-table.component.css']
})
export class DraftTableComponent implements OnInit {
    posts:any[] =[];

    constructor(private http : HttpClient){}

    ngOnInit(){
      this.http.get<any[]>('http://localhost:3000/posts').subscribe(posts =>{
        this.posts =posts;
        console.log(posts);
      })
    }
    
 
}
