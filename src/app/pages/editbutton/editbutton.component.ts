import { Component,Input,Output,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { CommomformComponent } from '../commomform/commomform.component';

@Component({
  selector: 'app-editbutton',
  templateUrl: './editbutton.component.html',
  styleUrl: './editbutton.component.css'
})
export class EditbuttonComponent {
  constructor(private dialog:MatDialog){}
 @Input() listId:any ; 
 @Input() mode:any;
 

 @Output() editFormEvent = new EventEmitter<any>()
  editForm(id:any){
  console.log(id);
  var editFormPoup =this.dialog.open(CommomformComponent,{
    data:{id:id,mode:"edit"}
  });
  this.editFormEvent.emit(editFormPoup);

  }
}
