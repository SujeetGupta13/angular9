import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HighlightPipe } from './highlight.pipe';
import { HoverEffectPipe } from './hover-effect.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightPipe,
    HoverEffectPipe,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
