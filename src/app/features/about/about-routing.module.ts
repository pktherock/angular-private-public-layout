import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeveloperInfoComponent } from './components/developer-info/developer-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about-us',
    pathMatch: 'full',
  },

  {
    path: 'about-us',
    component: AboutUsComponent,
  },

  {
    path: 'developer-info',
    component: DeveloperInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
