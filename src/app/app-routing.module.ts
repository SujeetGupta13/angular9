import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'learning', component: TasksComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'product-view', component: ProductViewComponent},
  { path: 'product-edit', component: ProductEditComponent},
  { path: 'products',
    children: [
      { path: 'view', component: ProductViewComponent},
      { path: 'edit', component: ProductEditComponent},
      { path: 'view/:id', component: ProductIdComponent}
    ]},
  { path: 'product/10', component: ProductIdComponent}, //this value 10 shud be parameterized
  { path: 'order/:id/:id2', component: OrderViewComponent},
  { path: 'search', component: SearchComponent},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  
  { path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard]},
  { path: '**', component: PageNotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
