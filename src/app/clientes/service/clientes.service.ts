import { Injectable } from '@angular/core';
import { Iclientes } from './iclientes';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private readonly  API = "http://localhost:8080/clientes";
  constructor(private http: HttpClient) { }

  listar(){
    // O atributo <Icursos[]> serve para parametrizar o retorno da classe
    return this.http.get<Iclientes[]>(this.API);
  }


  listarPorId(id:object) {
    return this.http.get<Iclientes>(`${this.API}/${id}`).pipe(take(1));
  }

  criar(clientes:object) {
    // o pipe take 1 serve para ir apenas umas vez no servidor e voltar.
    return this.http.post(this.API, clientes).pipe(take(1));
  }

  atualizar(clientes:any){
    return this.http.put(`${this.API}/${clientes.id}`, clientes).pipe(take(1));
  }

  excluir(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
  
}
