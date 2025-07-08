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
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.blogService.pageSize.next(categoryPageSize);
    this.blogService.getPostCountByCategory(this.category).subscribe({
      next: (data) => {
        console.log('getPostCountByCategory: ', data);
        // this.blogService.totalBlogs = data;
        this.blogService.totalBlogs.next(data);
      },
      error: (err) => {
        console.error(err);
      }
    })

    this.getPaginatedBlogs(categoryPageIndex, categoryPageSize);
  }


  getPaginatedBlogs(pageIndex: number, pageSize: number): void {
    this.blogService.getPostByCategory(this.category, pageIndex, pageSize).pipe(
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
    this.getPaginatedBlogs(page, categoryPageSize);
  }
}
