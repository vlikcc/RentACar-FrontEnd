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
  brand2:Brand[]=[{id:0,brandName:null}]
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
  }

  getCurrentBrand(brand:Brand)
  {
    if (brand==this.currentBrand) {
       return "list-group-item list-group-item-info"
    }
    else{
      return "list-group-item"
    }
  }

  setAllBrand(brand2:Brand)
  {
    brand2.brandName=null;
    this.currentBrand=brand2;
  }
}
