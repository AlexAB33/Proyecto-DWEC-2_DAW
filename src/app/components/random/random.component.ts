import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { IMeal } from '../../interfaces/meal';

@Component({
  selector: 'app-random',
  standalone: false,
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent implements OnInit {
  result!: IMeal;

  constructor(
    private mealService: MealService
  ) {}

  // Inicializar el componente
  ngOnInit(): void {
    this.getRandomMeal();
  }

  // Obtener una comida aleatoria
  getRandomMeal(): void {
    this.mealService.getRandomMeal().subscribe((item) => {
      this.result = item.meals[0];
    });
  }

  // Recargar la página
  reload(): void {
    window.location.reload();
  }
}
