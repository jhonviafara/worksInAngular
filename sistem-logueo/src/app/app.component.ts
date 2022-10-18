import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ingreso al sistema';
  entrada1="correo electronico";
  entrada2="contraseña";
  logon:boolean=false;
  pdPassword='';
  pdEmail='';
  
  
  validarloguin(){
    if (this.correoValido(this.pdEmail) && 
    this.passwordValido(this.pdPassword))
    this.logon=true; 
    else
    alert("usuario o contraseña  invalidos")
    
  }
  passwordValido(clave: string){
    const rePassword=/.{3,14}/;
    return rePassword.test(clave) 
  }
  correoValido(correo: string){
    const reEmail=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return reEmail.test(correo);
  }
  
}
