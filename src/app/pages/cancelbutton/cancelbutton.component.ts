import { Component ,Output,EventEmitter  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommomformComponent } from '../commomform/commomform.component';
@Component({
  selector: 'app-cancelbutton',
  templateUrl: './cancelbutton.component.html',
  styleUrl: './cancelbutton.component.css'
})
export class CancelbuttonComponent {
  @Output() cencelEvent = new EventEmitter<Event>();
  constructor( public dialogRef:MatDialogRef<CommomformComponent>){}
  closeFuc(){
    // this.dialogRef.close()
    this.cencelEvent.emit();
  }
}
