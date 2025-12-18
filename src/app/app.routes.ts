import { Routes } from '@angular/router';
import { HomeComponent } from './home/home'; 
import { ServicosComponent } from './servicos/servicos';
import { ContatoComponent } from './contato/contato';
import { SobreComponent } from './sobre/sobre'; 
import { CadastroComponent } from './cadastro/cadastro'; 
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent }
];