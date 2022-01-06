import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Category} from '../model/Category';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
//API_LOCAL
  API_CATEGORY = environment.API_LOCAL+'category';
  constructor(private http: HttpClient) { }
  createCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.API_CATEGORY, category)
  }
  listCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.API_CATEGORY+'/list')
  }
  detailCategory(id: number): Observable<Category>{
    return this.http.get<Category>(this.API_CATEGORY+'/'+id);
    // return this.http.get<Category>(`${this.API_CATEGORY}/${id}`);
  }
  updateCategory(id: number, category: Category): Observable<Category>{
    return this.http.put<Category>(this.API_CATEGORY+'/'+id, category)
  }
  deleteCategoryById(id: number): Observable<Category>{
    return this.http.delete<Category>(this.API_CATEGORY+'/'+id);
  }
}
