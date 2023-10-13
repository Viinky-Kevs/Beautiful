import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  images = [
    '../../assets/vivi/7.jpg',
    '../../assets/vivi/2.jpg',
    '../../assets/vivi/20.jpg',
    '../../assets/vivi/3.jpg',
    '../../assets/vivi/4.jpg',
    '../../assets/vivi/11.jpg',
    '../../assets/vivi/6.jpg',
    '../../assets/vivi/1.jpg',
    '../../assets/vivi/8.jpg',
    '../../assets/vivi/9.jpg',
    '../../assets/vivi/10.jpg',
    '../../assets/vivi/12.jpeg',
    '../../assets/vivi/14.jpeg',
    '../../assets/vivi/15.jpeg',
    '../../assets/vivi/16.jpg',
    '../../assets/vivi/17.jpg',
    '../../assets/vivi/18.jpg',
    '../../assets/vivi/19.jpg',
  ];

  currentImageIndex: number = 0;
  showLetter= false;

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }
  
  showDiv(){
    this.showLetter = !this.showLetter;
  }
}
