import { Component,Input,Output,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-deletebutton',
  templateUrl: './deletebutton.component.html',
  styleUrl: './deletebutton.component.css'
})
export class DeletebuttonComponent {
 @Input() deleteId:any;
 @Output() confirmEvent = new EventEmitter<any>()
 constructor(private dialog:MatDialog){}
  openConform(listId:any){
  console.log(listId);
  var deleteFormPoup =  this.dialog.open(ConfirmationDialogComponent,{
    data:{id:listId}
  })
  this.confirmEvent.emit(deleteFormPoup)
   
  }
}
