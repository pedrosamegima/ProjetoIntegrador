import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesModule } from './clientes/clientes.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:''},
  {path:'clientes', loadChildren:()=> ClientesModule},
  {path:'fornecedor', loadChildren:()=> FornecedorModule},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
