﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//3rd part
import { NgPipesModule } from 'ngx-pipes';
import { MarkdownModule } from 'angular2-markdown';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

import { BlogService } from './blog.service';
import { TxtEditorComponent } from './txt-editor/txt-editor.component';
import { PostListComponent } from './post-list/post-list.component';


@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    NgPipesModule,
    MarkdownModule.forRoot()
  ],
  entryComponents: [

  ],
  providers: [BlogService],
  //exports:[BlogModule],
  declarations: [
    BlogComponent,
    PostComponent,
    TxtEditorComponent,
    PostListComponent]
})
export class BlogModule { }
