import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroesBorrados:  string[]= [];
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];

  borrarHeroe():void {
    this.heroesBorrados.push( this.heroes.pop() ||'');
  
  }


}
