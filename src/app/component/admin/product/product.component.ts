import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppResponse } from 'src/app/model/appResponse';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class AdminProductComponent {
  book: Book = {
    categoryId: 1,
    title: 'asds',
    description: 'sdsa',
    author: 'sadsa',
    price: 10,
  };

  file = '';

  products: Book[] = [];
  categories: Category[] = [];
  constructor(
    private bookService: BookService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (response: AppResponse) => {
        console.log(response.data);
        this.products = response.data;
      },
      error: (err) => {
        console.log(err?.error?.error?.message);
      },
    });

    this.categoryService.getCategories().subscribe({
      next: (response: any) => {
        this.categories = response.data;
      },
      error: (err) => {
        console.log(err?.error?.error?.message);
      },
    });
  }

  addBook(productForm: NgForm) {
    if (productForm.valid) {
      const formData = new FormData();

      console.log(productForm);

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      formData.append('image', this.file);
      formData.append('categoryId', productForm.value.categoryId);
      formData.append('title', productForm.value.title);
      formData.append('description', productForm.value.description);
      formData.append('author', productForm.value.author);
      formData.append('price', productForm.value.price);

      console.log(formData);
      console.log('image', productForm.value.image);
      console.log('categoryId', productForm.value.categoryId);
      console.log('title', productForm.value.title);
      console.log('description', productForm.value.description);
      console.log('author', productForm.value.author);
      console.log('price', productForm.value.price);

      this.bookService.postBook(formData).subscribe({
        next: (response: AppResponse) => {
          console.log(response);
          productForm.reset();
        },
        error: (err) => {
          console.log(err?.error?.error?.message);
        },
        complete: () => console.log('There are no more action happen.'),
      });
    }
  }

  onEdit(category: any) {
    // this.categoryModel = category;
  }

  onDelete(id: number | undefined) {
    if (id !== undefined) {
      this.bookService.deleteBook(id).subscribe({
        next: (response: any) => {
          this.products = response.data;
        },
        error: (err) => {
          console.log(err?.error?.error?.message);
        },
      });
    }
  }

  onSubmit(form: NgForm): void {}

  onFileChange(event: any) {
    const fileInput = event.target;

    if (fileInput && fileInput.files.length > 0) {
      this.file = fileInput.files[0];

      console.log('Selected file:', this.file);
    }
  }
}
