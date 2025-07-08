import { Injectable, signal } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // totalBlogs: number = 0;
  totalBlogs = new BehaviorSubject<number>(0)
  // pageSize: number = 3;

  pageSize = new BehaviorSubject<number>(0);


  // httpUrl = 'https://localhost:7073/api/BlogPosts'; // Example API URL
  httpUrl = 'https://localhost:7073/api/Post'; // API URL Development
  // httpUrl = 'http://localhost:8084/api/Post'; // IIS API URL
  constructor(private http: HttpClient) { }

  getBlogsFromApi() {
    return this.http.get<Blog[]>(this.httpUrl + "/GetAllPost");
  }

  getBlogFromApiById(slug: string): Observable<Blog> | undefined {
    return this.http.get<Blog>(this.httpUrl + "/GetPostDetail/?slug=" + slug);
  }

  getBlogsPaginated(pageNumber: number, pageSize: number): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.httpUrl}/GetPaginationPost?pageIndex=${pageNumber}&pageSize=${pageSize}`);
  }

  addBlog(blogData: any): Observable<Blog> {
    return this.http.post<Blog>(this.httpUrl + "/AddPost", blogData);
  }

  getPostByCategory(category: string, pageNumber: number, pageSize: number): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.httpUrl}/GetPagingPostByCategory?category=${category}&pageIndex=${pageNumber}&pageSize=${pageSize}`);
  }

  getPostCountByCategory(category: string): Observable<number> {
    return this.http.get<number>(`${this.httpUrl}/GetPostCountByCategory?category=${category}`);
  }

  getGetegories(): Observable<string[]> {
    return this.http.get<string[]>(this.httpUrl + "/GatCategories");
  }



}
