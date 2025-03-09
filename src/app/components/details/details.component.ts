import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { IMeal } from '../../interfaces/meal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  result!: IMeal;

  constructor(private mealService: MealService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.mealService.getMealById(this.route.snapshot.params['id']).subscribe(
      (meal) => {
          this.result = meal.meals[0];
          this.mealService.setIngredientsAndMeasures(this.result);
          this.mealService.setTags(this.result);
      }
    );
  }
}
