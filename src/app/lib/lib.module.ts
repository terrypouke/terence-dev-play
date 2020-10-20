import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    ArticleCardComponent,
    ImageUploadComponent,
    HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ImageUploadComponent
  ]
})
export class LibModule { }
