import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../interfaces/blog';
import { catchError, map } from 'rxjs';
import { categoryPageIndex, categoryPageSize } from '../config.json';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-categorized-blogs',
  imports: [BlogCardComponent, PaginationComponent],
  templateUrl: './categorized-blogs.component.html',
  styleUrl: './categorized-blogs.component.css'
})
export class CategorizedBlogsComponent {
  paginatedBlogs: Blog[] | undefined = [];
  category: string = '';

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.pageSize.next(categoryPageSize);
    this.route.paramMap.subscribe(routeParam => {
      this.getPostCountByCategory(routeParam.get('category')!);
      this.getPaginatedBlogs(routeParam.get('category')!, categoryPageIndex, categoryPageSize);
      this.category = routeParam.get('category')!;
    })


  }

  getPostCountByCategory(category: string) {
    this.blogService.getPostCountByCategory(category).subscribe({
      next: (data) => {
        console.log('getPostCountByCategory: ', data);
        this.blogService.totalBlogs.next(data);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  getPaginatedBlogs(category: string, pageIndex: number, pageSize: number): void {
    this.blogService.getPostByCategory(category, pageIndex, pageSize).pipe(
      map((blogs: Blog[]) => {
        this.paginatedBlogs = blogs;
        return blogs;
      }),
      catchError((error) => {
        throw error;
      })
    ).subscribe((blogs) => {
      console.log('categorized paginated blogs:', blogs as Blog[]);
    });
  }

  onPageChange(page: number): void {
    this.getPaginatedBlogs(this.category, page, categoryPageSize);
  }
}
