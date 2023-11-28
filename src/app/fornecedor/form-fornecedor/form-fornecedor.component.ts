import { Component, OnInit } from '@angular/core';
import { Ifornecedor } from '../service/ifornecedor';
import { FormControl, FormGroup } from '@angular/forms';
import { FornecedorService } from '../service/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-form-fornecedor',
  templateUrl: './form-fornecedor.component.html',
  styleUrls: ['./form-fornecedor.component.scss']
})
export class FormFornecedorComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cpf: new FormControl(''),
    rg: new FormControl(''),
    endereco: new FormControl(''),
    email: new FormControl(''),
    cnpj: new FormControl(''), // Add this line for the cnpj control
  });

  constructor(
    private service: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ListarPorId();
  }

  Salvar() {
    if (this.form.value.id) {
      this.service.atualizar(this.form.value).subscribe(
        success => {
          alert('Cliente atualizado com sucesso!');
          this.router.navigate(['']);
        },
        error => alert('Erro ao atualizar o cliente ')
      );
    } else {
      this.service.criar(this.form.value).subscribe(
        success => {
          alert('Cliente cadastrado com sucesso!');
          this.router.navigate(['']);
        },
        error => alert('Erro ao cadastrar o cliente ')
      );
    }

    this.form.reset();
  }

  ListarPorId() {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.service.listarPorId(id))
      )
      .subscribe(fornecedor => this.atualizarForm(fornecedor));
  }

  atualizarForm(fornecedor: Ifornecedor) {
    this.form.patchValue({
      id: fornecedor.id,
      nome: fornecedor.nome,
      endereco: fornecedor.endereco,
      email: fornecedor.email,
      cnpj: fornecedor.cnpj, 
    });
  }

  Cancelar() {
    this.form.reset();
    console.log('Cancelado');
  }
}
