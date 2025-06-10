import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'blog/:id', component: BlogDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
    { path: '**', component: HomeComponent },
];
