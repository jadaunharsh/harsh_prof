import { Component } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  blog?: Blog;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogService.getBlogById(id);
  }
}
