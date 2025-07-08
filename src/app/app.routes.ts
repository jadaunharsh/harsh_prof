import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { authGuardGuard } from './services/auth-guard.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
    { path: 'contact', component: ContactComponent },
    {
        path: 'blogs', loadComponent: () =>
            import('./blogs/blogs.component')
                .then(b => b.BlogsComponent), canActivate: [authGuardGuard]
    },
    {
        path: 'blogs/:category', loadComponent: () =>
            import('./categorized-blogs/categorized-blogs.component')
                .then(c => c.CategorizedBlogsComponent)
    },
    { path: 'blog/:slug', component: BlogDetailComponent },
    { path: 'addblog', component: AddBlogComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
    { path: '**', component: HomeComponent },
];
