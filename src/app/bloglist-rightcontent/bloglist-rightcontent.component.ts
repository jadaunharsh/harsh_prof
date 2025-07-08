import { Component, Input } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bloglist-rightcontent',
  imports: [CommonModule, RouterModule],
  templateUrl: './bloglist-rightcontent.component.html',
  styleUrl: './bloglist-rightcontent.component.css'
})
export class BloglistRightcontentComponent {
  @Input() blog!: Blog;
}
