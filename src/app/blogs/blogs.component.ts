import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../interfaces/blog';
import { BloglistRightcontentComponent } from "../bloglist-rightcontent/bloglist-rightcontent.component";
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blogs',
  imports: [BloglistRightcontentComponent, RouterModule, BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

}

