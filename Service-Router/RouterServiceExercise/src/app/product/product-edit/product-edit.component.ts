import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(success => {
      const productId = success.get('productId');
      console.log(productId);
      const productCurrent = this.productService.getProductById(productId);
      console.log(productCurrent);
      this.productForm.patchValue({
        id: productCurrent.id,
        name: productCurrent.name,
        price: productCurrent.price,
        description: productCurrent.description
      });
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(product);
    this.router.navigate(['/product/list']);
  }

}
