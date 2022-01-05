import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nameCategory', 'avatarCategory'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;
  categories: Category[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.getListCategory();
  }
  getListCategory() {
    this.categoryService.listCategory().subscribe(listCTG => {
      this.categories = listCTG;
      this.dataSource = new MatTableDataSource<Category>(this.categories);
      this.dataSource.paginator = this.paginator;
    });
  }
}
