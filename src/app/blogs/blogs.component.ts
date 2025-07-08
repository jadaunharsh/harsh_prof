import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../interfaces/blog';
import { BloglistRightcontentComponent } from "../bloglist-rightcontent/bloglist-rightcontent.component";
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { catchError, map } from 'rxjs';
import { PaginationComponent } from "../pagination/pagination.component";
import { pageIndex, pageSize } from '../config.json';

@Component({
  selector: 'app-blogs',
  imports: [BloglistRightcontentComponent, RouterModule, BlogCardComponent, PaginationComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];
  paginatedBlogs: Blog[] | undefined = [];
  // pageIndex: number = 1;
  // pageSize: number = 2; // Example page size, can be adjusted as needed

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.pageSize.next(pageSize);
    this.blogService.getBlogsFromApi().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
      console.log('getBlogsFromApi length: ', blogs.length);
      // this.blogService.totalBlogs = blogs.length;
      this.blogService.totalBlogs.next(blogs.length);
    });

    this.getPaginatedBlogs(pageIndex, pageSize);
  }


  getPaginatedBlogs(pageIndex: number, pageSize: number): void {
    this.blogService.getBlogsPaginated(pageIndex, pageSize).pipe(
      map((blogs: Blog[]) => {
        this.paginatedBlogs = blogs;
        return blogs;
      }),
      catchError((error) => {
        throw error;
      })
    ).subscribe((blogs) => {
      console.log('Paginated blogs:', blogs as Blog[]);
    });
  }

  onPageChange(page: number): void {
    this.getPaginatedBlogs(page, pageSize);
  }
}

