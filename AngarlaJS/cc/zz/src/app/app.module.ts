import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { PickConComponent } from './pick-con/pick-con.component';
import { DComponent } from './d/d.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    PickConComponent,
    DComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
