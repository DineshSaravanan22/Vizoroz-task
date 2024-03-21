import { Component,Inject,OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormGroup,FormControl, FormControlName,Validators,FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { MainService } from '../../service/main.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../../app.component'; 
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-commomform',
  templateUrl: './commomform.component.html',
  styleUrl: './commomform.component.css'
})
export class CommomformComponent {
   // Get current date
   date1= new Date();
   todayDate:any;
   CurrentYear = this.date1.getUTCFullYear();
   CurrentMonth = this.date1.getUTCMonth()+1;
   CurrentDay = this.date1.getUTCDate();
   FinalMonth:any;
   FinalDay:any;
   newData: any;
   originalData:any;

 constructor(public dialogRef:MatDialogRef<AppComponent> ,private mainService:MainService ,private router:Router, private toaster:ToastrService ,private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any , private snackbar:MatSnackBar){
    // this.userForm.patchValue(this.data)
   if(this.CurrentMonth<10){

     this.FinalMonth ="0" +this.CurrentMonth;
    }else{
    this.FinalMonth = this.CurrentMonth;
    }
    // get finalday
    if(this.CurrentDay<10){
     this.FinalDay ="0" +this.CurrentDay;
    }else{
    this.FinalDay = this.CurrentDay;
    }
    this.todayDate=this.CurrentYear+"-"+this.FinalMonth +"-"+this.FinalDay;
    console.log(this.todayDate);
    this.getCurrentDateAsString()
  
       
 }
ngOnInit(){
  if(this.data.mode=="edit"){
    this.getdata(this.data.id);
   }
}

 getdata(id:any){
  this.mainService.getSingleUserData(id).subscribe((res)=>{
    this.originalData =res;
    this.userForm.patchValue({
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
 defaultValue:string='abcd123456';
 // Crate Add Form 
 bookingDate ='';
 userForm = new FormGroup({
   'yard':new FormControl('',Validators.required),
   'linerName':new FormControl(null,Validators.required),
   'referenceNumber':new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]{4}\\d{6}$')]),
   'type':new FormControl(null,[Validators.required]),
   'bookingDate':new FormControl(null,[Validators.required]),
   'bookingValidity':new FormControl(null,[Validators.required]),
   'releseTo':new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
   'vesselCarrier':new FormControl(null,[Validators.required]),
   'vesselName':new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
   'voyageNumber':new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$')]),
   'arrivalDate':new FormControl('',[Validators.required]),
   'departureDate':new FormControl(null,[Validators.required]),
   'loadingPort':new FormControl(''),
   'dischargePort':new FormControl(''),
   'distination':new FormControl(''),
   'status':new FormControl('',[Validators.required]),
   'octContract':new FormControl(''),
   'blNumber':new FormControl('',[ Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
   'remarks':new FormControl(''),

 });
 bookingValidity = this.userForm.get('bookingDate')?.value;

 getCurrentDateAsString() {
  this.userForm.patchValue({
   arrivalDate:this.todayDate
  })
 }

 // userData:any[] =[];
 saveForm(){
   // Push  the value to userData array
   // const Yard = this.userForm.get('yard')?.value;
   // const linerName = this.userForm.get('linerName')?.value;
   // const referenceNumber = this.userForm.get('referenceNumber')?.value;
   // const type = this.userForm.get('type')?.value;
   // const bookingDate = this.userForm.get('bookingDate')?.value;
   // const bookingValidity = this.userForm.get('bookingValidity')?.value;
   // const releseTo = this.userForm.get('releseTo')?.value;
   // const vesselCarrier = this.userForm.get('vesselCarrier')?.value;
   // const vesselName = this.userForm.get('vesselName')?.value;
   // const voyageNumber = this.userForm.get('voyageNumber')?.value;
   // const arrivalDate = this.userForm.get('arrivalDate')?.value;
   // const departureDate = this.userForm.get('departureDate')?.value;
   // const loadingPort = this.userForm.get('loadingPort')?.value;
   // const dischargePort = this.userForm.get('dischargePort')?.value;
   // const distination = this.userForm.get('distination')?.value;
   // const status = this.userForm.get('status')?.value;
   // const octContract = this.userForm.get('octContract')?.value;
   // const blNumber = this.userForm.get('blNumber')?.value;
   // const remarks = this.userForm.get('remarks')?.value;
   // console.log(this.userForm.value);
   // this.userData.push({
   //   Yard:Yard,
   //   linerName:linerName,
   //   referenceNumber:referenceNumber,
   //   type:type,
   //   bookingDate:bookingDate,
   //   bookingValidity:bookingValidity,
   //   releseTo:releseTo,
   //   vesselCarrier:vesselCarrier,
   //   vesselName:vesselName,
   //   voyageNumber:voyageNumber,
   //   arrivalDate:arrivalDate,
   //   departureDate:departureDate,
   //   loadingPort:loadingPort,
   //   dischargePort:dischargePort,
   //   distination:distination,
   //   status:status,
   //   octContract:octContract,
   //   blNumber:blNumber,
   //   remarks:remarks
   // });
   if(this.userForm.valid){
     this.mainService.saveData(this.userForm.value).subscribe((res)=>{
       this.dialogRef.close(res)
       this.toaster.success("Information saved")
       this.router.navigate(['/home'])
     });
   }else{
     this.showAlert('Please fill out all required fields');
   }

 }

//  edit function

editFormfun(){
  if (!this.isDataChanged()&&this.userForm.valid) {
  this.mainService.editValue(this.data.id,this.userForm.value).subscribe((result)=>{
   this.dialogRef.close(result)
   this.toaster.success("Edited Successfully")
 })
}
else{
  if(this.userForm.valid){
    this.dialogRef.close()
    this.toaster.warning("Nothing to change")
  }else{
    this.showAlert('Please fill out all required fields');
  }
}
 }
 isDataChanged(): boolean {
  return this.areEqual(this.originalData,this.userForm.value) 
}
 areEqual(obj1: any, obj2: any): boolean {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (obj1 === undefined || obj2 === undefined) {
    return false;
}
  if (keys1.length !== keys2.length) {
      return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!keys2.includes(key)) {
        return false;
    }
}
for (let i = 0; i < keys1.length; i++) {
  const key = keys1[i];
  if (obj1[key] !== obj2[key]) {
      return false;
  }
}
  return true;
}
 private showAlert(message: string) {
   this.snackbar.open(message, 'Close', {
     duration: 3000 
   });
 }
 get vyard(){
   return this.userForm.get('yard');
 }
 get vname(){
   return this.userForm.get('referenceNumber');
 }
 get vtype(){
   return this.userForm.get('type');
 }
 get vlinerName(){
   return this.userForm.get('linerName');
 }
 get vreleseTo(){
   return this.userForm.get('releseTo');
 }
 get gvesselName(){
   return this.userForm.get('vesselName');
 }
 get gvesselCarrier(){
   return this.userForm.get('vesselCarrier');
 }
 get varrivalDate(){
   return this.userForm.get('arrivalDate');
 }
 get gvoyageNumber(){
   return this.userForm.get('voyageNumber');
 }
 get vblNumber(){
   return this.userForm.get('blNumber');
 }
 get vbookingDate(){
   return this.userForm.get('bookingDate');
 }
 get vbookingValidity(){
   return this.userForm.get('bookingValidity')
 }
 get vdepartureDate(){
   return this.userForm.get('departureDate')
 }
 get vstatus(){
   return this.userForm.get('status')
 }

onSatus(){
 if (this.userForm.get('status')?.value === 'Expired') {
   this.userForm.get('octContract')?.disable();
   this.userForm.get('blNumber')?.disable();
  this.userForm.get('octContract')?.reset();
   this.userForm.get('blNumber')?.reset();
   

 } else {
   this.userForm.get('octContract')?.enable();
   this.userForm.get('blNumber')?.enable();
 }
}
onYard(){
 if (this.userForm.get('yard')?.value === 'HK') {
   this.userForm.get('referenceNumber')?.disable();
   this.userForm.get('referenceNumber')?.setValue('abcd123456');
 }
}


isContractBlVisible(): boolean {
 return this.userForm.get('status')?.value !== 'Expired';
}
closeFuc(){
this.dialogRef.close()
}

}
