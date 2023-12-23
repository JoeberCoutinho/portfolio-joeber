import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DadosPessoaisComponent } from './componentes/dados-pessoais/dados-pessoais.component';
import { ResumoProfissionalComponent } from './componentes/resumo-profissional/resumo-profissional.component';
import { FormacaoAcademicaComponent } from './componentes/formacao-academica/formacao-academica.component';
import { ExperienciaProfissionalComponent } from './componentes/experiencia-profissional/experiencia-profissional.component';
import { CompetenciasComponent } from './componentes/competencias/competencias.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosPessoaisComponent,
    ResumoProfissionalComponent,
    FormacaoAcademicaComponent,
    ExperienciaProfissionalComponent,
    CompetenciasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
