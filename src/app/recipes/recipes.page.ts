import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) { 
  }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }
}

export interface Recipe {
  id: string;
  title: string;
  imageUrl: string;
  ingredients: string[];
}
