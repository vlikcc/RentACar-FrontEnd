import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
 colors:Color[]=[];
 color2:Color[]=[{id:0,colorName:'TÜM RENKLER'}];
 
  constructor(private colorService:ColorService) { }
  currentColor:Color;
  ngOnInit(): void {   
    this.setAllColor();
    this.getColors();
    
    
    
  }

  getColors()
  {
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
      
     
    })
  }

  setCurrentColor(color:Color)
  {
    this.currentColor=color;
    this.color2[0].colorName=color.colorName;
    
  }

  getCurrentColor(color:Color)
  {
    if (color==this.currentColor) {
       return "list-group-item list-group-item-info"
    }
    else{
      return "list-group-item"
    }
  }

  setAllColor()
  {
    this.colors.push(this.color2[0]);
  }

}
