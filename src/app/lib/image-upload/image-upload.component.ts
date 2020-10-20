import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sb-image-upload',
  templateUrl: './image-upload.component.html',
})
export class ImageUploadComponent implements OnInit {

  @Output() changed = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  upload(): void {
    const fileInput = document.getElementById('#file-input');
    fileInput.click();

  }

}
