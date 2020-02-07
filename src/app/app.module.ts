import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NgModule } from '@angular/core';
import { LoginModule } from './features/main/components/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './features/main/components/landing/landing.component';
import { NotFoundComponent } from './features/main/components/not-found/not-found.component';
import { NgZorroAntdModule, NZ_ICONS, NZ_I18N, en_US } from 'ng-zorro-antd';
/** config angular i18n **/
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/layout/footer/footer.component';
registerLocaleData(en);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule, DragDropModule,
    // Ant Design Modules
    NgZorroAntdModule,
    // Custom Modules
    LoginModule,

  ],
  /** config ng-zorro-antd i18n (language && date) **/
  providers   : [
    { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
