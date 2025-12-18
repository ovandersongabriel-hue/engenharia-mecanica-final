import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroComponent {
  
  onSubmit(event: Event) {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const lgpdCheckbox = form.querySelector('#lgpd') as HTMLInputElement;

    if (lgpdCheckbox && !lgpdCheckbox.checked) {
      alert('Você precisa aceitar os termos da LGPD para prosseguir com o cadastro.');
      return;
    }

    alert('Solicitação enviada! Em breve entraremos em contato.');
  }
}