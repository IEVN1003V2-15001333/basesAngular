import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="saluno de variable";

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 puertas familiares",
      "year":"febrero 3 2022",
      "Precio": 20000,
      "Marca": "NISSAN",
      "Color":"Morado",
      "ImagenUrl":"https://www.nissan.com.mx/content/dam/Nissan/mexico/assets/sentra/my24/vap/nissan-2024-sentra_sense_tm-d.jpg.ximg.l_12_m.smart.jpg"
    },
    {
      "productoId":2,
      "Modelo":'A4',
      "Descripcion":"2 puertas",
      "year":"marzo 3 2023",
      "Precio": 30000,
      "Marca": "AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzMxODE1L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzIxOTMwODE2MzkxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0="
    },
    {
      "productoId":3,
      "Modelo":'Rio',
      "Descripcion":"4 puertos familiares",
      "year":"Agosto 3 2022",
      "Precio": 60000,
      "Marca": "KIA",
      "Color":"Azul",
      "ImagenUrl":"https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzM4MzQzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzIzMjI1Njg5NjU5LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0="
    }
  ]
}