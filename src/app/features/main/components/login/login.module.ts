import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        NgZorroAntdModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {}