import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contato.html',  
  styleUrl: './contato.css'
})
export class ContatoComponent {
  
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      
      nome: new FormControl('', [Validators.required]), 
      
      
      email: new FormControl('', [Validators.required, Validators.email]),
      
      telefone: new FormControl('', [Validators.required]),
      mensagem: new FormControl(''),
      
     
      lgpd: new FormControl(false, [Validators.requiredTrue]) 
    });
  }

  enviarMensagem() {
    
    if (this.contactForm.valid) {
      console.log('Dados do formulário:', this.contactForm.value);
      alert('Mensagem enviada com sucesso!');
      this.contactForm.reset(); 
    } else {
      alert('Por favor, preencha todos os campos e aceite os termos.');
    }
  }
}