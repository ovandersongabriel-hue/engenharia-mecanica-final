import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  
  mostrarBanner: boolean = false;

  
  imagens: string[] = [
    'imagem/1.jpeg',
    'imagem/2.jpeg',
    'imagem/3.jpeg'
  ];

  titulos: string[] = [
    'Manutenção Preventiva',
    'Manutenção Corretiva',
    'Consultoria Especializada'
  ];

  descricoes: string[] = [
    'Evite falhas antes que elas aconteçam com nossa análise técnica.',
    'Agilidade e precisão para colocar sua indústria de volta na ativa.',
    'Soluções de engenharia para otimizar toda sua linha de produção.'
  ];

  indexAtual: number = 0;

  constructor() { }

  ngOnInit(): void {
    
    setInterval(() => {
      this.proximaImagem();
    }, 5000);

    
    const aceitou = localStorage.getItem('lgpd-aceito');
    
    
    if (!aceitou) {
      this.mostrarBanner = true;
    }
  }

  
  aceitarCookies() {
    this.mostrarBanner = false; 
    localStorage.setItem('lgpd-aceito', 'true'); 
  }

  proximaImagem() {
    this.indexAtual++;
    if (this.indexAtual >= this.imagens.length) this.indexAtual = 0;
  }

  imagemAnterior() {
    this.indexAtual--;
    if (this.indexAtual < 0) this.indexAtual = this.imagens.length - 1;
  }
}