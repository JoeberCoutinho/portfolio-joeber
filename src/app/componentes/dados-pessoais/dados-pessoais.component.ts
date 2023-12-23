import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent {
  name: string = "Joeber Coutinho";
  job: string = "Desenvolvedor Java Web";
  linkedin: string = "https://www.linkedin.com/in/joeber-coutinho/details/skills/";
  adress: string = "Campo Belo, MG";
  telefone: string = "35-999761290";
  email: string = "joebercoutinho@gmail.com";
}
