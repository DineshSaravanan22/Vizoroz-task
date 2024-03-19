import { Component, Inject ,Output,EventEmitter} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from '../../service/main.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../../app.component';
import { DeletebuttonComponent } from '../deletebutton/deletebutton.component';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {
  @Output() deleteEvent = new EventEmitter<Event>();
  constructor(public dialogRef:MatDialogRef<DeletebuttonComponent>, @Inject(MAT_DIALOG_DATA) public dialogData:any,private mainService:MainService, public router:Router ,private toaster:ToastrService ){}


//  Delete Function
deleteData(){
 const id:any = this.dialogData.id
    this.mainService.daleteValue(id).subscribe((res)=>{
      this.dialogRef.close(res);
      this.toaster.error("Your Record is deleted");
      this.router.navigate(['/home'])
    });
  }
  // cancelPop(){
  //   this.dialogRef.closeAll();
  // }
  closeFuc(){
    this.dialogRef.close()
    }

}
