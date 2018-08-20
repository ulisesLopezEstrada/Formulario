import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
/* Esta es la nueva forma de declarar observables en angular version 6. */
import { Observable } from 'rxjs';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

    forma: FormGroup;

    usuario:Object ={
      nombreCompleto: {
        nombre: "ulises",
        apellido: "Lopez"
      },
      correo: "ulises@hotmail.com"
    }

  constructor() { 
         console.log(this.usuario);

      
        this.forma = new FormGroup ({
        'nombreCompleto': new FormGroup ({
            'nombre': new FormControl('', [
              Validators.required,
              Validators.minLength(3)
             ]),
            'apellido': new FormControl('', [Validators.required,
                                             this.noLopez])
              }),
        'correo': new FormControl('', [
            Validators.required,
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
          ]),
             'username': new FormControl('',Validators.required,this.existeUsuario),
             'password1': new FormControl('',Validators.required),
             'password2': new FormControl()
        });

      /* this.forma.setValue(this.usuario); */

       this.forma.controls['password2'].setValidators([
         Validators.required,
         this.noIgual.bind(this.forma)
       ]);

      this.forma.controls['username'].valueChanges
            .subscribe(data => {
             console.log("datos",data); 
            });
            
     this.forma.controls['username'].statusChanges
            .subscribe(data => {
             console.log("datos",data); 
            });
          
  }
   guardarCambios(){
     console.log(this.forma.value);
     console.log(this.forma);
     /*  this.forma.reset({
        nombreCompleto: {
           nombre:"",
           apellido: ""
        },
        correo:""
      }); */
   }
     
    noLopez(control: FormControl) : { [s:string]: boolean} {
      if (control.value === "Lopez") {
        return {
             noLopez:true
        }
      }
       return null;
    }

    noIgual(control: FormControl) : { [s:string]: boolean} {
      let forma:any = this;
      if (control.value !== forma.controls['password1'].value) {
        return {
             noIguales:true
        }
      }
       return null;
    }

  existeUsuario (control: FormControl): Promise<any> | Observable<any>{

        let promesa =  new Promise (
          ( resolve, reject ) => {
            setTimeout (()=> {
              if (control.value=="ulises"){
                resolve ({existe:true})
              }else{
                resolve(null)
              }
             },3000)
          })
        return promesa;
   }

  ngOnInit() {
  }

}
