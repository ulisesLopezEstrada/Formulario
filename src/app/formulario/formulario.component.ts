import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

   public usuario: Object = {
     nombre:null,
     apellido: null,
     correo:null,
     pais:"",
     sexo:"Hombre",
     acepta:false
   }

   sexos:string[]=["Hombre", "Mujer","sin definir"];

   paises = [{
       codigo:"US",
       nombre:"Estados Unidos"
         },
         {
        codigo:"MEX",
        nombre:"Mexico"
        },
        {
          codigo:"ES",
          nombre:"España"
          }
  ]
  constructor() { }

  ngOnInit() {
  }

   guardar(forma:NgForm){
     /* console.log("Formulario Posteado"); */
     console.log ("NgForm",forma);
     console.log ("Valor",forma.value);
     console.log ("usuario",this.usuario);
   }
}
