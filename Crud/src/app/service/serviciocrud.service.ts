import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiciocrudService {

  url = 'http://localhost/ejercicios_php/';

  headers:any;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders();
    this.headers.append('Accept','application/json');
    this.headers.append('Content-Type','application/json');
    this.headers.append('Acces-Control-Allow-Origin','*');
    //this.headers.append('key',this.Keyrest);
  }

  obtenerListaId(data:any): Observable<any>{
    console.log(data);
    let params = JSON.stringify(data);
    let Headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.url}obtenerConId.php`, params, {
      headers: Headers,
    });
  }

  obtenerUsuarios(){
    let Headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.url}obtenerUsuarios.php`,{headers:Headers});
  }

  deleteUsuario(data:any): Observable<any> {
    console.log(data);
    let params = JSON.stringify(data);
    let Headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.url}deleteUsuarios.php`, params, {
      headers: Headers,
    });
  }





}
