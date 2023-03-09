import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './help.module';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  constructor(private http:HttpClient) { }

  public addUserAcademicData(academicData:any){
    return this.http.post(`${baseUrl}/academic/create`,academicData);
  }

  public getUserAcademicData(id:any){
    return this.http.get(`${baseUrl}/academic/${id}`);
  }

  public updateUserAcademicData(academicData:any){
    return this.http.put(`${baseUrl}/academic/update`,academicData);
  }
}
