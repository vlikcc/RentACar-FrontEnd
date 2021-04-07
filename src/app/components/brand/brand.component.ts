import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[]
  headerBrand:Brand={id:0, brandName:'TÜM MARKALAR'};
  brand2:Brand[]=[{id:0, brandName:'TÜM MARKALAR'}]
  constructor(private brandService:BrandService) { }
  currentBrand:Brand;

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    })
  }

  setCurrentBrand(brand:Brand)
  {
    this.currentBrand=brand;
    this.headerBrand=brand;
  }

  getCurrentBrand(brand:Brand)
  {
    if (brand==this.currentBrand) {
       return "accordion-header"
    }
    else{
      return "list-group-item"
    }
  }

  setAllBrand(brand2:Brand)
  {
    
    this.currentBrand=brand2;
  }
}
