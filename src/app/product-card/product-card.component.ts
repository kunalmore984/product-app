/**
 * ProductCardComponent
 * ----------------------
 * This component is responsible for displaying basic information about a product, including its
 * name, price, and description, along with a button that allows users to view more detailed information.
 *
 * Usage Example:
 * <app-product-card 
 *    [product]="productData" 
 *    (viewDetails)="handleViewDetails($event)">
 * </app-product-card>
 *
 * Inputs:
 *  - product: An object representing a product with properties:
 *      - id: Unique identifier for the product.
 *      - name: The product's name.
 *      - price: The product's price.
 *      - description: A short description of the product.
 *
 * Outputs:
 *  - viewDetails: An event emitter that outputs the product id (number) when the "View Details"
 *    button is clicked.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for structural directives and pipes

@Component({
  selector: 'app-product-card',// Component selector for use in templates
  standalone: true,            // Indicates that this component is self-contained and does not require a separate NgModule
  imports: [CommonModule],      // Bringing in Angular common directives (like *ngIf, *ngFor)
  templateUrl: './product-card.component.html', // Path to the external HTML template
  styleUrls: ['./product-card.component.css']     // Path to the external CSS file for styles
})

export class ProductCardComponent {
  // Input property to receive product data from the parent component.
  // The product object must include id, name, price, and description.
  @Input() product!: { id: number; name: string; price: number; description: string };
  @Output() viewDetails = new EventEmitter<number>();

  onViewDetails(): void {
    //To ensure we emit a number (the product id)
    // Output event emitter to notify the parent component when the user wishes to see more details.
    this.viewDetails.emit(this.product.id);
  }
}
