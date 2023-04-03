import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute,
              private router: Router, private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });

    this.route.paramMap.subscribe(success => {
      // tslint:disable-next-line:radix
      const productId = Number.parseInt(success.get('productId'));
      console.log(productId);
      this.productService.getProductById(productId).subscribe(next => {
        const productCurrent = next;
        console.log(productCurrent);
        this.productForm.patchValue({
          id: productCurrent.id,
          name: productCurrent.name,
          price: productCurrent.price,
          description: productCurrent.description,
          category: productCurrent.category
        });
      });
    });
  }

  categories: Category[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(product).subscribe();
    this.router.navigate(['/product/list']);
  }

}
