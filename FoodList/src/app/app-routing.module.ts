import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SearchComponent]
