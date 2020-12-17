import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

@NgModule({
  declarations: [
    AppComponent,
    // EmpListComponent,
    EmployeetableComponent,
    EmployeelistComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
