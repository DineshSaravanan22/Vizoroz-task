import { Component,Output,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { CommomformComponent } from '../commomform/commomform.component';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrl: './addbutton.component.css'
})
export class AddbuttonComponent {
  @Output() firstEvent =   new EventEmitter<any>();
  constructor(private dialog:MatDialog){

  }

  addForm(){
    const dialogRef = this.dialog.open(CommomformComponent,{
      data:{}
    });
     this.firstEvent.emit(dialogRef);
    
  }
  // addForm() {
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.firstEvent.emit(result); // Emit the result when the dialog is closed
  //   });
  // }
}
