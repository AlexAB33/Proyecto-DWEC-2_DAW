import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { IMeal } from '../../interfaces/meal';
import { Router } from '@angular/router';
import { TagsPipe } from '../../pipes/tags.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  standalone: false
})
export class SearchComponent {
  result!: IMeal[];
  searchType: string = 'n';
  searchInput!: string;

  constructor(
    private mealService: MealService,
    private router: Router,
    private tagsPipe: TagsPipe
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
            this.tagsPipe.transform(this.result);
          }
        );
        break;

      // Por primera letra
      case 'f':
        this.mealService.getMealByFirstLetter(this.searchInput).subscribe(
          (item) => {
            this.result = item.meals;
            this.tagsPipe.transform(this.result);
          }
        );
        break;

      // Por ingrediente
      case 'i':
        this.result = [];

        this.mealService.getMealByIngredient(this.searchInput).subscribe(
          (item) => {
            let mealsByIngredient = item.meals;

            // Recorrer las comidas por ingrediente (obtener por ingrediente no devuelve todos los atributos de la comida)
            mealsByIngredient.forEach(item => {
              // Obtener la comida por su id (uno de los valores que devuelve, lo usamos para obtener el resto de atributos de la comida)
              this.mealService.getMealById(item.idMeal).subscribe(
                (mealById) => {
                  this.result.push(mealById.meals[0]);
                  this.tagsPipe.transform(this.result);
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

            // Recorrer las comidas por categoría (obtener por categoría no devuelve todos los atributos de la comida)
            mealsByCategory.forEach(item => {
              // Obtener la comida por su id (uno de los valores que devuelve, lo usamos para obtener el resto de atributos de la comida)
              this.mealService.getMealById(item.idMeal).subscribe(
                (mealById) => {
                  this.result.push(mealById.meals[0]);
                  this.tagsPipe.transform(this.result);
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

            // Recorrer las comidas por área (obtener por área no devuelve todos los atributos de la comida)
            mealsByArea.forEach(item => {
              // Obtener la comida por su id (uno de los valores que devuelve, lo usamos para obtener el resto de atributos de la comida)
              this.mealService.getMealById(item.idMeal).subscribe(
                (mealById) => {
                  this.result.push(mealById.meals[0]);
                  this.tagsPipe.transform(this.result);
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
