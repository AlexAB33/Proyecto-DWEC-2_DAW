import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { IMeal } from '../../interfaces/meal';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrl: './random.component.css',
  standalone: false
})
export class RandomComponent implements OnInit {
  result!: IMeal;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getRandomMeal().subscribe(
      (item) => {
        this.result = item.meals[0];
        this.mealService.setIngredientsAndMeasures(this.result);
        this.mealService.setTags(this.result);
      }
    );
  }

  recargar(): void {
    window.location.reload();
  }
}
