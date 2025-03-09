import { Component } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { IMeal } from '../../interfaces/meal';
import { Router } from '@angular/router';
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

  constructor(private mealService: MealService, private router: Router) {}

  search(type: string) {
    switch(type) {
      // Por nombre
      case 'n':
        this.mealService.getMealByName(this.searchInput).subscribe(
          (item) => {
            this.result = item.meals;
            this.result.forEach(item => { this.mealService.setTags(item); });
          }
        );
        break;

      // Por primera letra
      case 'f':
        this.mealService.getMealByFirstLetter(this.searchInput).subscribe(
          (item) => {
            this.result = item.meals;
            this.result.forEach(item => { this.mealService.setTags(item); });
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
                  this.mealService.setTags(mealById.meals[0]);
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
                  this.mealService.setTags(mealById.meals[0]);
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
                  this.mealService.setTags(mealById.meals[0]);
                }
              );
            });
          }
        );
        break;
    }
  }

  details(id: string) {
    this.router.navigate(['/details', id]);
  }
}
