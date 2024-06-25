import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-details-section',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BtnPrimaryComponent
  ],
  templateUrl: './details-section.component.html',
  styleUrl: './details-section.component.scss'
})
export class DetailsSectionComponent {

}
