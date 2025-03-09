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

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ) {}

  // Inicializar el componente
  ngOnInit(): void {
    // Obtener los detalles de la comida pasando el id de la comida
    this.mealService.getMealById(this.route.snapshot.params['id']).subscribe(
      (item) => {
        this.result = item.meals[0];
      }
    );
  }
}
