import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  constructor(private http: HttpClient) { 

    this.cargarProductos();
    
  }
      private cargarProductos() {
        
        this.http.get('https://angular-html-722d7.firebaseio.com/productos_idx.json');
        .subscribe((resp: any[]) =>{
          // this.productos = resp;
          console.log(resp);
          
        });
        
      }
}
