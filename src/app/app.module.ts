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
import { AryanComponent } from './aryan/aryan.component';
import { MypurchaseComponent } from './mypurchase/mypurchase.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './profile/info/info.component';
import { SelectorComponent } from './selector/selector.component';
import { SelectorDimensionComponent } from './selector/selector-dimension/selector-dimension.component';
import { FigureComponent } from './selector/figure/figure.component';
import { SelectorUnitComponent } from './selector/selector-unit/selector-unit.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent],
})
export class AppModule {}
