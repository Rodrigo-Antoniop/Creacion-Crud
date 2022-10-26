import { Component , OnInit } from '@angular/core';
import { ServiciocrudService } from '../service/serviciocrud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  seleccion = undefined;

  id:any;
  nombre:any;
  pass:any;
  email:any;
  estado:any;

  constructor(private dataservice:ServiciocrudService) {}
  listadoUsuarios:any=[];

  ngOnInit(){

    this.obtenerUsuarios();

  }

  obtenerUsuarios(){

    //alert("Probando OK");

    this.dataservice.obtenerUsuarios().subscribe((data)=>{
      console.log(data);
      this.listadoUsuarios = data;
    });
  }

  obtenerSeleccion(ev) {

    this.seleccion = ev.target.value;

    let data_cruda = {
      id:this.seleccion.id,
    };

    console.log(data_cruda);

    this.dataservice.obtenerListaId(data_cruda).subscribe({
      next:(respuesta) =>{
        console.log(respuesta);
        this.nombre = respuesta[0].nombre ;
        this.pass   = respuesta[0].pass   ;
        this.email  = respuesta[0].email  ;
        this.estado = respuesta[0].estado ;
        this.id     = respuesta[0].id     ;        
      },
      error: (e) => console.error(e),
      complete:() => {
        console.info('completado');
      },       
    });
  }

  deleteUsuario(){

    let data_cruda = {
      id:     this.id     ,
      nombre: this.nombre ,
      pass:   this.pass   ,
      email:  this.email  ,
      estado: this.estado ,
    };
    

    this.dataservice.deleteUsuario(data_cruda).subscribe({
      next: (respuesta) => {
        
        console.log(respuesta);
      },
      error:(e) => console.error(e),
      complete:( ) => {
        console.info('completado');

        
        this.id     =" ";
        this.nombre =" ";
        this.pass   =" ";
        this.email  =" ";
        this.estado =" ";

      }
    })
  }

}
