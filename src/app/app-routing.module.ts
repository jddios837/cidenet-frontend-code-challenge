import { NgModule } from '@angular/core';
import {ResolveFn, RouterModule, Routes} from '@angular/router';
import {LoremIpsumComponent} from "./lorem-ipsum/lorem-ipsum.component";
import {ButtonComponent} from "./button/button.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'todo', loadChildren: () => import("./todo/todo.module").then(m => m.TodoModule) },
  { path: 'lorem', title: 'Lorem Section', component: LoremIpsumComponent},
  { path: 'button', title: 'Button Section', component: ButtonComponent},
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
