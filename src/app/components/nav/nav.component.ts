import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  categories: string[] = [];
  activeMenu = false;
  counter = 0;

  constructor(
    private productsService: ProductsService,
    private storeService: StoreService
  ) {}
  ngOnInit(): void {
    this.productsService.getAllCategories()
    .subscribe(data => {
      this.categories = data;
    });

    this.storeService.cart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
