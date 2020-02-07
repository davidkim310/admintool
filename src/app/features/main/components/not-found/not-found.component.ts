import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `
    <app-landing></app-landing>
        <div>
            Page not found! <a routerLink="/">go home</a>
        </div>
    `
})
export class NotFoundComponent {}