import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.cmponent';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { PostsModule } from './posts/posts.module';
import { from } from 'rxjs';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AryanComponent } from './aryan/aryan.component';
import { MypurchaseComponent } from './mypurchase/mypurchase.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './profile/info/info.component';
import { SelectorComponent } from './selector/selector.component';
import { SelectorDimensionComponent } from './selector/selector-dimension/selector-dimension.component';
import { FigureComponent } from './selector/figure/figure.component';
import { SelectorUnitComponent } from './selector/selector-unit/selector-unit.component';
import { SearchBarComponent } from './recommendations/search-bar/search-bar.component';
import { ResultComponent } from './recommendations/result/result.component';
import { ScoresComponent } from './home/scores/scores.component';
import { ButtonComponent } from './home/button/button.component';
import { ShippingPolicyComponent } from './home/shipping-policy/shipping-policy.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CoupounsComponent } from './home/coupouns/coupouns.component';
import { CarouselResultComponent } from './home/carousel/carousel-result/carousel-result.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { RecordComponent } from './purchases/record/record.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitlebarComponent,
    FooterComponent,
    HomeComponent,
    RecommendationsComponent,
    ProfileComponent,
    ErrorComponent,
    TestComponent,
    AryanComponent,
    MypurchaseComponent,
    LogoutComponent,
    SettingsComponent,
    InfoComponent,
    SelectorComponent,
    SelectorDimensionComponent,
    FigureComponent,
    SelectorUnitComponent,
    SearchBarComponent,
    ResultComponent,
    ScoresComponent,
    ButtonComponent,
    ShippingPolicyComponent,
    CarouselComponent,
    CoupounsComponent,
    CarouselResultComponent,
    PurchasesComponent,
    RecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent],
})
export class AppModule {}
