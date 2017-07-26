import { Component } from "@angular/core";
import { Cart } from "../models/cart.model";

@Component({
    moduleId: module.id,
    templateUrl: "cartdetailcomponet.html"
})

export class CartDetailComponent{
    constructor(public cart: Cart){}
}