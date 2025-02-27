import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // For directives like *ngFor
import { Router } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

/**
 * ProductListComponent
 * ----------------------
 * This component is responsible for displaying a list of products retrieved from the ProductService.
 * Each product is rendered using the reusable ProductCardComponent. When a user selects to view details
 * of a specific product, the component navigates to a detailed view using Angular's Router.
 */
@Component({
  selector: 'app-product-list',          // The component's HTML element selector
  standalone: true,                      // Declares that this component is standalone (doesn't need to be declared in a module)
  imports: [CommonModule, ProductCardComponent], // Import necessary modules and child components
  templateUrl: './product-list.component.html',  // External HTML template for component layout
  styleUrls: ['./product-list.component.css']      // External CSS file for component-specific styles
})
export class ProductListComponent implements OnInit {
  // Array to hold the list of products fetched from the ProductService.
  products: Product[] = [];

  /**
   * Constructor
   * -----------
   * @param productService - Service to fetch product data.
   * @param router - Angular Router to navigate between routes.
   */
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  /**
   * ngOnInit Lifecycle Hook
   * -------------------------
   * Called after the component has been initialized.
   * It subscribes to the ProductService to fetch a list of products and assigns them to the products array.
   */
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  /**
   * onViewDetails
   * --------------
   * This method is triggered when a user clicks on the "View Details" button from a ProductCardComponent.
   * It navigates to the detailed view of the selected product.
   *
   * @param productId - The unique identifier of the selected product.
   */
  onViewDetails(productId: number): void {
    // Navigate to the detailed view using the product id.
    // Adjust the route path as per your routing configuration.
    this.router.navigate(['/products', productId]);
  }
}
