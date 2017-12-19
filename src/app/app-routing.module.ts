import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestcaseComponent} from './testcase/testcase.component';

const routes: Routes = [
  { path: 'testcase/:id', component: TestcaseComponent },
  { path: 'testcase', component: TestcaseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
