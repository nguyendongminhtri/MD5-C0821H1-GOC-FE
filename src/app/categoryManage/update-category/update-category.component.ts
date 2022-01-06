import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
category: Category;
// form: any = {};
  status = 'Please fill in the form to update Category';
  error1: any = {
    message: "no_name_category"
  }
  success: any = {
    message: "yes"
  }
  constructor(private actRouter: ActivatedRoute,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(ctgId =>{
      const id = +ctgId.get('id');
      console.log('id === ',id);
      this.categoryService.detailCategory(id).subscribe(category =>{
        this.category = category;
        console.log('category voi id', this.category);
      })
    })
  }

  changeAvatar($event: string) {
    this.category.avatarCategory = $event;
  }

  ngSubmit() {
    this.categoryService.updateCategory(this.category.id, this.category).subscribe(data =>{
      console.log('data --> ', data);
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status = 'The name category is existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Update Success!'
      }
    })
  }
}
