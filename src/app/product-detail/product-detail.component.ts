import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule to support common Angular directives and pipes
import { ProductService, Product } from '../product.service';

/**
 * ProductDetailComponent
 * ------------------------
 * This component displays detailed information about a specific product.
 * It extracts the product ID from the route parameters and retrieves the product details
 * from the ProductService. The component is designed to be used in routing with a path
 * that includes the product ID (e.g., 'product/:id').
 */
@Component({
  selector: 'app-product-detail', // Component selector for routing and template use
  standalone: true,                // Declares this component as standalone, removing the need for an NgModule
  imports: [CommonModule],         // Import Angular's CommonModule for structural directives like *ngIf
  templateUrl: './product-detail.component.html', // External HTML template for the component's view
  styleUrls: ['./product-detail.component.css']      // External CSS file for component-specific styles
})
export class ProductDetailComponent implements OnInit {
  // Holds the product data to be displayed.
  // It will be populated after fetching data from the ProductService.
  product: Product | undefined;

  /**
   * Constructor for ProductDetailComponent.
   * 
   * @param route - Provides access to the route parameters, allowing retrieval of the product ID.
   * @param productService - A service that handles fetching product data.
   */
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  /**
   * ngOnInit lifecycle hook.
   * Called after the component's data-bound properties are initialized.
   * Retrieves the product ID from the route and fetches the corresponding product details.
   */
  ngOnInit(): void {
    // Extract the 'id' parameter from the route and convert it to a number.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Call the ProductService to fetch the product data using the retrieved ID.
    // Subscribe to the observable to update the component's product property when data is received.
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }
}
