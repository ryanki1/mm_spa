import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasketComponent } from '@nx-mma-spa/basket';

@Component({
  imports: [RouterModule, BasketComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-mma-spa';
}
