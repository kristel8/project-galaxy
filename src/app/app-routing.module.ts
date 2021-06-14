import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './commons/guards/is-auth.guard';
import { ProductDetailResolver } from './commons/resolvers/product-detail.resolver';
import { ProductListResolver } from './commons/resolvers/product-list.resolver';
import { ProductCrudView } from './views/product-crud/product-crud.view';
import { ProductDetailView } from './views/product-detail/product-detail.view';
import { ProductFormView } from './views/product-form/product-form.view';
import { ProductListView } from './views/product-list/product-list.view';

const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  {
    path: 'crud',
    component: ProductCrudView
  },
  {
    path: 'crear',
    component: ProductFormView
  },
  {
    path: 'actualizar/:productId',
    component: ProductFormView
  },
  {
    path: 'productos',
    component: ProductListView,
    resolve: {
      products: ProductListResolver
    }
  },
  {
    path: 'productos/:productId',
    component: ProductDetailView,
    resolve: {
      product: ProductDetailResolver
    }
  },
  {
    path: 'comprar',
    loadChildren: () => import('./features/purchase/purchase.module').then(m => m.PurchaseModule) /* Se considera una problema, esta acción cargará el código al ingresar a la ruta (Lazyloading) */
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canLoad: [IsAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
