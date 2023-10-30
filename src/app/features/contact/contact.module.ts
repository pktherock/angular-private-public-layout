import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [ContactUsComponent, ContactInfoComponent],
  imports: [CommonModule, ContactRoutingModule, MaterialModule],
})
export class ContactModule {}
