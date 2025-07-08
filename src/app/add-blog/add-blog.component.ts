import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { CommonModule } from '@angular/common';
import { NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';
// import { EditorConfig, ST_BUTTONS } from 'ngx-simple-text-editor';
import {
  EditorConfig,
  UNDO_BUTTON, REDO_BUTTON, REMOVE_FORMAT_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON, UNDERLINE_BUTTON,
  STRIKE_THROUGH_BUTTON, JUSTIFY_LEFT_BUTTON, JUSTIFY_CENTER_BUTTON, JUSTIFY_RIGHT_BUTTON, JUSTIFY_FULL_BUTTON,
  ORDERED_LIST_BUTTON, UNORDERED_LIST_BUTTON, INDENT_BUTTON, OUTDENT_BUTTON, SUBSCRIPT_BUTTON, SUPERSCRIPT_BUTTON,
  FONT_SIZE_SELECT, LINK_INPUT, UNLINK_BUTTON, IMAGE_INPUT, FORE_COLOR,
} from 'ngx-simple-text-editor';


@Component({
  selector: 'app-add-blog',
  imports: [CommonModule, ReactiveFormsModule, NgxSimpleTextEditorModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent implements OnInit {

  config: EditorConfig = {
    placeholder: 'Type something...',
    buttons: [
      { ...UNDO_BUTTON, title: 'undo' },
      { ...REDO_BUTTON, title: 'redo' },
      { ...REMOVE_FORMAT_BUTTON, title: 'remove format' },
      SEPARATOR,
      { ...BOLD_BUTTON, title: 'bold' },
      { ...ITALIC_BUTTON, title: 'italic' },
      { ...UNDERLINE_BUTTON, title: 'underline' },
      { ...STRIKE_THROUGH_BUTTON, title: 'strikethrough' },
      SEPARATOR,
      { ...JUSTIFY_LEFT_BUTTON, title: 'align left' },
      { ...JUSTIFY_CENTER_BUTTON, title: 'align center' },
      { ...JUSTIFY_RIGHT_BUTTON, title: 'align right' },
      { ...JUSTIFY_FULL_BUTTON, title: 'align justify' },
      SEPARATOR,
      { ...ORDERED_LIST_BUTTON, title: 'ordered list' },
      { ...UNORDERED_LIST_BUTTON, title: 'unordered list' },
      SEPARATOR,
      { ...INDENT_BUTTON, title: 'indent' },
      { ...OUTDENT_BUTTON, title: 'outdent' },
      SEPARATOR,
      { ...SUBSCRIPT_BUTTON, title: 'subscript' },
      { ...SUPERSCRIPT_BUTTON, title: 'superscript' },
      SEPARATOR,
      {
        ...FONT_SIZE_SELECT, title: 'font size', items: [
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 4, label: '4' },
          { value: 5, label: '5' },
          { value: 6, label: '6' },
          { value: 7, label: '7' },
        ]
      },
      { ...LINK_INPUT, text: 'Create link', title: 'create link', label: 'Create link' },
      { ...UNLINK_BUTTON, title: 'unlink' },
      SEPARATOR,
      { ...FORE_COLOR, title: 'font color' },
      { ...IMAGE_INPUT, text: 'Add image', title: 'add image', label: 'Create image from link' },
    ],
  };

  blogForm = new FormGroup({
    title: new FormControl(''),
    subTitle: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    categoryName: new FormControl(''),
  });

  constructor(private blogService: BlogService) {

  }

  public ngOnInit(): void {

  }

  onSubmit(): void {
    debugger;
    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;
      console.log('Blog Data:', blogData);
      // Here you can call a service to save the blog data
      this.blogService.addBlog(blogData).subscribe(response => {
        console.log('Blog added successfully', response);
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
