import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';


import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { CadastroComponent } from './cadastro/cadastro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink,
    NavbarComponent,
    FooterComponent, 
    CadastroComponent 
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'engenharia-mecanica-final';
}