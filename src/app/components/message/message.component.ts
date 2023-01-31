import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(public dialogRef : MatDialogRef<MessageComponent>){}

  close(){
    this.dialogRef.close();
  }

}
