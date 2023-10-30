import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeveloperInfoComponent } from './components/developer-info/developer-info.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [AboutUsComponent, DeveloperInfoComponent],
  imports: [CommonModule, AboutRoutingModule, MaterialModule],
})
export class AboutModule {}
