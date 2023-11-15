import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-type',
  templateUrl: './notice-type.component.html',
  styleUrls: ['./notice-type.component.css']
})
export class NoticeTypeComponent {
  selectedOption : string ='submitted'   ;


  
  onRadioChange(option :string){
    this.selectedOption=option;
    

  }
 
}
