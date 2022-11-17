import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostCategoryComponent } from './pages/post-category/post-category.component';
import { PostComponent } from './pages/post/post.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WritePostComponent } from './pages/write-post/write-post.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'post/category/:id', component: PostCategoryComponent },
  { path: 'write-post', component: WritePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
