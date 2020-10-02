import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './phone/phone.component';



const routes: Routes = [
  //{path : '', component:PhoneComponent, pathMatch: 'full'},
  //{path : 'employee-address', component:EmployeeAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
