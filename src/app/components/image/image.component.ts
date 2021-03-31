import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  images:CarImage[]=[];
  
  
  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
    this.getImages();
    
    
  }

getImages()
{
  this.imageService.getImages().subscribe(response=>{
    this.images=response.data;
    console.log(response.data)
  })
}

getImagesByCarId(carId:number)
{
  this.imageService.getImagesByCarId(carId).subscribe(response=>{
    this.images=response.data;
  })
}

}
