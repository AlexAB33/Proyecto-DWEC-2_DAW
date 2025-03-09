import { IMeal } from './../interfaces/meal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_BASE = 'https://www.themealdb.com/api/json/v1/1';
interface ApiResponse {
  meals: IMeal[];
}

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }

  getMealById(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/lookup.php?i=${id}`);
  }

  getMealByName(name: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/search.php?s=${name}`);
  }

  getMealByFirstLetter(letter: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/search.php?f=${letter}`);
  }

  getMealByIngredient(ingredient: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/filter.php?i=${ingredient}`);
  }

  getMealByCategory(category: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/filter.php?c=${category}`);
  }

  getMealByArea(area: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/filter.php?a=${area}`);
  }

  getRandomMeal(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/random.php`);
  }

  listAllCategories(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/list.php?c=list`);
  }

  listAllAreas(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/list.php?a=list`);
  }

  listAllIngredients(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/list.php?i=list`);
  }
}
