import { Component,Inject } from '@angular/core';
import { FormGroup,FormControl, FormControlName,Validators,FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MainService } from '../../service/main.service';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(private dialogRef:MatDialogRef<AppComponent> ,private mainService:MainService ,private router:Router, @Inject(MAT_DIALOG_DATA) public data: any ,private toaster:ToastrService){
    this.getdata(data.id);
  }
  getdata(id:any){
    this.mainService.getSingleUserData(id).subscribe((res)=>{
      this.editForm.patchValue({
        yard: res.yard,
        linerName: res.linerName,
        referenceNumber: res.referenceNumber,
        type: res.type,
        bookingDate: res.bookingDate,
        bookingValidity: res.bookingValidity,
        releseTo: res.releseTo,
        vesselCarrier: res.vesselCarrier,
        vesselName: res.vesselName,
        voyageNumber: res.voyageNumber,
        arrivalDate: res.arrivalDate,
        departureDate: res.departureDate,
        loadingPort: res.loadingPort,
        dischargePort: res.dischargePort,
        distination: res.distination,
        status: res.status,
        octContract: res.octContract,
        blNumber: res.blNumber,
        remarks: res.remarks

      });
    })
  }
  editForm = new FormGroup({
    'yard':new FormControl('',Validators.required),
    'linerName':new FormControl(null,Validators.required),
    'referenceNumber':new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]{4}\\d{6}$')]),
    'type':new FormControl(null),
    'bookingDate':new FormControl(null),
    'bookingValidity':new FormControl(null),
    'releseTo':new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
    'vesselCarrier':new FormControl(null),
    'vesselName':new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
    'voyageNumber':new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$')]),
    'arrivalDate':new FormControl(''),
    'departureDate':new FormControl(null),
    'loadingPort':new FormControl(''),
    'dischargePort':new FormControl(''),
    'distination':new FormControl(''),
    'status':new FormControl(''),
    'octContract':new FormControl(''),
    'blNumber':new FormControl('',[Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
    'remarks':new FormControl('',Validators.required),
  });
  editFormfun(){
   this.mainService.editValue(this.data.id,this.editForm.value).subscribe((result)=>{
    this.dialogRef.close(result)
    this.toaster.success("Edited Successfully")
  })
  }
  closeFuc(){
    this.dialogRef.close()
    }

}
