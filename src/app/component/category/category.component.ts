import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category.model'
import {CategoryService} from '../../services/category.service'

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit{
  
  categorys : Category[];

  constructor(private categoryService : CategoryService){}

  ngOnInit(){
    this.getCategorys()
  }


   getCategorys() {
       console.log("came here")
    this.categoryService.getCategories().subscribe(res => this.categorys=res);
      
  }
}