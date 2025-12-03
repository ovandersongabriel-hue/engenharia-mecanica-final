import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 
  slides = [
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800',
      badge: '15+ Anos',
      badgeText: 'de Experiência',
      label: 'QUEM SOMOS',
      title: 'Compromisso com a Excelência',
      description: 'Com mais de uma década de atuação, a MechanicPro se consolidou como referência. Unimos conhecimento técnico rigoroso com tecnologia de ponta.',
      buttonText: 'Fale com um Engenheiro',
      link: '/contato'
    },
    {
      image: 'imagem/3.jpeg', 
      badge: '100%',
      badgeText: 'Tecnologia',
      label: 'INOVAÇÃO',
      title: 'Manutenção Preditiva 4.0',
      description: 'Utilizamos sensores IoT e análise de dados para prever falhas antes que elas aconteçam, garantindo a continuidade da sua produção.',
      buttonText: 'Conheça Nossos Serviços',
      link: '/servicos'
    },
    {
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800', 
      badge: 'NR-12',
      badgeText: 'Certificado',
      label: 'SEGURANÇA',
      title: 'Adequação e Normas',
      description: 'Sua equipe segura e sua empresa dentro da lei. Realizamos adequações completas conforme as normas regulamentadoras vigentes.',
      buttonText: 'Solicitar Orçamento',
      link: '/contato'
    }
  ];

  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startAutoSlide() {
    
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
    clearInterval(this.slideInterval);
    this.startAutoSlide();
  }
}