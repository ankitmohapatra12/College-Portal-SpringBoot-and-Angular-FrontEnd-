import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/category.module';
import baseUrl from './help.module';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  constructor(private http:HttpClient) { }

  public categories(){
    return this.http.get(`${baseUrl}/category/`);
  }

  public addCategory(category:Category){
    return this.http.post(`${baseUrl}/category/add`,category);
  }
}
