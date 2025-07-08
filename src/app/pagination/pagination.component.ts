import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../interfaces/blog';
import { pageIndex, pageSize } from '../config.json';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  totalBlogs: number = 0;
  pageSize: number = 0; // Example page size, can be adjusted as needed
  currentPage: number = 1; // Current page number
  @Output() selectedPage = new EventEmitter<number>();


  constructor(private blogService: BlogService) {
    this.blogService.totalBlogs.subscribe(x => {
      this.totalBlogs = x;
    });
    this.blogService.pageSize.subscribe(x => {
      this.pageSize = x;
    });
  }

  ngOnInit(): void {
    // this.blogService.getBlogsFromApi().subscribe((blogs: Blog[]) => {
    //   this.totalBlogs = blogs.length;
    //   console.log('Total blogs:', this.totalBlogs);
    // });

  }

  getTotalPages(): number {
    return Math.ceil(this.totalBlogs / this.pageSize);
  }

  counter(i: number) {
    return new Array(i);
  }

  onPageChange(page: number): void {
    debugger;
    this.selectedPage.emit(page);
    this.currentPage = page;
  }
}
