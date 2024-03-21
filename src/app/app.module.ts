import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AddComponent } from './pages/add/add.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from './environment';
import { EditComponent } from './pages/edit/edit.component'; 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './pages/confirmation-dialog/confirmation-dialog.component'
import {MatIconModule} from '@angular/material/icon';
import { AddbuttonComponent } from './pages/addbutton/addbutton.component';
import { EditbuttonComponent } from './pages/editbutton/editbutton.component';
import { DeletebuttonComponent } from './pages/deletebutton/deletebutton.component';
import { ListtableComponent } from './pages/listtable/listtable.component';
import { CommomformComponent } from './pages/commomform/commomform.component';
import { SavebuttonComponent } from './pages/savebutton/savebutton.component';
import { CancelbuttonComponent } from './pages/cancelbutton/cancelbutton.component';
import { AgGridAngular } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ConfirmationDialogComponent,
    AddbuttonComponent,
    EditbuttonComponent,
    DeletebuttonComponent,
    ListtableComponent,
    CommomformComponent,
    SavebuttonComponent,
    CancelbuttonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AgGridAngular,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
