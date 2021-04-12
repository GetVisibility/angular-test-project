import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DlpConfigurationComponent } from './dlp-configuration/dlp-configuration.component';


const routes: Routes = [
  { path: 'dlp', component: DlpConfigurationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
