/*TODO
  Criar módulo para as tasks
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatListModule,
        MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListagemComponent } from './components/tasks/task-listagem/task-listagem.component';
import { TaskDetalhesComponent } from './components/tasks/task-detalhes/task-detalhes.component';
import { TaskService } from './services/task.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { StatusService } from './services/status.service';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListagemComponent,
    NavbarComponent,
    TaskDetalhesComponent,
    ErrorHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    LayoutModule, 
    MatIconModule, 
    MatListModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatInputModule,    
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [ 
    TaskService, 
    StatusService,
    ErrorHandlerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
