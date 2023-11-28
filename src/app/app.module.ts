import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { FormFornecedorComponent } from './fornecedor/form-fornecedor/form-fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormClientesComponent,
    FormFornecedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
