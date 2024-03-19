import { Component,OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { AddComponent } from './pages/add/add.component';
import { MainService } from './service/main.service';
import { Router } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { ConfirmationDialogComponent } from './pages/confirmation-dialog/confirmation-dialog.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listData: { [key: string]: any }={};
  showdataTable:boolean =true;
  listId:any;
  deleteId:any;
  mode:string='';
  constructor(private dialogRef:MatDialog ,private mainService:MainService,private route:Router ,private cdr:ChangeDetectorRef){
  }
  ngOnInit(){

    this.getData();
  }
  getData(){
    this.mainService.getData().subscribe((result)=>{
       console.log(result);
       if (result !== null) {
        this.listData = result;
      } else {
        this.listData = {}; 
        this.mainService.getData().subscribe((result)=>{
          console.log(result);
          
        })
        
      }
    //    for (let key in result) {
    //     if (result.hasOwnProperty(key)) {
    //            this.listData = result;
    //         }
    // }
    // this.listData = result || {};
    // this.cdr.detectChanges();
    // setTimeout(() => {
    //   this.showdataTable = false;
    // },1000);
    // setTimeout(() => {
    //   this.showdataTable = true;
    // },1000);
    // this.showdataTable = true;
    
      // this.listData.push(...result);
    });
  }
  updateView(): void {
  this.cdr.detectChanges();
}
  title = 'angular_Task';
  addForm(event:any){
    this.mode="Add"
  //  var addFormPoup= this.dialogRef.open(AddComponent);
  event.afterClosed().subscribe((res:any)=>{
     console.log(res);
     this.getData();
     
    })

  }
  // deleteData(id:any){
  //   this.mainService.daleteValue(id).subscribe((res)=>{
  //     console.log(res);
  //     this.route.navigate([''])
  //   });
  // }

  
  openConform(deleteFormPoup:any,key:string){
    // var deleteFormPoup =  this.dialogRef.open(ConfirmationDialogComponent,{
    //   data:{id}
    // })
    deleteFormPoup.afterClosed().subscribe((res:any)=>{
     console.log(res);
    if(res){
      delete this.listData[key];
    }
    })
  }
  editForm(editFormPoup:any){
    // var editFormPoup = this.dialogRef.open(EditComponent,{
    //   data: { id: id }
    // })
    this.mode="edit";
    editFormPoup.afterClosed().subscribe((res:any)=>{
      console.log(res);   
      this.getData();
    })
  }
  // editData(id:any){
  //   this.mainService.editValue(id,dara).subscribe((res)=>{
  //     console.log(res);
  //     this.route.navigate([' '])
  //   })
  // }

}
