import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../category';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) {
    this.getAllCategory();
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.saveProduct(product);
    this.router.navigate(['/product/list']);
  }

  getAllCategory(): void {
    this.categoryService.getAll().subscribe(next => {
      console.log(next);
      this.categories = next;
    });
  }

}
