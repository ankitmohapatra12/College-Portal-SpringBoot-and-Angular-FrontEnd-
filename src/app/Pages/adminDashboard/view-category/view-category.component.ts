import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit{
  categories = [
    {
      "id":0,
      "title":"",
      "description":""
    }
  ]


  constructor(public categoryService:CategoryService){}
  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data:any) =>{
        this.categories = data;
        console.log(this.categories);
      },
      (error)=>{
        Swal.fire('Error',"Error fetching categories",'error')
      }
    )
  }

  
}
