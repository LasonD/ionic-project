import { Injectable } from '@angular/core';
import { Recipe } from './recipes.page';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "1",
      title: "Spaghetti Carbonara",
      imageUrl: "https://img.taste.com.au/86bOXAkG/taste/2016/11/carbonara-sauce-28894-1.jpeg",
      ingredients: ["Spaghetti", "Eggs", "Pecorino cheese", "Guanciale", "Black pepper", "Salt"]
    },
    {
      id: "2",
      title: "Chicken Alfredo",
      imageUrl: "https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4-768x1024.jpg",
      ingredients: ["Fettuccine pasta", "Chicken breast", "Heavy cream", "Parmesan cheese", "Garlic", "Butter", "Salt", "Black pepper"]
    },
    {
      id: "3",
      title: "Caprese Salad",
      imageUrl: "https://www.foodnetwork.com/content/dam/images/food/fullset/2003/9/22/0/tm1a35_caprese_salad.jpg",
      ingredients: ["Tomatoes", "Fresh mozzarella cheese", "Fresh basil leaves", "Extra-virgin olive oil", "Balsamic vinegar", "Salt", "Black pepper"]
    },
    {
      id: "4",
      title: "Chocolate Chip Cookies",
      imageUrl: "https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg",
      ingredients: ["All-purpose flour", "Baking soda", "Butter", "Granulated sugar", "Brown sugar", "Eggs", "Vanilla extract", "Chocolate chips", "Salt"]
    },
    {
      id: "5",
      title: "Caesar Salad",
      imageUrl: "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"]
    },
    {
      id: "6",
      title: "Margarita Pizza",
      imageUrl: "https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg",
      ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella cheese", "Fresh basil leaves", "Olive oil", "Salt"]
    },
    {
      id: "7",
      title: "Vegetable Stir-Fry",
      imageUrl: "https://media.istockphoto.com/id/617352836/photo/stir-fry-with-chicken.jpg?s=612x612&w=0&k=20&c=W_x_39ggrwzmcdWBZO4e4J440a645UPEAdzGv29tlxU=",
      ingredients: ["Broccoli", "Bell peppers", "Carrots", "Snap peas", "Tofu", "Soy sauce", "Sesame oil", "Garlic", "Ginger"]
    },
    {
      id: "8",
      title: "Classic Pancakes",
      imageUrl: "https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg",
      ingredients: ["All-purpose flour", "Milk", "Eggs", "Sugar", "Baking powder", "Salt", "Butter", "Maple syrup"]
    },
  ];

  constructor() { }

  public getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  public getRecipe(id: string) {
    return this.recipes.find(r => r.id === id);
  }

  public deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(r => r.id !== id);
  }
}
