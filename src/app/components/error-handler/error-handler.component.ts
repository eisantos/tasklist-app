import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  trataErro(err: any, msg){
    console.log(err);
    this.openSnackBar(msg ? msg : 
      "Ocorreu um erro ao salvar. Entre em contato com o suporte técnico.")
  }

  /**
   * TODO
   *  Criar componente de mensagem */
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }
  
}
