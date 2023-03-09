import { Component } from '@angular/core';
import { Category } from 'src/app/Models/category.module';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  category:Category = {
    id:0,
    title:"",
    description:""
  }


  constructor(private categoryService:CategoryService){}

  createCategory(){
    if(this.category.title == null || this.category.title == ""){
      Swal.fire("Required","Category Title cannot be blank !",'error')
    }
    if(this.category.description == null || this.category.description == ""){
      Swal.fire("Required","Category Description cannot be blank !",'error')
    }

    this.categoryService.addCategory(this.category).subscribe(
      (data:any) =>{
        Swal.fire("Success","Successfully added category !",'success');
        this.doReset();
      },
      (error)=>{
        Swal.fire("Error","Failed to add Category!",'error')
        this.doReset();
      }
      )
  }


  doReset(this: any){
    this.category.title='';
    this.category.description='';
    
  }

}
