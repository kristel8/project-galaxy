import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListView } from './views/product-list/product-list.view';
import { ProductDetailView } from './views/product-detail/product-detail.view';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigHttpInterceptor } from './commons/interceptors/config-http.interceptor';
import { AppInterceptorsModule } from './commons/interceptors/interceptors.module';
import { ProductFormView } from './views/product-form/product-form.view';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './commons/store/products/product.state';
import { environment } from 'src/environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CommonModule } from '@angular/common';
import { ProductCrudView } from './views/product-crud/product-crud.view';

@NgModule({
  declarations: [
    AppComponent,
    ProductListView,
    ProductDetailView,
    ProductFormView,
    ProductCrudView
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppInterceptorsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ProductState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }