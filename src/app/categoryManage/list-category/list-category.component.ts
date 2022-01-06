import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/Category';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nameCategory', 'avatarCategory', 'edit', 'delete'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;
  categories: Category[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private categoryService: CategoryService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getListCategory();
  }

  getListCategory() {
    console.log('goi ham lay list');
    this.categoryService.listCategory().subscribe(listCTG => {
      this.categories = listCTG;
      this.dataSource = new MatTableDataSource<Category>(this.categories);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategoryById(id).subscribe(() => {
      this.getListCategory();
    });
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('ressult sau khi bam nut --> ', result);
      if (result) {
        this.deleteCategory(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
