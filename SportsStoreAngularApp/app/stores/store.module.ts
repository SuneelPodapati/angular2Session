import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../models/model.module";
import { CounterDirective } from "./counter.directive";
import { CartSummary } from "./cartsummary.component";
import { CartDetailComponent } from "./cartdetail.component";

@NgModule({
    imports: [BrowserModule, ModelModule],
    declarations: [StoreComponent, CounterDirective, CartSummary, CartDetailComponent],
    exports: [StoreComponent, CartDetailComponent]
})

export class StoreModule{}