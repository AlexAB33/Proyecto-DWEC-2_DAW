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

  setIngredientsAndMeasures(meal: any): void {
    const ingredients: string[] = [];
    const measures: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient) {
        ingredients.push(ingredient);
        measures.push(measure);
      } else {
        break;
      }
    }
    meal.strIngredients = ingredients;
    meal.strMeasures = measures;
  }

  setTags(meal: any): void {
    if (meal.strTags) {
      meal.strTags = meal.strTags.replaceAll(",", ", ");
    } else {
      meal.strTags = "No tags";
    }
  }
}
