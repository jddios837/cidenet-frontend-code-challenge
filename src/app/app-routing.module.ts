import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoremIpsumComponent} from "./lorem-ipsum/lorem-ipsum.component";
import {ButtonComponent} from "./button/button.component";

const routes: Routes = [
  { path: 'lorem', component: LoremIpsumComponent},
  { path: 'button', component: ButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
