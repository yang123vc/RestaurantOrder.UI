import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        OrderComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'order', pathMatch: 'full' },
            { path: 'order', component: OrderComponent },
            { path: '**', redirectTo: 'order' }
        ])
    ]
})
export class AppModuleShared {
}
