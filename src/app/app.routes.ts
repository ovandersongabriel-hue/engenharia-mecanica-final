import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ServicosComponent } from './servicos/servicos';
import { SobreComponent } from './sobre/sobre';
import { ContatoComponent } from './contato/contato';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }
];