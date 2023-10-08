import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  model:AddCategoryRequest;
  private addCategorySubscribtion?: Subscription;
  constructor(private categoryService:CategoryService){
    this.model={
      name:'fu',
      urlHandle:''
    }
  }
  onFormSubmit() {
    console.log(this.model);
    this.addCategorySubscribtion = this.categoryService.addCategory(this.model)
    // this.addCategorySubscribtion = this.categoryService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        console.log('this is success')
        //this.router.navigateByUrl('/admin/categories');
      }
     })
  }

  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }
}
