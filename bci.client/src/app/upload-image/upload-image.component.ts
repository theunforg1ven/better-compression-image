import { Component, OnInit } from '@angular/core';
import {NgxImageCompressService} from 'ngx-image-compress';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  public imgResultBeforeCompress: string;
  public imgResultAfterCompress: string;

  public compressionValue = 10;
  public warnInput = false;

  constructor(private imageCompress: NgxImageCompressService) { }

  ngOnInit() {
  }

  compressFile() {

    if (isNaN(this.compressionValue) ||  this.compressionValue > 100 ||  this.compressionValue < 0.01) {
      this.warnInput = true;
      return;
    }

    this.warnInput = false;
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      this.imgResultBeforeCompress = image;
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      debugger;
      this.imageCompress.compressFile(image, orientation, 50, this.compressionValue).then(
        result => {
          this.imgResultAfterCompress = result;
          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
        }
      );
    });
  }

  generateRandomStr(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  downdloadImg(href: string, name: string): void {
    const link = document.createElement('a');
    link.href = href;
    link.download = `${name}.jpg`;
    link.target = '_blank';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
