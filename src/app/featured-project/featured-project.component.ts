import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { catchError, map } from 'rxjs';
import { Blog } from '../interfaces/blog';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-featured-project',
  imports: [BlogCardComponent],
  templateUrl: './featured-project.component.html',
  styleUrl: './featured-project.component.css'
})
export class FeaturedProjectComponent implements OnInit {
  paginatedBlogs: Blog[] | undefined = [];
  pageIndex = 1;
  pageSize = 4;
  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
    this.getPaginatedBlogs(this.pageIndex, this.pageSize);
  }

  getPaginatedBlogs(pageIndex: number, pageSize: number): void {
    this.blogService.getBlogsPaginated(pageIndex, pageSize).subscribe(blogs => {
      this.paginatedBlogs = blogs;
    });
  }

  // featureCards = [
  //   {
  //     imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
  //     cardTitle: 'Card title 1',
  //     cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  //   },
  //   {
  //     imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
  //     cardTitle: 'Card title 2',
  //     cardText: 'This is a short card.',
  //   },
  //   {
  //     imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
  //     cardTitle: 'Card title 3',
  //     cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
  //   },
  //   {
  //     imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
  //     cardTitle: 'Card title 4',
  //     cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  //   }
  // ];
}
