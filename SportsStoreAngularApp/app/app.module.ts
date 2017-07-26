import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { StoreComponent } from "./stores/store.component";
import { StoreModule } from "./stores/store.module";
import { CartDetailComponent } from "./stores/cartdetail.component";
import { RouterModule } from "@angular/router";
import { CheckoutComponent } from "./stores/checkout.component";

@NgModule({
    imports: [BrowserModule, FormsModule, StoreModule, RouterModule.forRoot([
        { path: "store", component: StoreComponent},
        { path: "cart", component: CartDetailComponent},
        { path: "checkout", component: StoreComponent},
        { path: "**", redirectTo: "/store"}
    ])],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}