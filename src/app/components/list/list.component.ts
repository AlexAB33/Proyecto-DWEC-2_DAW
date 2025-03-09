import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { IMeal } from '../../interfaces/meal';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  categories!: IMeal[];
  areas!: IMeal[];
  ingredients!: IMeal[];

  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.mealService.listAllCategories().subscribe(
      (item) => this.categories = item.meals
    );

    this.mealService.listAllAreas().subscribe(
      (item) => this.areas = item.meals
    );

    this.mealService.listAllIngredients().subscribe(
      (item) => this.ingredients = item.meals
    );
  }
}
