import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadynumbersComponent } from './view/readynumbers/readynumbers.component';
import { UserformComponent } from './view/userform/userform.component';

const routes: Routes = [
  {path: 'readynumbers', component: ReadynumbersComponent},
  {path: 'userform', component: UserformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
