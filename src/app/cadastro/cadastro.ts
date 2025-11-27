import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class CadastroComponent {
  nome: string = '';
  telefone: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private router: Router) {}

  fazerCadastro() {
    console.log('Cadastro:', this.nome);
    alert(`Cadastro realizado com sucesso para ${this.nome}!`);
    this.router.navigate(['/']);
  }
}