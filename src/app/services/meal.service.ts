import { IMeal } from './../interfaces/meal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// URL base de la API
const URL_BASE = 'https://www.themealdb.com/api/json/v1/1';

// Interfaz para la respuesta de la API (los resultados se guardan en el array meals)
interface ApiResponse {
  meals: IMeal[];
}

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }

  // Obtener una comida por su id
  getMealById(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/lookup.php?i=${id}`);
  }

  // Obtener una comida por su nombre
  getMealByName(name: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/search.php?s=${name}`);
  }

  // Obtener una comida por su primera letra
  getMealByFirstLetter(letter: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/search.php?f=${letter}`);
  }

  // Obtener una comida por su ingrediente
  getMealByIngredient(ingredient: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/filter.php?i=${ingredient}`);
  }

  // Obtener una comida por su categoría
  getMealByCategory(category: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/filter.php?c=${category}`);
  }

  // Obtener una comida por su área
  getMealByArea(area: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/filter.php?a=${area}`);
  }

  // Obtener una comida aleatoria
  getRandomMeal(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/random.php`);
  }

  // Obtener todas las categorías
  listAllCategories(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/list.php?c=list`);
  }

  // Obtener todas las áreas
  listAllAreas(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/list.php?a=list`);
  }

  // Obtener todos los ingredientes
  listAllIngredients(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/list.php?i=list`);
  }
}
