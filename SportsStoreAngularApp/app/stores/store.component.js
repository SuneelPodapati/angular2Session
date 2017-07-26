"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const product_repository_1 = require("../models/product.repository");
const cart_model_1 = require("../models/cart.model");
let StoreComponent = class StoreComponent {
    constructor(repository, cart) {
        this.repository = repository;
        this.cart = cart;
        this.selectedCategory = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    }
    get products() {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory).splice(pageIndex, this.productsPerPage);
        // return this.repository.getProducts(this.selectedCategory).splice(pageIndex, pageIndex + this.productsPerPage);
        //return this.repository.getProducts();
    }
    get categories() { return this.repository.getCategories(); }
    changeCategory(newCategory) { this.selectedCategory = newCategory; }
    changePage(newPage) { this.selectedPage = newPage; }
    changePageSize(newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
    get pageCount() {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }
    addProductToCart(product) {
        this.cart.addLine(product);
    }
};
StoreComponent = __decorate([
    core_1.Component({
        selector: "stores",
        moduleId: module.id,
        templateUrl: "store.component.html"
    }),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository, cart_model_1.Cart])
], StoreComponent);
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=store.component.js.map