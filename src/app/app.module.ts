import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListemployesComponent } from './listemployes/listemployes.component';
import { SuppemployesComponent } from './suppemployes/suppemployes.component';
import { InfosvoituresComponent } from './EX/component/infosvoitures/infosvoitures.component';
import { ListvoituresComponent } from './EX/component/listvoitures/listvoitures.component';

@NgModule({
  declarations: [
    AppComponent,
    ListemployesComponent,
    SuppemployesComponent,
    InfosvoituresComponent,
    ListvoituresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
