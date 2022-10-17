import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterContinentComponent } from './continents/ajouter-continent/ajouter-continent.component';
import { TousLesContinentsComponent } from './continents/tous-les-continents/tous-les-continents.component';

const routes: Routes = [{
  path:'',
  component:TousLesContinentsComponent
},{
  path:'ajouter-continent',
  component:AjouterContinentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
