import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { IMeal } from '../../interfaces/meal';
import { IngredientsMeasuresPipe } from '../../pipes/ingredients-measures.pipe';
import { TagsPipe } from '../../pipes/tags.pipe';

@Component({
  selector: 'app-random',
  standalone: false,
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent implements OnInit {
  result!: IMeal;

  constructor(
    private mealService: MealService,
    private ingredientsMeasuresPipe: IngredientsMeasuresPipe,
    private tagsPipe: TagsPipe
  ) {}

  ngOnInit(): void {
    this.getRandomMeal();
  }

  getRandomMeal() {
    this.mealService.getRandomMeal().subscribe((item) => {
      this.result = item.meals[0];
      this.result = this.ingredientsMeasuresPipe.transform(this.result);
      this.result = this.tagsPipe.transformOne(this.result);
    });
  }

  reload(): void {
    window.location.reload();
  }
}
