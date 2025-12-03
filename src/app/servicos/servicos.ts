import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.html',
  styleUrls: ['./servicos.css'] 
})
export class ServicosComponent {
  
  services = [
    {
      title: 'Manutenção Preditiva',
      description: 'Monitoramento contínuo e análise de dados para prever falhas antes que aconteçam.',
      icon: '📈' 
    },
    {
      title: 'Manutenção Preventiva',
      description: 'Programação estratégica de intervenções para manter equipamentos em perfeito funcionamento.',
      icon: '🗓️'
    },
    {
      title: 'Manutenção Corretiva',
      description: 'Resposta rápida e eficiente para reparos emergenciais e minimização de inatividade.',
      icon: '🛠️'
    },
    {
      title: 'Análise de Vibração',
      description: 'Diagnóstico preciso através de análise vibracional para identificar problemas em rolamentos.',
      icon: '📊'
    },
    {
      title: 'Adequação à NR-12',
      description: 'Adequação de máquinas e equipamentos às normas de segurança, garantindo conformidade.',
      icon: '🛡️'
    },
    {
      title: 'Gestão de Ativos',
      description: 'Controle completo do ciclo de vida dos equipamentos, otimizando investimentos.',
      icon: '📋'
    }
  ];
}