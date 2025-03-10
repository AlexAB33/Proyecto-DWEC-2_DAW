import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { IMeal } from '../../interfaces/meal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  standalone: false
})
export class SearchComponent implements OnInit {
  result!: IMeal[];
  searchType!: string;
  searchInput!: string;

  constructor(
    private mealService: MealService,
    private router: Router
  ) {}

  // Función para buscar recetas
  search(type: string) {
    // Realizar la búsqueda según el tipo seleccionado
    switch(type) {
      // Por nombre
      case 'n':
        this.mealService.getMealByName(this.searchInput).subscribe(
          (item) => {
            this.result = item.meals;
          }
        );
        break;

      // Por primera letra
      case 'f':
        this.mealService.getMealByFirstLetter(this.searchInput).subscribe(
          (item) => {
            this.result = item.meals;
          }
        );
        break;

      // Por ingrediente
      case 'i':
        this.result = [];

        this.mealService.getMealByIngredient(this.searchInput).subscribe(
          (item) => {
            let mealsByIngredient = item.meals;

            mealsByIngredient.forEach(item => {
              this.mealService.getMealById(item.idMeal).subscribe(
                (mealById) => {
                  this.result.push(mealById.meals[0]);
                }
              );
            });
          }
        );
        break;

      // Por categoría
      case 'c':
        this.result = [];

        this.mealService.getMealByCategory(this.searchInput).subscribe(
          (item) => {
            let mealsByCategory = item.meals;

            mealsByCategory.forEach(item => {
              this.mealService.getMealById(item.idMeal).subscribe(
                (mealById) => {
                  this.result.push(mealById.meals[0]);
                }
              );
            });
          }
        );
        break;

      // Por área
      case 'a':
        this.result = [];

        this.mealService.getMealByArea(this.searchInput).subscribe(
          (item) => {
            let mealsByArea = item.meals;

            mealsByArea.forEach(item => {
              this.mealService.getMealById(item.idMeal).subscribe(
                (mealById) => {
                  this.result.push(mealById.meals[0]);
                }
              );
            });
          }
        );
        break;
    }
  }

  // Inicializar el componente
  ngOnInit() {
    // Valor por defecto
    this.searchType = 'n';

    // Rescatar los parámetros de la URL si existen
    if (this.router.url.includes('/search/')) {
      const params = this.router.url;
      const type = params.split('/')[2];
      const value = params.split('/')[3];

      // Asignar los parámetros a las variables de la clase
      this.searchType = type;
      this.searchInput = value;

      // Realizar la búsqueda según los parámetros de la URL
      this.search(type);
    }
  }

  // Función para navegar a la página de detalles
  details(id: string) {
    this.router.navigate(['/details', id]);
  }
}
