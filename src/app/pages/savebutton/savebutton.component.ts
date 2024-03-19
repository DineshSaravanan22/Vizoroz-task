import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommomformComponent } from '../commomform/commomform.component';
@Component({
  selector: 'app-savebutton',
  templateUrl: './savebutton.component.html',
  styleUrl: './savebutton.component.css'
})
export class SavebuttonComponent {
  constructor(private dialog:MatDialogRef<CommomformComponent>){}

  @Output() saveEvent = new EventEmitter<any>()
  saveForm(){
         this.saveEvent.emit();
  }
}
