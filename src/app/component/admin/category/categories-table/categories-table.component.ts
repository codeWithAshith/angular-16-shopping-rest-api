import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Category } from "src/app/model/category";
import { CategoryService } from "src/app/service/category.service";

@Component({
  selector: "app-categories-table",
  templateUrl: "./categories-table.component.html",
})
export class CategoriesTableComponent {
  @Input() categories: Category[] = [];

  @Output() editEmitter = new EventEmitter<Category>();
  @Output() deleteEmitter = new EventEmitter<number | undefined>();

  onEdit(category: Category) {
    // this.editEmitter.emit(category);
    let newObject = { id: category.id, title: category.title };
    this.editEmitter.emit(newObject);
  }

  onDelete(id: number | undefined) {
    this.deleteEmitter.emit(id);
  }
}
