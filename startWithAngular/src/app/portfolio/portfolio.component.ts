import { dirname } from 'node:path';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  showImage: boolean = true;
  imageOnClick: string = "";
  NextIndex: number = 0;
  previousIndex: number = 0;
  images: string[] = ["/images/poert1.png", "/images/port2.png", "/images/port3.png", "/images/poert1.png", "/images/port2.png", "/images/port3.png"]

  onOpenImage(eventInfo: string): void {
    this.imageOnClick = eventInfo;

    if (this.showImage === false) {
      this.showImage = true;

    } else {
      this.showImage = false;
    }
  }

  closeImage(): void {
    if (this.showImage === true) {
      this.showImage = false;

    } else {
      this.showImage = true;
    }
  }

  previousImage() {
    this.previousIndex = this.images.indexOf(this.imageOnClick);
    this.previousIndex--;
    if (this.previousIndex === -1) {
      this.previousIndex = 5;
      this.imageOnClick = this.images[this.previousIndex]
    } else if ((this.previousIndex === 6)) {
      this.previousIndex = 0;
      this.imageOnClick = this.images[this.previousIndex]
    } else {
      this.imageOnClick = this.images[this.previousIndex]
    }
  }

  nextImage() {
    this.NextIndex = this.images.indexOf(this.imageOnClick);
    this.NextIndex++;
    console.log(this.NextIndex);

    if (this.NextIndex === 5) {
      this.NextIndex = 0;
      this.imageOnClick = this.images[this.NextIndex]
    } else {
      this.imageOnClick = this.images[this.NextIndex]
    }
  }

  outSideClose():void{
    console.log("outSideClose");
  }
}

