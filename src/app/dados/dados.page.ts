import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  private user: Object; 

  private name: String;
  private age: String;
  private email: String;
  private phone: String;
  
  constructor() {

    this.name = 'tiago rodrigues';
    this.age = '22';
    this.email = 'tiago@gmail.com';
    this.phone = '14 998288845';
    


    this.user = {
      name: 'TIAGO', 
      age: '28', 
      phone: '165165165', 
      email: 'tiago@gmail.com'
    }
   }

  ngOnInit() {
  }

}
