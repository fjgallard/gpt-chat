import { Component } from '@angular/core';

@Component({
  selector: 'chat-model-response',
  templateUrl: './model-response.component.html',
  styleUrls: ['./model-response.component.scss']
})
export class ModelResponseComponent {

  responseContent = `
    Sure, here is a sample 1500-calorie meal plan for one day: \n\n

    Breakfast:\n\n

      - Oatmeal with berries and nuts (300 calories)\n
      - 1 cup oatmeal cooked in water or milk, topped with 1/2 cup berries and 1 tablespoon nuts
  `
}
