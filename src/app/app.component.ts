import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PR01';

  // Mis variables
  nombre:string = 'Jose';
  apellidos:string = 'Marín';
  edad:number = 35;
  salario:any = [1000,2000,3000];
  activo:boolean = true;
  mensaje:string='';

  isActive(){
    if(this.activo){
      this.mensaje = "El usuario ya tiene trabajo";
    }else{
      this.mensaje = "El usuario aun no tiene trabajo";
    }
    return this.mensaje;
  }

}
