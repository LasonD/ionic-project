import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipes.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipe: Recipe | null = null;

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (!params.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }

      const recipeId = params.get('recipeId')!;
      this.recipe = this.recipeService.getRecipe(recipeId)!;
    });
  }

  public deleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: `Do you really want to delete recipe '${this.recipe?.title}'?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.recipe?.id!);
            this.router.navigate(['recipes']);
          }
        }
      ]
    }).then(alertElement => {
      alertElement.present()
    })
  }
}
