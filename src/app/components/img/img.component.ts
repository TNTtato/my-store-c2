import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() img: string;
  @Output() loaded = new EventEmitter<string>();
  imgDefault = '../../../assets/img/default.png';

  constructor() {
    this.img = '';
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('img cargada con exito');
    this.loaded.emit(this.img);
  }

}
